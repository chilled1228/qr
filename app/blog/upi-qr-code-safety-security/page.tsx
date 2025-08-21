import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  Shield, 
  CheckCircle,
  Lock,
  Eye,
  AlertTriangle,
  Users,
  Smartphone,
  TrendingUp,
  Info,
  Zap,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Are UPI QR Code Payments Safe? Everything You Need to Know | freeupiqrgenerator.com',
  description: 'Comprehensive analysis of UPI QR code security, best practices, and how to protect yourself from fraud. Complete safety guide for 2024.',
  keywords: 'UPI QR code security, UPI payment safety, QR code fraud prevention, UPI security features, safe UPI payments',
  alternates: {
    canonical: '/blog/upi-qr-code-safety-security',
  },
};

export default function UPISecurityPage() {
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
            "headline": "Are UPI QR Code Payments Safe? Everything You Need to Know",
            "description": "Comprehensive analysis of UPI QR code security, best practices, and how to protect yourself from fraud.",
            "image": "https://freeupiqrgenerator.com/upi-security-guide.jpg",
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
              "@id": "https://freeupiqrgenerator.com/blog/upi-qr-code-safety-security"
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
                    12 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    Security Guide
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Are UPI QR Code Payments Safe? Everything You Need to Know
                </h1>
                <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                  A comprehensive analysis of UPI QR code security features, potential risks, and best practices to keep your payments safe and secure.
                </p>
              </div>
            </header>

            {/* Quick Answer */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-4">The Short Answer: Yes, UPI QR Codes Are Very Safe</h2>
                    <p className="text-foreground-secondary mb-4">
                      UPI QR code payments are built on a robust, bank-grade security infrastructure with multiple layers of protection. 
                      When used correctly, they are one of the safest digital payment methods available.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Bank-grade encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Two-factor authentication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>Real-time monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Built-in Security Features */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-success/10 text-success rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                Built-in Security Features
              </h2>
              
              <div className="space-y-6">
                <p className="text-foreground-secondary leading-relaxed">
                  UPI (Unified Payments Interface) was designed with security as a top priority. Here are the key security features that protect every transaction:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold">Encryption & Authentication</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>256-bit SSL encryption</strong> for all data transmission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Two-factor authentication</strong> (device + UPI PIN)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Device binding</strong> prevents unauthorized access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Biometric authentication</strong> on supported devices</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-6 h-6 text-secondary-600" />
                      <h3 className="font-semibold">Monitoring & Controls</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Real-time fraud monitoring</strong> by NPCI and banks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Transaction limits</strong> prevent large unauthorized transfers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Instant notifications</strong> for all transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span><strong>Suspicious activity alerts</strong> and automatic blocks</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-info/5 p-6 rounded-lg border-l-4 border-info">
                  <h3 className="font-semibold mb-3">How UPI Security Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-info/20 text-info rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                      <p><strong>Scan QR Code</strong><br/>App reads payment info</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-info/20 text-info rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                      <p><strong>Verify Details</strong><br/>User confirms amount & merchant</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-info/20 text-info rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                      <p><strong>Enter UPI PIN</strong><br/>Secure authentication required</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-info/20 text-info rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">4</div>
                      <p><strong>Process Payment</strong><br/>Encrypted transfer via banks</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Security Concerns */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Common Security Concerns Addressed
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-warning">❓ "Can someone steal money by making me scan a malicious QR code?"</h3>
                  <div className="bg-success/5 p-4 rounded-lg">
                    <p className="text-sm mb-3">
                      <strong>Answer: No, this is not possible.</strong> QR codes only contain payment information - they cannot automatically transfer money.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• You must manually confirm every payment</li>
                      <li>• You must enter your UPI PIN for any transaction</li>
                      <li>• You can see the recipient and amount before paying</li>
                      <li>• No payment can happen without your explicit consent</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-warning">❓ "What if someone replaces a legitimate QR code with their own?"</h3>
                  <div className="bg-success/5 p-4 rounded-lg">
                    <p className="text-sm mb-3">
                      <strong>Answer: Always verify the merchant name.</strong> This is the most important security practice.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Check that the merchant name matches the business</li>
                      <li>• Verify the payment amount is correct</li>
                      <li>• Be cautious of handwritten or temporary QR codes</li>
                      <li>• Ask the merchant to confirm their UPI ID if unsure</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-warning">❓ "Can hackers intercept my payment information?"</h3>
                  <div className="bg-success/5 p-4 rounded-lg">
                    <p className="text-sm mb-3">
                      <strong>Answer: Extremely unlikely due to encryption.</strong> UPI uses bank-grade security protocols.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• All data is encrypted with 256-bit SSL</li>
                      <li>• Payments go through secure banking networks</li>
                      <li>• No sensitive data is stored in QR codes</li>
                      <li>• Real-time monitoring detects suspicious activity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices for Users */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Best Practices for Safe UPI Payments
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-success">✓ Always Do This</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Verify merchant name</strong> before confirming payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Double-check amount</strong> displayed in your UPI app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Keep UPI PIN secret</strong> - never share with anyone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Use official UPI apps</strong> from trusted sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Enable notifications</strong> for all transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Update apps regularly</strong> for latest security features</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-warning">⚠ Never Do This</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span><strong>Don't share UPI PIN</strong> with anyone, including bank staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span><strong>Don't scan unknown QR codes</strong> from suspicious sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span><strong>Don't use UPI on public WiFi</strong> for sensitive transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span><strong>Don't ignore transaction notifications</strong> or alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span><strong>Don't download UPI apps</strong> from unofficial sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span><strong>Don't rush payments</strong> - always verify details first</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* For Merchants */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Security Tips for Merchants
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Protecting Your Business QR Code</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-success">✓ Best Practices:</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>Use professional, branded QR codes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>Display QR codes in secure, visible locations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>Regularly check for tampering or replacement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>Train staff to verify payment confirmations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>Keep backup copies of your QR code</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-warning">⚠ Watch Out For:</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                          <span>QR codes placed over your original ones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                          <span>Customers claiming payment without confirmation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                          <span>Unusual payment patterns or amounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                          <span>Requests to change your UPI ID or details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                          <span>Damaged or unclear QR codes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* What to Do If Something Goes Wrong */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                What to Do If Something Goes Wrong
              </h2>
              
              <div className="bg-warning/5 p-6 rounded-lg border-l-4 border-warning">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  If You Notice Unauthorized Transactions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Immediate Actions:</h4>
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Take screenshots of the transaction</li>
                      <li>Contact your bank immediately</li>
                      <li>Block your UPI PIN if compromised</li>
                      <li>Report to your UPI app provider</li>
                      <li>File a complaint with cyber crime cell</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Important Numbers:</h4>
                    <ul className="space-y-1">
                      <li>• <strong>NPCI Helpline:</strong> 1800-1201-740</li>
                      <li>• <strong>Cyber Crime:</strong> 1930</li>
                      <li>• <strong>Banking Ombudsman:</strong> 14448</li>
                      <li>• <strong>Your Bank's Customer Care</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-lg p-8">
                <h2 className="text-xl font-bold mb-4 text-center">The Bottom Line: UPI QR Codes Are Safe When Used Properly</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Built-in Security</h3>
                    <p className="text-sm text-foreground-secondary">
                      Multiple layers of protection make UPI one of the safest payment methods
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">User Responsibility</h3>
                    <p className="text-sm text-foreground-secondary">
                      Following best practices ensures maximum security for your transactions
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Continuous Improvement</h3>
                    <p className="text-sm text-foreground-secondary">
                      Security features are constantly updated to address new threats
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Create Your Secure UPI QR Code?</h3>
                <p className="text-foreground-secondary mb-6">
                  Generate a professional, secure QR code with our free tool. Your data stays private and secure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/upi-qr-code-generator"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Create Secure QR Code
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
