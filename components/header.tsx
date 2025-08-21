'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, QrCode, Shield, Lock, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensure theme is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { href: '/', label: 'Home', description: 'Free UPI QR Generator' },
    { href: '/upi-qr-code-generator', label: 'Generator', description: 'Create QR Code' },
    { href: '/features', label: 'Features', description: 'What we offer' },
    { href: '/blog', label: 'Guides', description: 'Learn & Tips' },
    { href: '/faq', label: 'FAQ', description: 'Get answers' },
    { href: '/contact', label: 'Contact', description: 'Get support' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mobile-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <QrCode className="h-6 w-6 sm:h-7 sm:w-7 text-secondary-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl text-foreground">
                UPI QR Generator
              </h1>
              <p className="text-xs text-foreground-secondary hidden sm:block">
                Truly Free • No Ads • No Sign-ups
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" role="navigation">
            <div className="flex items-center gap-4">
              {navigationItems.slice(1, -1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActivePath(item.href)
                      ? 'text-primary'
                      : 'text-foreground-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActivePath('/contact')
                    ? 'text-primary'
                    : 'text-foreground-secondary'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/upi-qr-code-generator"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Generate QR Code
            </Link>

            {/* Trust Signals */}
            <div className="flex items-center gap-2 text-sm border-l border-border pl-4">
              <div className="flex items-center gap-1 text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                <Lock className="h-3 w-3" />
                <span>Free</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                <Shield className="h-3 w-3" />
                <span>Secure</span>
              </div>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="mobile-button"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="mobile-button"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="mobile-button"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-border mt-4 pt-4"
          >
            <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
              {/* Main Navigation */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Navigation</h3>
                <div className="space-y-2 pl-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex flex-col gap-1 text-sm transition-colors hover:text-primary mobile-button ${
                        isActivePath(item.href)
                          ? 'text-primary'
                          : 'text-foreground-secondary'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-foreground-muted">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Why Choose Us</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <Lock className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Truly Free - No Ads, No Sign-ups</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <Shield className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Bank-grade Security & Privacy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <span className="h-4 w-4 text-primary flex-shrink-0 flex items-center justify-center font-bold">∞</span>
                    <span>Unlimited Downloads & Usage</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}