import { useState, useEffect, useCallback, useRef } from 'react';
import { generateUPIString } from '@/lib/upi-utils';
import { generateQRCode } from '@/lib/qr-utils';
import type { QRFormData, QROptions } from '@/types/qr-types';

interface UseRealtimeQRProps {
  formData: QRFormData;
  options: QROptions;
  debounceMs?: number;
}

interface UseRealtimeQRReturn {
  qrCode: string | null;
  upiString: string;
  isGenerating: boolean;
  hasValidData: boolean;
  isPlaceholder: boolean;
}

// Sample placeholder data for initial QR code
const PLACEHOLDER_DATA: QRFormData = {
  upiId: 'merchant@paytm',
  merchantName: 'Sample Store',
  amount: '100',
  note: 'Payment for services'
};

export function useRealtimeQR({ 
  formData, 
  options, 
  debounceMs = 400 
}: UseRealtimeQRProps): UseRealtimeQRReturn {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [upiString, setUpiString] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();
  const abortControllerRef = useRef<AbortController>();

  // Check if we have valid data for QR generation
  const hasValidData = Boolean(formData.upiId?.trim() && formData.merchantName?.trim());
  
  // Check if form has any data at all
  const hasAnyData = Boolean(
    formData.upiId?.trim() || 
    formData.merchantName?.trim() || 
    formData.amount?.trim() || 
    formData.note?.trim()
  );

  const generateQR = useCallback(async (data: QRFormData, isPlaceholderGeneration = false) => {
    // Cancel any ongoing generation
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      setIsGenerating(true);
      
      // Generate UPI string
      const upi = generateUPIString(data);
      setUpiString(upi);

      // Add a small delay for smooth transition
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Check if request was aborted
      if (signal.aborted) return;

      // Generate QR code
      const qr = await generateQRCode(upi, options);
      
      // Check if request was aborted
      if (signal.aborted) return;

      setQrCode(qr);
      setIsPlaceholder(isPlaceholderGeneration);
      
    } catch (error) {
      if (!signal.aborted) {
        console.error('QR generation failed:', error);
        // Don't clear the QR code on error, keep the previous one
      }
    } finally {
      if (!signal.aborted) {
        setIsGenerating(false);
      }
    }
  }, [options]);

  // Generate initial placeholder QR code
  useEffect(() => {
    generateQR(PLACEHOLDER_DATA, true);
  }, [generateQR]);

  // Real-time generation with debouncing
  useEffect(() => {
    // Clear existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // If no data at all, show placeholder
    if (!hasAnyData) {
      debounceTimeoutRef.current = setTimeout(() => {
        generateQR(PLACEHOLDER_DATA, true);
      }, debounceMs);
      return;
    }

    // If we have some data, generate QR (even if incomplete)
    debounceTimeoutRef.current = setTimeout(() => {
      // Use current data or fallback to placeholder for missing required fields
      const dataToUse: QRFormData = {
        upiId: formData.upiId?.trim() || PLACEHOLDER_DATA.upiId,
        merchantName: formData.merchantName?.trim() || PLACEHOLDER_DATA.merchantName,
        amount: formData.amount?.trim() || '',
        note: formData.note?.trim() || ''
      };

      generateQR(dataToUse, !hasValidData);
    }, debounceMs);

    // Cleanup timeout on unmount or dependency change
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [formData, hasAnyData, hasValidData, debounceMs, generateQR]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    qrCode,
    upiString,
    isGenerating,
    hasValidData,
    isPlaceholder
  };
}
