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
    <section className="py-16">
      <div className="text-center section-spacing">
        <h2 className="element-spacing">How to Generate UPI QR Code in 3 Steps</h2>
        <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
          Create your professional UPI payment QR code in under 30 seconds. No technical knowledge required.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="bg-card/70 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="tight-spacing text-foreground">{step.title}</h3>
              <p className="text-foreground-secondary">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-caption text-foreground-muted">
          Used by over 10,000+ merchants across India for secure UPI payments
        </p>
      </div>
    </section>
  );
}