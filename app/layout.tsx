import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UPI QR Generator: Free QR Code Creator | UPI QR',
  description: 'Create free UPI QR codes instantly. Professional QR generator with customization, no sign-up required. Generate payment QR codes in seconds.',
  keywords: 'free upi qr code generator, upi qr generator, create upi qr code, upi qr code maker, generate upi qr code online, free upi payment qr code',
  authors: [{ name: 'UPI QR Generator' }],
  creator: 'UPI QR Generator',
  publisher: 'UPI QR Generator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://freeupiqrgenerator.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UPI QR Generator: Free QR Code Creator | UPI QR',
    description: 'Create free UPI QR codes instantly. Professional QR generator with customization, no sign-up required. Generate payment QR codes now.',
    url: 'https://freeupiqrgenerator.com',
    siteName: 'UPI QR Generator',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UPI QR Code Generator - Create Free Payment QR Codes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPI QR Generator: Free QR Code Creator | UPI QR',
    description: 'Create free UPI QR codes instantly. Professional QR generator with customization, no sign-up required. Generate payment QR codes now.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="google-site-verification" content="8WzzcYEY2sJMSKNPqp1zdheet3yC0YjgDdVRg4-9oi4" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background text-foreground">
            {children}
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}