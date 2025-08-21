'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface QRDiffusionProps {
  qrCode: string | null;
  isGenerating: boolean;
  alt: string;
  title: string;
  className?: string;
}

export function QRDiffusion({ 
  qrCode, 
  isGenerating, 
  alt, 
  title, 
  className 
}: QRDiffusionProps) {
  const [currentQR, setCurrentQR] = useState<string | null>(null);

  useEffect(() => {
    // Simply update the QR code without animations
    setCurrentQR(qrCode);
  }, [qrCode]);

  if (!currentQR) {
    return (
      <div className={cn(
        "aspect-square bg-muted rounded-lg flex items-center justify-center p-4",
        className
      )}>
        <p className="text-foreground-muted text-center text-sm">
          Enter your UPI details to generate your custom QR code
        </p>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-square rounded-lg overflow-hidden", className)}>
      {/* Single QR Image that transforms in place */}
      {currentQR ? (
        <img
          src={currentQR}
          alt={alt}
          title={title}
          className="w-full h-full object-contain rounded"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-foreground-muted">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 border-2 border-dashed border-foreground-muted/30 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-foreground-muted/20 rounded"></div>
            </div>
            <p className="text-sm">QR code will appear here</p>
          </div>
        </div>
      )}

      {/* Subtle processing indicator - no overlay */}
      {isGenerating && currentQR && (
        <div className="absolute top-2 right-2">
          <div className="w-3 h-3 border border-primary/50 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}


    </div>
  );
}
