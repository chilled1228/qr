import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Shield, 
  Download, 
  Palette, 
  Zap, 
  Lock, 
  Smartphone, 
  FileImage, 
  Users, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features - Free UPI QR Code Generator | freeupiqrgenerator.com',
  description: 'Discover all features of our free UPI QR code generator: customization options, multiple download formats, security features, and more. No sign-up required.',
  keywords: 'UPI QR code features, QR code customization, download formats, security features, free QR generator',
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesPage() {
  return (
    <>
      <NetworkStatus />
      <PerformanceMonitor />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="mobile-container mobile-section">
          {/* Hero Section */}
          <section className="text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Powerful Features for Everyone
              </h1>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                Everything you need to create professional UPI QR codes. Completely free, forever.
              </p>
            </div>
          </section>

          {/* Core Features Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Security */}
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-success/10 text-success rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bank-Grade Security</h3>
                <p className="text-foreground-secondary mb-4">
                  All processing happens locally in your browser. Zero data storage, zero transmission, maximum privacy.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>No server-side processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>SSL encrypted connection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>No data collection</span>
                  </li>
                </ul>
              </div>

              {/* Customization */}
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full Customization</h3>
                <p className="text-foreground-secondary mb-4">
                  Create branded QR codes that match your business identity with colors, logos, and styling options.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Custom colors & themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Logo integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Size customization</span>
                  </li>
                </ul>
              </div>

              {/* Download Formats */}
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multiple Formats</h3>
                <p className="text-foreground-secondary mb-4">
                  Download your QR codes in the format that works best for your needs, from web to print.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>High-resolution PNG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Scalable SVG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Print-ready PDF</span>
                  </li>
                </ul>
              </div>

              {/* Speed */}
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-warning/10 text-warning rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-foreground-secondary mb-4">
                  Generate QR codes instantly with real-time preview. No waiting, no loading screens.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Real-time generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Instant preview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>One-click download</span>
                  </li>
                </ul>
              </div>

              {/* Mobile Optimized */}
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-info/10 text-info rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
                <p className="text-foreground-secondary mb-4">
                  Perfect experience on any device. Create QR codes on your phone, tablet, or desktop.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Touch-friendly interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Works offline</span>
                  </li>
                </ul>
              </div>

              {/* No Limits */}
              <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Truly Unlimited</h3>
                <p className="text-foreground-secondary mb-4">
                  No hidden limits, no premium tiers. Create as many QR codes as you need, whenever you need them.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Unlimited QR codes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>No daily limits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>No account required</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Unique Selling Points */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Why Choose Our Generator?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                      <Lock className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold">Privacy First</h3>
                    <p className="text-foreground-secondary">
                      Unlike other generators, we never see your data. Everything happens in your browser.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                      <FileImage className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold">Professional Quality</h3>
                    <p className="text-foreground-secondary">
                      High-resolution outputs suitable for both digital use and professional printing.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold">No Friction</h3>
                    <p className="text-foreground-secondary">
                      No sign-ups, no ads, no watermarks. Just pure functionality when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mb-16">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to Create Your UPI QR Code?
              </h2>
              <p className="text-lg text-foreground-secondary">
                Experience all these features for free. No sign-up required.
              </p>
              <Link 
                href="/upi-qr-code-generator"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Generating Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
