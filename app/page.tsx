import { QRGenerator } from '@/components/qr-generator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { HowItWorks } from '@/components/how-it-works';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { TrustSignals } from '@/components/trust-signals';
import { lazy, Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Download, Palette } from 'lucide-react';

// Lazy load components that are below the fold
const LazyTestimonials = lazy(() => import('@/components/testimonials').then(module => ({ default: module.Testimonials })));
const LazyFAQ = lazy(() => import('@/components/faq').then(module => ({ default: module.FAQ })));

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

export default function HomePage() {
  return (
    <>
      <NetworkStatus />
      <PerformanceMonitor />

      {/* Organization Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Free UPI QR Generator",
            "url": "https://freeupiqrgenerator.com",
            "logo": "https://freeupiqrgenerator.com/logo.png",
            "description": "Free UPI QR code generator for businesses and individuals. Create customizable UPI payment QR codes instantly.",
            "sameAs": [
              "https://twitter.com/freeupiqr",
              "https://facebook.com/freeupiqr"
            ]
          })
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="mobile-container mobile-section pt-8 pb-12">
            <div className="text-center space-y-6 mb-12">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Free UPI QR Code Generator
                </h1>
                <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                  Create professional UPI QR codes in seconds. Completely free, fully customizable, and no sign-up required.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>No Sign-up</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary-600 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-secondary-600 rounded-full"></span>
                    <span>Unlimited Use</span>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Generator Tool */}
            <div className="mb-16">
              <QRGenerator />
            </div>
          </section>

          {/* Key Features */}
          <section className="mobile-container mobile-section mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Choose Our UPI QR Generator?
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                The most trusted and feature-rich UPI QR code generator in India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">100% Secure</h3>
                <p className="text-foreground-secondary">
                  All processing happens in your browser. No data stored or transmitted to our servers.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Multiple Formats</h3>
                <p className="text-foreground-secondary">
                  Download in PNG, SVG, or PDF formats. High resolution for print and digital use.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Full Customization</h3>
                <p className="text-foreground-secondary">
                  Add your logo, change colors, and create branded QR codes that match your business.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mobile-container">
            <HowItWorks />
          </section>

          {/* Trust Signals */}
          <section className="mobile-container mobile-section">
            <TrustSignals />
          </section>

          {/* Testimonials */}
          <section className="mobile-container">
            <Suspense fallback={<SectionSkeleton />}>
              <LazyTestimonials />
            </Suspense>
          </section>

          {/* CTA Section */}
          <section className="mobile-container mobile-section text-center mb-16">
            <div className="max-w-2xl mx-auto space-y-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to Accept UPI Payments?
              </h2>
              <p className="text-lg text-foreground-secondary">
                Join thousands of businesses using our free UPI QR generator
              </p>
              <Link
                href="/upi-qr-code-generator"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Create Your QR Code Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mobile-container mobile-section">
            <Suspense fallback={<SectionSkeleton />}>
              <LazyFAQ />
            </Suspense>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}