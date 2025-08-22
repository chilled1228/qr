'use client';

import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Download, Smartphone } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      title: 'Step 1: Input Your UPI ID',
      description: 'Enter your UPI ID, merchant name, and optional amount. Our generator supports all major UPI apps like PhonePe, Google Pay, and Paytm.',
    },
    {
      icon: Smartphone,
      title: 'Step 2: Customize Your QR Code',
      description: 'Choose colors, upload your logo, and adjust the size. Create a branded UPI QR code that matches your business identity.',
    },
    {
      icon: Download,
      title: 'Step 3: Download & Share',
      description: 'Download your UPI QR code in high-resolution PNG or SVG format. Print it or share digitally to start accepting payments instantly.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
          How to Generate UPI QR Code in 3 Steps
        </h2>
        <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          Create your professional UPI payment QR code in under 30 seconds. No technical knowledge required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {steps.map((step, index) => (
          <div key={index} className="card-subtle p-6 sm:p-8 text-center hover:bg-muted/50 transition-colors duration-200">
            <div className="relative mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">{step.title}</h3>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <p className="text-sm sm:text-base font-medium">
            Used by over 10,000+ merchants across India for secure UPI payments
          </p>
        </div>
      </div>
    </section>
  );
}