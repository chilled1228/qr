'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on homepage
  if (pathname === '/') {
    return null;
  }

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Custom labels for better UX
      let label = segment;
      
      // Handle specific routes
      switch (segment) {
        case 'upi-qr-code-generator':
          label = 'QR Generator';
          break;
        case 'blog':
          label = 'Guides & Tips';
          break;
        case 'faq':
          label = 'FAQ';
          break;
        case 'features':
          label = 'Features';
          break;
        case 'contact':
          label = 'Contact';
          break;
        // Blog post specific handling
        case 'upi-qr-codes-the-ultimate-guide':
          label = 'Ultimate Guide to UPI QR Codes';
          break;
        case 'upi-qr-code-for-shop':
          label = 'QR Code for Your Shop';
          break;
        case 'customize-upi-qr-code-branding':
          label = 'QR Code Branding Guide';
          break;
        case 'collect-payments-friends-family':
          label = 'Collect Payments from Friends';
          break;
        case 'professional-qr-code-freelancers':
          label = 'Professional QR for Freelancers';
          break;
        case 'static-vs-dynamic-qr-codes':
          label = 'Static vs Dynamic QR Codes';
          break;
        case 'upi-qr-code-safety-security':
          label = 'UPI QR Code Security Guide';
          break;
        default:
          // Convert kebab-case to title case
          label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
      }

      breadcrumbs.push({
        label,
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Add BreadcrumbList Schema
  useEffect(() => {
    if (breadcrumbs.length > 1) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.label,
          "item": `https://freeupiqrgenerator.com${crumb.href}`
        }))
      };

      // Add schema to document head
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(breadcrumbSchema);
      script.id = 'breadcrumb-schema';

      // Remove existing schema if present
      const existingSchema = document.getElementById('breadcrumb-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const schema = document.getElementById('breadcrumb-schema');
        if (schema) {
          schema.remove();
        }
      };
    }
  }, [breadcrumbs]);

  return (
    <nav
      className="mobile-container py-4 border-b border-border bg-muted/30"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-foreground-muted mx-2" />
              )}
              
              {index === 0 && (
                <Home className="w-4 h-4 text-foreground-muted mr-2" />
              )}
              
              {isLast ? (
                <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-foreground-secondary hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
