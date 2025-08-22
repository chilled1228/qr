import { QRGenerator } from '@/components/qr-generator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Breadcrumb } from '@/components/breadcrumb';
import { lazy, Suspense } from 'react';
import { Metadata } from 'next';

// Lazy load components that are below the fold
const FAQ = lazy(() => import('@/components/faq').then(module => ({ default: module.FAQ })));

// Skeleton component for loading states
function SectionSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/6"></div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Generate UPI QR Code Online | Free & Customizable | freeupiqrgenerator.com',
  description: 'Create a custom UPI QR code in seconds. Enter your UPI ID, add your logo, and download instantly. No sign-up required. Generate your payment QR now!',
  keywords: 'generate upi qr code online, upi qr code maker, free upi payment qr code, upi qr generator, create upi qr code',
  alternates: {
    canonical: '/upi-qr-code-generator',
  },
};

export default function UPIQRGeneratorPage() {
  return (
    <>
      <NetworkStatus />
      <PerformanceMonitor />

      {/* HowTo Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Generate a UPI QR Code",
            "description": "Step-by-step guide to create a UPI QR code for accepting payments",
            "image": "https://freeupiqrgenerator.com/upi-qr-generator-steps.jpg",
            "totalTime": "PT2M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "UPI ID or Virtual Payment Address"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Free UPI QR Code Generator"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Enter your UPI ID",
                "text": "Enter your UPI ID or Virtual Payment Address (VPA) in the input field.",
                "image": "https://freeupiqrgenerator.com/step1-enter-upi-id.jpg",
                "url": "https://freeupiqrgenerator.com/upi-qr-code-generator#step1"
              },
              {
                "@type": "HowToStep",
                "name": "Add Payee Details",
                "text": "Enter the Payee Name and a specific Amount (Optional) for your QR code.",
                "image": "https://freeupiqrgenerator.com/step2-payee-details.jpg",
                "url": "https://freeupiqrgenerator.com/upi-qr-code-generator#step2"
              },
              {
                "@type": "HowToStep",
                "name": "Customize Design",
                "text": "Customize the design with colors and a logo (Optional) to match your brand.",
                "image": "https://freeupiqrgenerator.com/step3-customize.jpg",
                "url": "https://freeupiqrgenerator.com/upi-qr-code-generator#step3"
              },
              {
                "@type": "HowToStep",
                "name": "Generate and Download",
                "text": "Generate and Download your unique UPI QR Code in high resolution.",
                "image": "https://freeupiqrgenerator.com/step4-download.jpg",
                "url": "https://freeupiqrgenerator.com/upi-qr-code-generator#step4"
              }
            ]
          })
        }}
      />

      <div className="bg-background">
        <Header />
        <Breadcrumb />

        <main className="mobile-container mobile-section" id="main-content">
          {/* Hero Section */}
          <section className="text-center space-y-6 mb-12">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Generate Your UPI QR Code Online
              </h1>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                Create a professional UPI QR code in seconds. Completely free, fully customizable, and no sign-up required.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-success rounded-full"></span>
                  <span>Truly Free</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>No Sign-up Required</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 text-secondary-600 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full"></span>
                  <span>Unlimited Downloads</span>
                </div>
              </div>
            </div>
          </section>

          {/* QR Generator Tool */}
          <section className="mb-16">
            <QRGenerator />
          </section>

          {/* Instructions Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                How to Create Your UPI QR Code
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3" id="step1">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    1
                  </div>
                  <h3 className="font-semibold">Enter your UPI ID</h3>
                  <p className="text-sm text-foreground-secondary">
                    Enter your UPI ID or Virtual Payment Address (VPA)
                  </p>
                </div>
                <div className="text-center space-y-3" id="step2">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    2
                  </div>
                  <h3 className="font-semibold">Add Payee Details</h3>
                  <p className="text-sm text-foreground-secondary">
                    Enter the Payee Name and Amount (Optional)
                  </p>
                </div>
                <div className="text-center space-y-3" id="step3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    3
                  </div>
                  <h3 className="font-semibold">Customize Design</h3>
                  <p className="text-sm text-foreground-secondary">
                    Customize with colors and logo (Optional)
                  </p>
                </div>
                <div className="text-center space-y-3" id="step4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    4
                  </div>
                  <h3 className="font-semibold">Generate & Download</h3>
                  <p className="text-sm text-foreground-secondary">
                    Download your unique UPI QR Code instantly
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                Why Choose Our UPI QR Generator?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3 p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">100% Secure</h3>
                  <p className="text-sm text-foreground-secondary">
                    All processing happens in your browser. No data stored or transmitted.
                  </p>
                </div>
                <div className="text-center space-y-3 p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Multiple Formats</h3>
                  <p className="text-sm text-foreground-secondary">
                    Download in PNG, SVG, or PDF formats for any use case.
                  </p>
                </div>
                <div className="text-center space-y-3 p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Full Customization</h3>
                  <p className="text-sm text-foreground-secondary">
                    Add your logo, change colors, and create branded QR codes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tool-specific FAQ */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Does this QR code expire?</h3>
                  <p className="text-foreground-secondary">
                    No, UPI QR codes generated by our tool never expire. They remain functional as long as your UPI ID is active.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Is it safe to use this generator?</h3>
                  <p className="text-foreground-secondary">
                    Absolutely! All QR code generation happens locally in your browser. We never store, access, or transmit your UPI details.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Can I create a QR code for a fixed amount?</h3>
                  <p className="text-foreground-secondary">
                    Yes, you can specify a fixed amount in the amount field. This will pre-fill the amount when someone scans your QR code.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Full FAQ Section */}
          <Suspense fallback={<SectionSkeleton />}>
            <FAQ />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
