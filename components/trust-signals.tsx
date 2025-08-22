'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Zap, Users, CheckCircle, Globe, Phone } from 'lucide-react';
import Link from 'next/link';

export function TrustSignals() {
  const signals = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your data is processed securely in your browser. We never store your UPI ID or personal information.',
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      description: 'Client-side processing ensures your sensitive data never leaves your device. GDPR compliant.',
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Generate high-quality UPI QR codes in seconds. No registration or waiting required.',
    },
    {
      icon: Users,
      title: 'Trusted by 10,000+',
      description: 'Used by merchants, freelancers, and businesses across India for secure payments.',
    },
    {
      icon: CheckCircle,
      title: 'UPI Compliant',
      description: 'Generates standard UPI QR codes compatible with all major payment apps in India.',
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: 'Works offline after initial load. No server dependency for QR code generation.',
    },
  ];

  return (
    <section>
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
          Why Choose Our QR Code Generator?
        </h2>
        <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          The most trusted and feature-rich UPI QR code generator used by over 10,000 merchants across India.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {signals.map((signal, index) => (
          <div key={index} className="card-elevated p-6 sm:p-8 text-center hover:border-primary/30 transition-colors duration-200">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
              <signal.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">{signal.title}</h3>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">{signal.description}</p>
          </div>
        ))}
      </div>

      {/* Conversion CTA */}
      <div className="mt-12 sm:mt-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
            Ready to Experience the Difference?
          </h3>
          <p className="text-base sm:text-lg text-foreground-secondary mb-6 sm:mb-8">
            Join thousands of satisfied merchants. Create your first QR code in under 30 seconds.
          </p>
          <Link
            href="/upi-qr-code-generator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors focus-visible-enhanced"
          >
            Try It Free Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}