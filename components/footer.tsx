import { PrivacyPolicy } from './privacy-policy';
import { QrCode, Shield, Lock, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/95 backdrop-blur-sm">
      <div className="mobile-container mobile-section">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <QrCode className="h-6 w-6 text-primary" />
              <h3 className="text-lg md:text-xl font-bold text-foreground">UPI QR Generator</h3>
            </div>
            <p className="text-sm md:text-base text-foreground-secondary">
              Create professional UPI QR codes instantly. Free, secure, and customizable for all your payment needs.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground-secondary">
              <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
              <span>Trusted by 10,000+ merchants</span>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Features</h3>
            <ul className="space-y-3 text-sm text-foreground-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Free UPI QR code generation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Custom branding with logo upload</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>High-resolution PNG & SVG download</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>No registration required</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Mobile-friendly interface</span>
              </li>
            </ul>
          </div>

          {/* Security Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              Security & Privacy
            </h3>
            <ul className="space-y-3 text-sm text-foreground-secondary">
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>Bank-grade encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>No data stored on servers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Local browser processing</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>GDPR compliant</span>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support & Resources</h3>
            <ul className="space-y-3 text-sm text-foreground-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>How to generate UPI QR codes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Frequently asked questions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>UPI payment security tips</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Business payment solutions</span>
              </li>
              <li className="pt-2">
                <PrivacyPolicy />
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-sm text-foreground-secondary text-center sm:text-left">
              © 2024 UPI QR Generator. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground-secondary">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span>for the UPI community</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground-muted">
              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                <span>🇮🇳 Made in India</span>
                <span>🔒 SSL Secured</span>
                <span>⚡ Lightning Fast</span>
                <span>📱 Mobile Optimized</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Powered by modern web technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}