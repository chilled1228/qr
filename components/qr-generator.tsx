'use client';

import { useState, useCallback } from 'react';
import { QrCode } from 'lucide-react';
import { QRForm } from './qr-form';
import { QRDisplay } from './qr-display';
import { useRealtimeQR } from '@/hooks/use-realtime-qr';
import type { QRFormData, QROptions } from '@/types/qr-types';
import { toast } from 'sonner';
import { useNetworkStatus } from './network-status';

export function QRGenerator() {
  const [formData, setFormData] = useState<QRFormData>({
    upiId: '',
    merchantName: '',
    amount: '',
    note: '',
  });

  const [qrOptions, setQROptions] = useState<QROptions>({
    size: 512,
    fgColor: '#000000',
    bgColor: '#ffffff',
    logo: null,
  });

  const isOnline = useNetworkStatus();

  // Real-time QR generation
  const {
    qrCode,
    upiString,
    isGenerating,
    hasValidData,
    isPlaceholder
  } = useRealtimeQR({
    formData,
    options: qrOptions,
    debounceMs: 400
  });

  // Handle form data changes (no manual submission needed)
  const handleFormChange = useCallback((data: QRFormData) => {
    setFormData(data);
  }, []);

  // Handle QR options changes
  const handleOptionsChange = useCallback((options: QROptions) => {
    setQROptions(options);
  }, []);



  return (
    <div className="max-w-4xl mx-auto">
      {/* Single Unified View - No Layout Shifting */}
      <div className="mobile-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Form Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <QrCode className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Create QR Code</h2>
            </div>

            <QRForm
              onChange={handleFormChange}
              formData={formData}
              isPlaceholder={isPlaceholder}
            />
          </div>

          {/* QR Display Section - Always Visible */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
                <div className="h-2 w-2 bg-primary rounded"></div>
              </div>
              <h2 className="text-lg font-semibold">Your QR Code</h2>
            </div>

            <QRDisplay
              qrCode={qrCode}
              upiString={upiString}
              formData={formData}
              options={qrOptions}
              onOptionsChange={handleOptionsChange}
              isGenerating={isGenerating}
            />
          </div>
        </div>
      </div>
    </div>
  );
}