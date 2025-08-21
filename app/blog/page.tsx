import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { NetworkStatus } from '@/components/network-status';
import { PerformanceMonitor } from '@/components/performance-monitor';
import { Breadcrumb } from '@/components/breadcrumb';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  User, 
  Tag,
  TrendingUp,
  BookOpen,
  Users,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - UPI QR Code Generator Guides & Tips | freeupiqrgenerator.com',
  description: 'Learn everything about UPI QR codes with our comprehensive guides. Tips for businesses, individuals, and technical insights on digital payments.',
  keywords: 'UPI QR code blog, UPI payment guides, QR code tips, digital payment tutorials, UPI for business',
  alternates: {
    canonical: '/blog',
  },
};

const featuredArticles = [
  {
    title: "The Ultimate Guide to UPI QR Codes",
    description: "Everything you need to know about UPI QR codes, from basics to advanced usage for businesses and individuals.",
    slug: "upi-qr-codes-the-ultimate-guide",
    category: "Guide",
    readTime: "15 min read",
    featured: true,
    icon: BookOpen
  }
];

const businessArticles = [
  {
    title: "How to Create a UPI QR Code for Your Shop",
    description: "Step-by-step guide for retail businesses to set up UPI QR code payments and increase customer convenience.",
    slug: "upi-qr-code-for-shop",
    category: "Business",
    readTime: "8 min read",
    icon: Building
  },
  {
    title: "Customizing Your UPI QR Code for Better Branding",
    description: "Learn how to create branded QR codes that match your business identity and build customer trust.",
    slug: "customize-upi-qr-code-branding",
    category: "Business",
    readTime: "6 min read",
    icon: Building
  }
];

const individualArticles = [
  {
    title: "How to Easily Collect Payments from Friends and Family",
    description: "Simple guide for individuals to use UPI QR codes for personal payments, splitting bills, and collecting money.",
    slug: "collect-payments-friends-family",
    category: "Personal",
    readTime: "5 min read",
    icon: Users
  },
  {
    title: "Creating a Professional QR Code for Your Freelance Services",
    description: "Freelancers guide to accepting payments professionally with customized UPI QR codes.",
    slug: "professional-qr-code-freelancers",
    category: "Freelance",
    readTime: "7 min read",
    icon: User
  }
];

const technicalArticles = [
  {
    title: "Static vs. Dynamic UPI QR Codes: A Complete Guide",
    description: "Understand the differences between static and dynamic QR codes and choose the right type for your needs.",
    slug: "static-vs-dynamic-qr-codes",
    category: "Technical",
    readTime: "10 min read",
    icon: TrendingUp
  },
  {
    title: "Are UPI QR Code Payments Safe? Everything You Need to Know",
    description: "Comprehensive analysis of UPI QR code security, best practices, and how to protect yourself from fraud.",
    slug: "upi-qr-code-safety-security",
    category: "Security",
    readTime: "12 min read",
    icon: TrendingUp
  }
];

function ArticleCard({ article, featured = false }: { article: any, featured?: boolean }) {
  const IconComponent = article.icon;
  
  return (
    <Link 
      href={`/blog/${article.slug}`}
      className={`block bg-card rounded-xl border hover:shadow-lg transition-all duration-300 group ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors ${
            featured ? 'w-16 h-16' : ''
          }`}>
            <IconComponent className={`${featured ? 'w-8 h-8' : 'w-6 h-6'}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-foreground-secondary">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>
            <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors mb-2 ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}>
              {article.title}
            </h3>
            <p className={`text-foreground-secondary mb-4 ${
              featured ? 'text-base' : 'text-sm'
            }`}>
              {article.description}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <>
      <NetworkStatus />
      <PerformanceMonitor />

      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumb />

        <main className="mobile-container mobile-section">
          {/* Hero Section */}
          <section className="text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                UPI QR Code Guides & Resources
              </h1>
              <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto">
                Learn everything about UPI QR codes with our comprehensive guides, tips, and best practices for businesses and individuals.
              </p>
            </div>
          </section>

          {/* Featured Article */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Guide</h2>
              <p className="text-foreground-secondary">
                Our most comprehensive resource on UPI QR codes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <ArticleCard key={index} article={article} featured={true} />
              ))}
            </div>
          </section>

          {/* Content Pillars */}
          <section className="mb-16">
            <div className="space-y-12">
              {/* Business Content */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">For Businesses</h2>
                  <p className="text-foreground-secondary">
                    Guides and tips for using UPI QR codes in your business
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {businessArticles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                  ))}
                </div>
              </div>

              {/* Individual Content */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">For Individuals</h2>
                  <p className="text-foreground-secondary">
                    Personal use cases and tips for everyday UPI QR code usage
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {individualArticles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                  ))}
                </div>
              </div>

              {/* Technical Content */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical & Security</h2>
                  <p className="text-foreground-secondary">
                    In-depth technical information and security best practices
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technicalArticles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Ready to Create Your UPI QR Code?
                </h2>
                <p className="text-lg text-foreground-secondary">
                  Put your knowledge into practice with our free, easy-to-use generator.
                </p>
                <Link 
                  href="/upi-qr-code-generator"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Generating Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
