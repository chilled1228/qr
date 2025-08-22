'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalQRCardProps {
  qrCode: string;
  merchantName: string;
  upiId: string;
  className?: string;
  qrSize?: number; // displayed QR size in px
}

export const ProfessionalQRCard = forwardRef<HTMLDivElement, ProfessionalQRCardProps>(
  ({ qrCode, merchantName, upiId, className, qrSize }, ref) => {
    const displaySize = Math.max(96, Math.min(320, qrSize || 144));
    return (
      <div 
        ref={ref}
        className={cn(
          "bg-white p-5 rounded-xl border border-gray-200 max-w-sm mx-auto",
          "font-sans text-center space-y-4 relative",
          className
        )}
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {/* Merchant Name */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide leading-snug break-words">
            {(merchantName && merchantName.trim()) ? merchantName.trim() : 'MERCHANT NAME'}
          </h2>
        </div>

        {/* QR Code */}
        <div className="flex justify-center">
          <div className="bg-white p-3 rounded-xl border border-gray-200">
            <img
              src={qrCode}
              alt={`UPI QR Code for ${merchantName}`}
              className="object-contain"
              style={{ width: displaySize, height: displaySize }}
            />
          </div>
        </div>

        {/* UPI ID */}
        <div className="space-y-1">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200">
            {upiId || 'merchant@upi'}
          </span>
        </div>

        {/* Instructions */}
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">
            Scan and pay with any BHIM UPI app
          </p>
        </div>

        {/* BHIM UPI Logos */}
        <div className="flex justify-center items-center space-x-4 py-2">
          <img
            src="/logos/bhim-upi.svg"
            alt="BHIM UPI"
            className="h-6 object-contain opacity-80"
          />
          <img
            src="/logos/upi.svg"
            alt="UPI"
            className="h-6 object-contain opacity-80"
          />
        </div>

        {/* Payment App Logos */}
        <div className="flex justify-center items-center space-x-4 py-2 border-t border-gray-100">
          {/* Google Pay */}
          <img
            src="/logos/google-pay.svg"
            alt="Google Pay"
            className="h-5 object-contain opacity-80"
          />

          {/* Paytm */}
          <img
            src="/logos/paytm.svg"
            alt="Paytm"
            className="h-5 object-contain opacity-80"
          />
        </div>

        {/* Footer */}
        <div className="pt-1 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Secure UPI payments powered by{' '}
            <span className="font-medium">UPI QR Generator</span>
          </p>
        </div>
      </div>
    );
  }
);

ProfessionalQRCard.displayName = 'ProfessionalQRCard';
