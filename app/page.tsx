'use client';

import { QRGenerator } from '@/components/qr-generator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { lazy, Suspense } from 'react';
import Link from 'next/link';

// Lazy load components that are below the fold
const HowItWorks = lazy(() => import('@/components/how-it-works').then(module => ({ default: module.HowItWorks })));
const FAQ = lazy(() => import('@/components/faq').then(module => ({ default: module.FAQ })));
const TrustSignals = lazy(() => import('@/components/trust-signals').then(module => ({ default: module.TrustSignals })));
const Testimonials = lazy(() => import('@/components/testimonials').then(module => ({ default: module.Testimonials })));
const UsageGuidelines = lazy(() => import('@/components/usage-guidelines').then(module => ({ default: module.UsageGuidelines })));

// Loading component for lazy-loaded sections
function SectionSkeleton() {
  return (
    <div className="py-16">
      <div className="animate-pulse">
        <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-muted rounded w-2/3 mx-auto mb-8"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted rounded-lg h-48"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NetworkStatus />
      <PerformanceMonitor />

      {/* WebSite Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Free UPI QR Generator",
            "alternateName": "freeupiqrgenerator.com",
            "url": "https://freeupiqrgenerator.com/",
            "description": "The easiest way to create a free UPI QR code. Generate unlimited, high-resolution QR codes for payments instantly.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://freeupiqrgenerator.com/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "UPI QR Code Generator",
              "url": "https://freeupiqrgenerator.com/",
              "applicationCategory": "FinanceApplication",
              "description": "Generate free UPI QR codes instantly to accept UPI payments online.",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "INR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1250"
              }
            }
          })
        }}
      />
      
      <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <div className="mobile-container mobile-section">
          {/* Hero Section */}
          <header className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary-500 to-primary bg-clip-text text-transparent">
              Free UPI QR Code Generator: Create Your QR in Seconds
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto">
              The easiest way to create a free UPI QR code. Generate unlimited, high-resolution QR codes for payments instantly.
              Completely free, no sign-up required, and unlimited downloads.
            </p>

            <ul className="flex flex-wrap justify-center gap-4 text-sm" role="list" aria-label="Key features">
              <li className="flex items-center gap-2 text-foreground-muted">
                <div className="w-2 h-2 bg-success rounded-full" aria-hidden="true"></div>
                Completely Free
              </li>
              <li className="flex items-center gap-2 text-foreground-muted">
                <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                No Sign-up Required
              </li>
              <li className="flex items-center gap-2 text-foreground-muted">
                <div className="w-2 h-2 bg-secondary-500 rounded-full" aria-hidden="true"></div>
                Unlimited Downloads
              </li>
            </ul>
          </header>

          <section aria-label="QR Code Generator Tool" className="mb-8 sm:mb-12">
            <QRGenerator />

            {/* Security Notice */}
            <div className="mt-6 sm:mt-8 mobile-card bg-secondary-50 dark:bg-secondary-900/20 border-secondary-200 dark:border-secondary-800">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center transition-smooth hover:scale-110">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-700 dark:text-secondary-300 mb-1">
                    100% Secure & Private
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Your UPI details are processed entirely in your browser. We never store, transmit, or access your personal information.
                    All QR code generation happens locally on your device for maximum security and privacy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Everything You Need to Know About UPI QR Codes
              </h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                Explore our comprehensive guides and resources to make the most of UPI QR codes for your business or personal use.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/upi-qr-code-generator"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">QR Generator Tool</h3>
                <p className="text-sm text-foreground-secondary">
                  Access our dedicated generator with advanced customization options and step-by-step guidance.
                </p>
              </Link>

              <Link
                href="/features"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-600 group-hover:text-secondary-foreground transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Features & Benefits</h3>
                <p className="text-sm text-foreground-secondary">
                  Discover all the powerful features that make our generator the best choice for your needs.
                </p>
              </Link>

              <Link
                href="/blog/upi-qr-codes-the-ultimate-guide"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-success/10 text-success rounded-lg flex items-center justify-center mb-4 group-hover:bg-success group-hover:text-success-foreground transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Ultimate Guide</h3>
                <p className="text-sm text-foreground-secondary">
                  Complete guide covering everything from basics to advanced UPI QR code usage and best practices.
                </p>
              </Link>
            </div>
          </section>

          <div className="space-y-16">
            <Suspense fallback={<SectionSkeleton />}>
              <TrustSignals />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <HowItWorks />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <FAQ />
            </Suspense>
          </div>
        </div>
      </main>

      {/* Usage Guidelines - Full Width Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <UsageGuidelines />
      </Suspense>

      <Footer />
      </div>
    </>
  );
}