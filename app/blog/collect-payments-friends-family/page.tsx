import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  CheckCircle,
  Heart,
  Smartphone,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Info,
  Share2,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Easily Collect Payments from Friends and Family | freeupiqrgenerator.com',
  description: 'Simple guide for individuals to use UPI QR codes for personal payments, splitting bills, and collecting money from friends and family.',
  keywords: 'collect payments friends family, personal UPI QR code, bill splitting QR code, UPI for individuals, personal payment collection',
  alternates: {
    canonical: '/blog/collect-payments-friends-family',
  },
};

export default function CollectPaymentsPage() {
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
            "headline": "How to Easily Collect Payments from Friends and Family",
            "description": "Simple guide for individuals to use UPI QR codes for personal payments, splitting bills, and collecting money.",
            "image": "https://freeupiqrgenerator.com/personal-upi-payments-guide.jpg",
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
              "@id": "https://freeupiqrgenerator.com/blog/collect-payments-friends-family"
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
                    5 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Personal Guide
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  How to Easily Collect Payments from Friends and Family
                </h1>
                <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                  Make collecting money from friends and family effortless with UPI QR codes. Perfect for bill splitting, group expenses, and personal payments.
                </p>
              </div>
            </header>

            {/* Common Scenarios */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Perfect for These Situations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Bill Splitting</h3>
                  <p className="text-sm text-foreground-secondary">
                    Restaurant bills, movie tickets, group outings, and shared expenses.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border text-center">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Special Occasions</h3>
                  <p className="text-sm text-foreground-secondary">
                    Birthday gifts, wedding contributions, festival celebrations.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border text-center">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Group Activities</h3>
                  <p className="text-sm text-foreground-secondary">
                    Trip expenses, party planning, group purchases, shared subscriptions.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits for Personal Use */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Why Use QR Codes for Personal Payments?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">No More Awkward Conversations</h3>
                      <p className="text-sm text-foreground-secondary">
                        Avoid the uncomfortable "Can you pay me back?" conversations. Just share your QR code.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Instant Payments</h3>
                      <p className="text-sm text-foreground-secondary">
                        Money reaches your account immediately, no waiting for bank transfers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Privacy Protection</h3>
                      <p className="text-sm text-foreground-secondary">
                        No need to share your bank account details or phone number.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Easy to Share</h3>
                      <p className="text-sm text-foreground-secondary">
                        Share via WhatsApp, email, or just show your phone screen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Works with All UPI Apps</h3>
                      <p className="text-sm text-foreground-secondary">
                        Friends can pay using any UPI app they prefer - PhonePe, Google Pay, Paytm, etc.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Track Payments Easily</h3>
                      <p className="text-sm text-foreground-secondary">
                        All payments appear in your UPI app with clear transaction details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Guide */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                How to Set Up Your Personal Payment QR Code
              </h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Create Your QR Code</h3>
                      <p className="text-foreground-secondary mb-4">
                        Use our free generator to create a personalized QR code with your UPI ID and name.
                      </p>
                      <div className="bg-info/5 p-4 rounded-lg border-l-4 border-info">
                        <p className="text-sm">
                          <strong>Tip:</strong> Leave the amount field empty so friends can enter any amount they need to pay.
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
                      <h3 className="text-xl font-semibold mb-3">Save to Your Phone</h3>
                      <p className="text-foreground-secondary mb-4">
                        Download the QR code and save it to your phone's gallery for easy access.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-success/5 p-3 rounded-lg">
                          <h4 className="font-medium mb-2">Quick Access Tips:</h4>
                          <ul className="space-y-1">
                            <li>• Save to phone gallery</li>
                            <li>• Set as phone wallpaper</li>
                            <li>• Add to favorites folder</li>
                            <li>• Print a small copy for wallet</li>
                          </ul>
                        </div>
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <h4 className="font-medium mb-2">Sharing Options:</h4>
                          <ul className="space-y-1">
                            <li>• WhatsApp message</li>
                            <li>• Email attachment</li>
                            <li>• Social media post</li>
                            <li>• Show phone screen directly</li>
                          </ul>
                        </div>
                      </div>
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
                      <h3 className="text-xl font-semibold mb-3">Share with Friends</h3>
                      <p className="text-foreground-secondary mb-4">
                        Share your QR code when you need to collect money. Include a friendly message explaining what the payment is for.
                      </p>
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Sample Messages:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                            "Hey! Here's my QR code for the dinner bill split. Your share is ₹450. Thanks! 😊"
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                            "Movie tickets booked! Scan this to pay your share (₹200 per person). Thanks!"
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Best Practices for Personal Use
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-success">✓ Do's</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Always mention what the payment is for</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Be polite and friendly in your messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Send gentle reminders if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Thank people after they pay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Keep your UPI app notifications on</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-4 text-warning">⚠ Don'ts</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't be pushy or demanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't share QR codes in public groups unnecessarily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't forget to specify the amount clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't assume everyone knows how to scan QR codes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Don't share your UPI PIN with anyone</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Creative Uses */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Creative Ways to Use Your Personal QR Code
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <Share2 className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Social Media</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Add to Instagram/Facebook stories for birthday gifts</li>
                    <li>• Include in social media posts for group events</li>
                    <li>• Share in WhatsApp status for easy access</li>
                    <li>• Use in LinkedIn posts for professional networking events</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-success/5 to-info/5 p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-success" />
                    <h3 className="font-semibold">Group Chats</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Pin in family WhatsApp groups for easy access</li>
                    <li>• Share in friend circles for regular outings</li>
                    <li>• Use in college/office groups for shared expenses</li>
                    <li>• Include in event planning group chats</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-warning/5 to-primary/5 p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-warning" />
                    <h3 className="font-semibold">Special Occasions</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Wedding invitation cards for gift contributions</li>
                    <li>• Birthday party invitations</li>
                    <li>• Festival celebration group contributions</li>
                    <li>• Charity fundraising among friends</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-secondary/5 to-success/5 p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-secondary-600" />
                    <h3 className="font-semibold">Regular Activities</h3>
                  </div>
                  <ul className="text-sm space-y-2">
                    <li>• Monthly subscription splits (Netflix, Spotify)</li>
                    <li>• Regular group lunch/dinner payments</li>
                    <li>• Gym membership group discounts</li>
                    <li>• Carpool expense sharing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Make Collecting Payments Effortless?</h3>
                <p className="text-foreground-secondary mb-6">
                  Create your personal UPI QR code now and never worry about awkward payment requests again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/upi-qr-code-generator"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Create Your QR Code
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="/blog/professional-qr-code-freelancers"
                    className="inline-flex items-center gap-2 bg-card text-foreground border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                  >
                    Freelancer Guide
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
