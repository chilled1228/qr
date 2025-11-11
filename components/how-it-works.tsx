'use client';

import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Download, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      title: 'Step 1: Input UPI Payment Details',
      description: 'Enter your UPI ID, merchant name, and optional amount for payment QR code generation. Our free QR generator supports all major UPI apps for digital transactions.',
    },
    {
      icon: Smartphone,
      title: 'Step 2: Design Custom QR Code',
      description: 'Create branded QR codes with logo integration, color customization, and professional design tools. Perfect for business QR codes and marketing campaigns.',
    },
    {
      icon: Download,
      title: 'Step 3: Export QR for Multiple Uses',
      description: 'Download QR codes in high-resolution formats (PNG, SVG, PDF) for print, digital marketing, and payment processing. Immediate use for contactless payments.',
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

      <div className="mt-12 sm:mt-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <p className="text-sm sm:text-base font-medium">
            Used by 50,000+ businesses across India for secure UPI payments and QR code solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/upi-qr-code-generator"
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            Start Creating QR Codes
          </Link>
          <Link
            href="/features"
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            Explore QR Design Features
          </Link>
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            Learn QR Code Best Practices
          </Link>
          <Link
            href="/faq"
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            QR Security Questions
          </Link>
        </div>
      </div>
    </section>
  );
}