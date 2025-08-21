'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalQRCardProps {
  qrCode: string;
  merchantName: string;
  upiId: string;
  className?: string;
}

export const ProfessionalQRCard = forwardRef<HTMLDivElement, ProfessionalQRCardProps>(
  ({ qrCode, merchantName, upiId, className }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "bg-white p-8 rounded-lg shadow-xl border border-gray-200 max-w-sm mx-auto",
          "font-sans text-center space-y-6 relative",
          className
        )}
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {/* Merchant Name */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider leading-tight">
            {merchantName || 'MERCHANT NAME'}
          </h2>
        </div>

        {/* QR Code */}
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg border-2 border-gray-100 shadow-sm">
            <img
              src={qrCode}
              alt={`UPI QR Code for ${merchantName}`}
              className="w-44 h-44 object-contain"
            />
          </div>
        </div>

        {/* UPI ID */}
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">
            {upiId || 'merchant@upi'}
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-2">
          <p className="text-gray-700 text-sm font-medium">
            Scan and pay with any BHIM UPI app
          </p>
        </div>

        {/* BHIM UPI Logos */}
        <div className="flex justify-center items-center space-x-6 py-3">
          <img
            src="/logos/bhim-upi.svg"
            alt="BHIM UPI"
            className="h-8 object-contain"
          />
          <img
            src="/logos/upi.svg"
            alt="UPI"
            className="h-8 object-contain"
          />
        </div>

        {/* Payment App Logos */}
        <div className="flex justify-center items-center space-x-6 py-3 border-t border-gray-100">
          {/* Google Pay */}
          <img
            src="/logos/google-pay.svg"
            alt="Google Pay"
            className="h-6 object-contain"
          />

          {/* Paytm */}
          <img
            src="/logos/paytm.svg"
            alt="Paytm"
            className="h-6 object-contain"
          />
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-gray-100">
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
