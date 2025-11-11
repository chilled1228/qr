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

      {/* Enhanced Organization Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UPI QR Generator",
            "url": "https://freeupiqrgenerator.com",
            "logo": "https://freeupiqrgenerator.com/logo.png",
            "description": "India's leading free QR code generator and UPI payment solution. Create custom QR codes for businesses, restaurants, marketing campaigns, and contactless payments. Professional QR code creator with logo integration and advanced features.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "url": "https://freeupiqrgenerator.com/contact"
            },
            "founder": {
              "@type": "Person",
              "name": "UPI QR Generator Team"
            },
            "foundingDate": "2024",
            "areaServed": "IN",
            "knowsLanguage": "en",
            "sameAs": [
              "https://twitter.com/freeupiqr",
              "https://facebook.com/freeupiqr"
            ],
            "serviceType": "QR Code Generation Service",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "UPI QR Code Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free QR Code Generator",
                    "description": "Create unlimited QR codes for UPI payments, contactless transactions, and digital wallet integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom QR Code Creator",
                    "description": "Professional QR code design with logos, colors, and brand integration for marketing campaigns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business QR Solutions",
                    "description": "Advanced QR code generator with analytics, tracking, and bulk creation for enterprises"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="mobile-container mobile-section pt-8 pb-12">
            <div className="text-center space-y-6 mb-12">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Free QR Code Generator: Create Professional UPI QR Codes
                </h1>
                <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                  India's #1 QR code generator for UPI payments, contactless transactions, and digital wallet integration. Create custom QR codes with logos, colors, and advanced tracking. Perfect for businesses, restaurants, and marketing campaigns.
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
                <h3 className="text-xl font-semibold">Bank-Level Security QR Generator</h3>
                <p className="text-foreground-secondary">
                  Secure QR code generation with client-side processing. Perfect for UPI payments and sensitive transaction QR codes. No data storage ensures maximum privacy for your digital payment solutions.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Professional QR Code Formats</h3>
                <p className="text-foreground-secondary">
                  Download QR codes in high-resolution PNG, scalable SVG, and print-ready PDF formats. Ideal for marketing materials, business cards, product packaging, and large-scale QR code campaigns.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Advanced QR Code Customization</h3>
                <p className="text-foreground-secondary">
                  Complete QR code designer with logo integration, color schemes, and brand customization. Create QR codes for restaurants, events, businesses, and marketing campaigns that maintain scannability.
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