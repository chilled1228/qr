'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Zap, Users, CheckCircle, Globe, Phone } from 'lucide-react';

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
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Use Our UPI QR Code Maker?</h2>
        <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
          Trusted by thousands of merchants for secure, instant, and customizable UPI payment solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal, index) => (
          <Card key={index} className="bg-card/70 backdrop-blur-sm border-0 shadow-xl text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <signal.icon className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{signal.title}</h3>
              <p className="text-sm text-foreground-secondary">{signal.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Need Help or Have Questions?
          </h3>
          <p className="text-sm text-foreground-secondary mb-4">
            Our UPI QR code generator is designed to be simple and secure. If you need assistance or have questions about UPI payments:
          </p>
          <div className="space-y-2 text-sm">
            <p>• Check our FAQ section below for common questions</p>
            <p>• All QR codes work with PhonePe, Google Pay, Paytm, and other UPI apps</p>
            <p>• For technical issues, ensure your browser supports modern web standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}