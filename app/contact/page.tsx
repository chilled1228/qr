import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Mail, 
  MessageCircle, 
  HelpCircle, 
  Shield, 
  Clock,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact UPI QR Generator | Support & Help | UPI QR',
  description: 'Need help with UPI QR codes? Contact our support team for technical assistance, feature requests, or questions about our free QR generator.',
  keywords: 'contact UPI QR generator, support, help, technical assistance',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
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
                Contact & Support
              </h1>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                Need help with our UPI QR code generator? We're here to assist you.
              </p>
            </div>
          </section>

          {/* Quick Help Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                  Quick Help
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link 
                    href="/faq"
                    className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                    <p className="text-foreground-secondary text-sm">
                      Find answers to the most common questions about our UPI QR generator.
                    </p>
                  </Link>

                  <Link 
                    href="/upi-qr-code-generator"
                    className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-success/10 text-success rounded-lg flex items-center justify-center mb-4 group-hover:bg-success group-hover:text-success-foreground transition-colors">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Try the Tool</h3>
                    <p className="text-foreground-secondary text-sm">
                      Sometimes the best help is hands-on experience with our generator.
                    </p>
                  </Link>

                  <Link 
                    href="/features"
                    className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-600 group-hover:text-secondary-foreground transition-colors">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <p className="text-foreground-secondary text-sm">
                      Learn about all the features and capabilities of our generator.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Get in Touch
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Support Email */}
                <div className="bg-card p-8 rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                  <p className="text-foreground-secondary mb-4">
                    For technical issues, feature requests, or general inquiries.
                  </p>
                  <a 
                    href="mailto:support@freeupiqrgenerator.com"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    support@freeupiqrgenerator.com
                  </a>
                  <div className="flex items-center gap-2 mt-4 text-sm text-foreground-secondary">
                    <Clock className="w-4 h-4" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>

                {/* Feedback */}
                <div className="bg-card p-8 rounded-xl border">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Feedback</h3>
                  <p className="text-foreground-secondary mb-4">
                    Help us improve by sharing your thoughts and suggestions.
                  </p>
                  <a 
                    href="mailto:feedback@freeupiqrgenerator.com"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    feedback@freeupiqrgenerator.com
                  </a>
                  <div className="flex items-center gap-2 mt-4 text-sm text-foreground-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>We read every message</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Issues */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                Common Issues & Solutions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2 text-warning">QR Code Not Scanning</h3>
                  <p className="text-foreground-secondary mb-3">
                    If your QR code isn't scanning properly, try these solutions:
                  </p>
                  <ul className="text-sm text-foreground-secondary space-y-1 ml-4">
                    <li>• Ensure the QR code is large enough (minimum 2cm x 2cm for print)</li>
                    <li>• Check that there's sufficient contrast between colors</li>
                    <li>• Verify your UPI ID is correct and active</li>
                    <li>• Try scanning with different UPI apps</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2 text-info">Download Issues</h3>
                  <p className="text-foreground-secondary mb-3">
                    Having trouble downloading your QR code?
                  </p>
                  <ul className="text-sm text-foreground-secondary space-y-1 ml-4">
                    <li>• Check your browser's download settings</li>
                    <li>• Try a different browser or device</li>
                    <li>• Ensure you have sufficient storage space</li>
                    <li>• Disable ad blockers temporarily</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2 text-success">Customization Help</h3>
                  <p className="text-foreground-secondary mb-3">
                    Need help with customizing your QR code?
                  </p>
                  <ul className="text-sm text-foreground-secondary space-y-1 ml-4">
                    <li>• Use high contrast colors for better scanning</li>
                    <li>• Keep logos small and centered</li>
                    <li>• Test your customized QR code before using</li>
                    <li>• Avoid very light or very dark color combinations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section className="mb-16">
            <div className="bg-card p-8 rounded-xl border max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
                <p className="text-foreground-secondary max-w-2xl mx-auto">
                  We take your privacy seriously. All QR code generation happens locally in your browser. 
                  We never store, access, or transmit your personal information. When you contact us, 
                  we only use your information to respond to your inquiry.
                </p>
              </div>
            </div>
          </section>

          {/* Business Hours */}
          <section className="mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Support Hours</h2>
              <div className="bg-card p-6 rounded-lg border">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Email Support</span>
                    <span className="text-foreground-secondary">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Response Time</span>
                    <span className="text-foreground-secondary">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tool Availability</span>
                    <span className="text-success">Always Online</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
