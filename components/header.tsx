'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, QrCode, Shield, Lock, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function Header() {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure theme is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mobile-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <QrCode className="h-6 w-6 sm:h-7 sm:w-7 text-secondary-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl text-foreground">
                UPI QR Generator
              </h1>
              <p className="text-xs text-foreground-secondary hidden sm:block">
                Free & Secure
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-4" role="navigation">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                <Lock className="h-3 w-3" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-secondary-600 bg-secondary-100 px-2 py-1 rounded-full">
                <Shield className="h-3 w-3" />
                <span>Privacy Protected</span>
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
          <div className="flex items-center gap-2 sm:hidden">
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
            className="sm:hidden border-t border-border mt-4 pt-4"
          >
            <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
              {/* Security Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Security Features</h3>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <Shield className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Bank-grade security</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <Lock className="h-4 w-4 text-success flex-shrink-0" />
                    <span>No data stored</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Quick Actions</h3>
                <div className="space-y-2 pl-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 text-sm text-foreground-secondary hover:text-foreground transition-colors w-full text-left mobile-button"
                  >
                    <QrCode className="h-4 w-4 flex-shrink-0" />
                    <span>Generate QR Code</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}