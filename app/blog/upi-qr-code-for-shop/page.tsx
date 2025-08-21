import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  Building, 
  CheckCircle,
  Shield,
  Smartphone,
  Users,
  TrendingUp,
  AlertTriangle,
  Info,
  Download,
  Printer
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Create a UPI QR Code for Your Shop - Complete Guide | freeupiqrgenerator.com',
  description: 'Step-by-step guide for retail businesses to set up UPI QR code payments and increase customer convenience. Learn best practices for shop owners.',
  keywords: 'UPI QR code for shop, retail UPI payments, shop QR code setup, business UPI QR, merchant QR code',
  alternates: {
    canonical: '/blog/upi-qr-code-for-shop',
  },
};

export default function ShopQRCodePage() {
  return (
    <>
      <NetworkStatus />
      <PerformanceMonitor />

      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Create a UPI QR Code for Your Shop",
            "description": "Complete guide for retail businesses to set up UPI QR code payments and increase customer convenience.",
            "image": "https://freeupiqrgenerator.com/shop-upi-qr-code-guide.jpg",
            "author": {
              "@type": "Organization",
              "name": "Free UPI QR Generator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Free UPI QR Generator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://freeupiqrgenerator.com/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://freeupiqrgenerator.com/blog/upi-qr-code-for-shop"
            }
          })
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="mobile-container mobile-section">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="text-center space-y-6 mb-16">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 text-sm text-foreground-secondary">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Business Guide
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  How to Create a UPI QR Code for Your Shop
                </h1>
                <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                  A complete step-by-step guide for retail businesses to set up UPI QR code payments and increase customer convenience while reducing cash handling.
                </p>
              </div>
            </header>

            {/* Quick Benefits */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6 text-center">Why Your Shop Needs a UPI QR Code</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Instant Payments</h3>
                    <p className="text-sm text-foreground-secondary">Money reaches your account within seconds</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Reduced Cash Risk</h3>
                    <p className="text-sm text-foreground-secondary">Less cash handling means better security</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Happy Customers</h3>
                    <p className="text-sm text-foreground-secondary">Convenient payment option for all customers</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Guide */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Step-by-Step Setup Guide
              </h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Get Your UPI ID Ready</h3>
                      <p className="text-foreground-secondary mb-4">
                        Your UPI ID is your unique payment address. If you don't have one, download any UPI app (PhonePe, Google Pay, Paytm) and create your UPI ID.
                      </p>
                      <div className="bg-info/5 p-4 rounded-lg border-l-4 border-info">
                        <p className="text-sm">
                          <strong>Example UPI IDs:</strong> yourshopname@paytm, yourname@phonepe, shopowner@googlepay
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Create Your QR Code</h3>
                      <p className="text-foreground-secondary mb-4">
                        Use our free generator to create a professional QR code for your shop. You can customize it with your shop colors and logo.
                      </p>
                      <Link 
                        href="/upi-qr-code-generator"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        Create QR Code Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Download and Print</h3>
                      <p className="text-foreground-secondary mb-4">
                        Download your QR code in high resolution and print it. For best results, print at least 5cm x 5cm size.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-success/5 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Download className="w-4 h-4 text-success" />
                            <strong>Download Tips:</strong>
                          </div>
                          <ul className="space-y-1 ml-6">
                            <li>• Use PNG format for printing</li>
                            <li>• Choose high resolution (512px+)</li>
                            <li>• Save multiple copies</li>
                          </ul>
                        </div>
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Printer className="w-4 h-4 text-primary" />
                            <strong>Printing Tips:</strong>
                          </div>
                          <ul className="space-y-1 ml-6">
                            <li>• Use good quality paper</li>
                            <li>• Ensure clear, sharp printing</li>
                            <li>• Consider laminating for durability</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Display Strategically</h3>
                      <p className="text-foreground-secondary mb-4">
                        Place your QR code where customers can easily see and scan it. Multiple locations work better than one.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2 text-success">✓ Best Locations:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Near the cash counter</li>
                            <li>• At the entrance/exit</li>
                            <li>• On the billing counter</li>
                            <li>• Near product displays</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2 text-warning">⚠ Avoid These:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Behind glass or reflective surfaces</li>
                            <li>• Too high or too low positions</li>
                            <li>• Areas with poor lighting</li>
                            <li>• Cluttered or busy backgrounds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Train Your Staff</h3>
                      <p className="text-foreground-secondary mb-4">
                        Make sure your staff knows how UPI payments work and can help customers who need assistance.
                      </p>
                      <div className="bg-info/5 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Staff Training Points:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• How to guide customers to scan the QR code</li>
                          <li>• How to verify payment confirmation</li>
                          <li>• What to do if payment fails</li>
                          <li>• How to handle customer questions about UPI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Best Practices for Shop Owners
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-success">Do's</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Keep multiple printed copies as backup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Check your UPI app regularly for payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Keep your phone charged and UPI app updated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Display clear "UPI Accepted" signage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain good lighting around QR code</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-warning">Don'ts</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't share your UPI PIN with anyone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't accept payment without confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't place QR codes in hard-to-reach places</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't use damaged or unclear QR codes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't forget to reconcile payments daily</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Set Up UPI Payments for Your Shop?</h3>
                <p className="text-foreground-secondary mb-6">
                  Create your professional shop QR code in minutes with our free generator.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/upi-qr-code-generator"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Create Shop QR Code
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="/blog/upi-qr-codes-the-ultimate-guide"
                    className="inline-flex items-center gap-2 bg-card text-foreground border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                  >
                    Read Ultimate Guide
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
