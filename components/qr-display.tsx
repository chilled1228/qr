'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QRCustomizer } from './qr-customizer';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { ProfessionalQRCard } from './professional-qr-card';
import { downloadProfessionalQRCard } from '@/lib/professional-qr-generator';
import { Download, Copy, Check, Share2, Loader2, CreditCard } from 'lucide-react';
import { toast } from 'sonner';
import type { QRFormData, QROptions } from '@/types/qr-types';

interface QRDisplayProps {
  qrCode: string | null;
  upiString: string;
  formData: QRFormData;
  options: QROptions;
  onOptionsChange: (options: QROptions) => void;
  isGenerating: boolean;
  showActions?: boolean;
  showCustomizer?: boolean;
  showPaymentDetails?: boolean;
}

export function QRDisplay({
  qrCode,
  upiString,
  formData,
  options,
  onOptionsChange,
  isGenerating,
  showActions = true,
  showCustomizer = true,
  showPaymentDetails = true
}: QRDisplayProps) {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQR = useCallback(async (format: 'png' | 'svg') => {
    if (!qrCode) return;

    try {
      if (format === 'png') {
        // Create a higher resolution canvas for PNG download
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.onload = () => {
          const size = 1024; // High resolution for print quality (minimum 2cm x 2cm at 300 DPI)
          canvas.width = size;
          canvas.height = size;
          
          // Fill background
          ctx.fillStyle = options.bgColor;
          ctx.fillRect(0, 0, size, size);
          
          // Draw QR code
          ctx.drawImage(img, 0, 0, size, size);
          
          // Add logo if present
          if (options.logo) {
            const logoImg = new Image();
            logoImg.onload = () => {
              const logoSize = size * 0.2; // 20% of QR code size
              const logoX = (size - logoSize) / 2;
              const logoY = (size - logoSize) / 2;
              
              // Draw white background for logo
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(logoX - 10, logoY - 10, logoSize + 20, logoSize + 20);
              
              ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
              
              // Download
              const link = document.createElement('a');
              link.download = `upi-qr-${formData.merchantName || 'code'}.png`;
              link.href = canvas.toDataURL('image/png');
              link.click();
            };
            logoImg.src = options.logo;
          } else {
            // Download without logo
            const link = document.createElement('a');
            link.download = `upi-qr-${formData.merchantName || 'code'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
          }
        };
        img.src = qrCode;
      } else {
        // Generate SVG with enhanced settings for better compatibility
        const QRCode = (await import('qrcode')).default;
        const svgString = await QRCode.toString(upiString, {
          type: 'svg',
          width: 1024, // High resolution for scalability
          margin: 4, // Minimum 4 modules quiet zone as per UX document requirements
          color: {
            dark: options.fgColor,
            light: options.bgColor,
          },
          errorCorrectionLevel: 'Q', // 25% error correction as per UX document specifications
        });
        
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `upi-qr-${formData.merchantName || 'code'}.svg`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
      
      toast.success(`QR code downloaded as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download QR code');
    }
  }, [qrCode, upiString, formData.merchantName, options]);

  const copyToClipboard = useCallback(async () => {
    if (!upiString) return;

    try {
      await navigator.clipboard.writeText(upiString);
      setCopied(true);
      toast.success('UPI payment link copied to clipboard');
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  }, [upiString]);

  const downloadProfessionalCard = useCallback(async () => {
    if (!qrCode) return;

    try {
      await downloadProfessionalQRCard({
        merchantName: formData.merchantName || 'MERCHANT NAME',
        upiId: formData.upiId || 'merchant@upi',
        qrCode: qrCode,
        format: 'png',
        quality: 1.0,
        scale: 2
      });
      toast.success('Professional QR card downloaded successfully');
    } catch (error) {
      console.error('Professional card download error:', error);
      toast.error('Failed to download professional QR card');
    }
  }, [qrCode, formData.merchantName, formData.upiId]);

  const shareQR = useCallback(async () => {
    if (!navigator.share || !qrCode) return;

    try {
      // Convert data URL to blob
      const response = await fetch(qrCode);
      const blob = await response.blob();
      const file = new File([blob], `upi-qr-${formData.merchantName || 'code'}.png`, {
        type: 'image/png'
      });

      await navigator.share({
        title: `UPI Payment QR Code - ${formData.merchantName}`,
        text: `Pay ${formData.merchantName} via UPI`,
        files: [file],
      });
    } catch (error) {
      // Fallback to copying the UPI string
      copyToClipboard();
    }
  }, [qrCode, formData.merchantName, copyToClipboard]);

  // Keyboard shortcuts for QR actions
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!qrCode) return;

    // Ctrl/Cmd + D for download PNG
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
      e.preventDefault();
      downloadQR('png');
    }
    // Ctrl/Cmd + S for download SVG
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      downloadQR('svg');
    }
    // Ctrl/Cmd + C for copy
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault();
      copyToClipboard();
    }
  }, [qrCode, downloadQR, copyToClipboard]);

  const handleInlineSizeChange = useCallback((size: number[]) => {
    onOptionsChange({ ...options, size: size[0] });
  }, [onOptionsChange, options]);

  if (!qrCode) {
    return (
      <div>
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-4 mb-4">
          <p className="text-foreground-muted text-center text-sm">
            Enter your UPI details to generate your custom QR code
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-foreground-muted">QR code will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4" onKeyDown={handleKeyDown} tabIndex={0} role="region" aria-labelledby="qr-title">
      {/* Professional QR Code Display */}
      {qrCode ? (
        <div className="flex justify-center">
          <ProfessionalQRCard
            qrCode={qrCode}
            merchantName={formData.merchantName || 'MERCHANT NAME'}
            upiId={formData.upiId || 'merchant@upi'}
            qrSize={options.size ? Math.max(96, Math.min(320, options.size / 2)) : 144}
          />
        </div>
      ) : (
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-4">
          <p className="text-foreground-muted text-center text-sm">
            Enter your UPI details to generate your professional QR code
          </p>
        </div>
      )}

      {/* Payment Details - Conditionally shown */}
      {showPaymentDetails && (formData.merchantName || formData.upiId) && (
        <div className="space-y-2">
          <p className="font-medium text-foreground text-sm sm:text-base">Payment Details:</p>
          <div className="text-sm bg-muted p-3 rounded space-y-1">
            {formData.merchantName && <p><strong>Merchant:</strong> {formData.merchantName}</p>}
            {formData.upiId && <p><strong>UPI ID:</strong> {formData.upiId}</p>}
            {formData.amount && (
              <p><strong>Amount:</strong> ₹{formData.amount}</p>
            )}
            {formData.note && (
              <p><strong>Note:</strong> {formData.note}</p>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons - Conditionally shown */}
      {showActions && (
        <div className="space-y-3" role="group" aria-label="QR code actions">
          {isGenerating ? (
            // Skeleton loading state for buttons
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="h-10 sm:h-12 bg-muted rounded animate-pulse"></div>
                <div className="h-10 sm:h-12 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="h-10 sm:h-12 bg-muted rounded animate-pulse"></div>
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <div className="h-10 sm:h-12 bg-muted rounded animate-pulse"></div>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button
                  onClick={() => downloadQR('png')}
                  className="mobile-button w-full"
                  variant="outline"
                  aria-label="Download QR code as PNG image"
                  disabled={!qrCode}
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">PNG</span>
                  <span className="sm:hidden">PNG</span>
                </Button>
                <Button
                  onClick={() => downloadQR('svg')}
                  className="mobile-button w-full"
                  variant="outline"
                  aria-label="Download QR code as SVG vector"
                  disabled={!qrCode}
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">SVG</span>
                  <span className="sm:hidden">SVG</span>
                </Button>
              </div>

              <Button
                onClick={copyToClipboard}
                className="mobile-button w-full"
                variant="outline"
                aria-label={copied ? "Payment link copied to clipboard" : "Copy UPI payment link to clipboard"}
                disabled={!qrCode}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Copy Payment Link</span>
                    <span className="sm:hidden">Copy Link</span>
                  </>
                )}
              </Button>

              <Button
                onClick={downloadProfessionalCard}
                className="mobile-button w-full"
                variant="default"
                aria-label="Download professional QR card with company branding"
                disabled={!qrCode}
              >
                <CreditCard className="mr-2 h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Download Professional Card</span>
                <span className="sm:hidden">Pro Card</span>
              </Button>

              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <Button
                  onClick={shareQR}
                  className="mobile-button w-full"
                  variant="outline"
                  aria-label="Share QR code using device share menu"
                  disabled={!qrCode}
                >
                  <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Share QR Code</span>
                  <span className="sm:hidden">Share</span>
                </Button>
              )}
            </>
          )}
        </div>
      )}

      {/* UPI Payment Link - Conditionally shown */}
      {showActions && (
        <div className="pt-4 border-t border-border">
          <p className="text-xs sm:text-sm text-foreground-muted mb-2">UPI Payment Link:</p>
          <code className="text-xs bg-muted p-2 sm:p-3 rounded block break-all font-mono">
            {upiString}
          </code>
        </div>
      )}

      {/* Inline Size Slider when customizer is hidden */}
      {!showCustomizer && (
        <div className="pt-4 border-t border-border">
          <div className="space-y-2">
            <Label htmlFor="qr-size-inline" className="text-sm font-medium">Size: {options.size}px</Label>
            <Slider
              id="qr-size-inline"
              value={[options.size]}
              onValueChange={handleInlineSizeChange}
              min={256}
              max={1024}
              step={32}
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* QR Customizer - Conditionally shown */}
      {showCustomizer && (
        <div className="pt-4 border-t border-border">
          <QRCustomizer
            options={options}
            onChange={onOptionsChange}
          />
        </div>
      )}
    </div>
  );
}