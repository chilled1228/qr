'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Info, Printer, Smartphone, Store } from 'lucide-react';

export function UsageGuidelines() {
  const guidelines = [
    {
      icon: CheckCircle,
      title: 'Best Practices',
      color: 'text-success',
      bgColor: 'bg-success/10',
      items: [
        'Use high contrast colors (dark on light background)',
        'Ensure minimum 2cm x 2cm size when printing',
        'Test your QR code with multiple UPI apps',
        'Keep the quiet zone (white border) intact',
        'Use clear, readable merchant names'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Important Warnings',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      items: [
        'Never share your UPI PIN or password',
        'Verify payment amounts before confirming',
        'Only use QR codes from trusted sources',
        'Check merchant details before payment',
        'Report suspicious QR codes to authorities'
      ]
    },
    {
      icon: Info,
      title: 'Technical Tips',
      color: 'text-info',
      bgColor: 'bg-info/10',
      items: [
        'PNG format for printing, SVG for digital use',
        'Higher resolution ensures better scanning',
        'Avoid red-green color combinations',
        'Test scanning from different distances',
        'Ensure good lighting when displaying QR codes'
      ]
    }
  ];

  const useCases = [
    {
      icon: Store,
      title: 'Retail Stores',
      description: 'Display at checkout counters, on receipts, or as table tents for easy customer payments.'
    },
    {
      icon: Smartphone,
      title: 'Digital Platforms',
      description: 'Embed in websites, mobile apps, or social media for online payment collection.'
    },
    {
      icon: Printer,
      title: 'Print Materials',
      description: 'Add to business cards, flyers, invoices, or promotional materials for offline payments.'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">QR Code Usage Guidelines</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Follow these guidelines to ensure your UPI QR codes work reliably and securely.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {guidelines.map((guideline, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${guideline.color}`}>
                  <div className={`p-2 rounded-full ${guideline.bgColor}`}>
                    <guideline.icon className="h-4 w-4" />
                  </div>
                  {guideline.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-foreground-secondary flex items-start gap-2">
                      <span className="text-xs mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Common Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{useCase.title}</h4>
                <p className="text-sm text-foreground-secondary">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Reminder */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-destructive mb-2">Security Reminder</h3>
          <p className="text-sm text-foreground-secondary">
            Always verify the merchant details and payment amount before completing any UPI transaction. 
            Never share your UPI PIN, OTP, or banking credentials with anyone.
          </p>
        </div>
      </div>
    </section>
  );
}
