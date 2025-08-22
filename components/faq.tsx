'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FAQ() {
  const faqs = [
    {
      question: 'What is a UPI QR code and how does it work?',
      answer: 'A UPI QR code is a digital payment method that allows customers to scan and pay using any UPI-enabled app like PhonePe, Google Pay, or Paytm. When scanned, it automatically opens the payment app with your details pre-filled.',
    },
    {
      question: 'Is this UPI QR code generator completely free?',
      answer: 'Yes, our UPI QR code generator is 100% free to use. You can create unlimited QR codes, customize them with your branding, and download high-resolution images without any charges or hidden fees.',
    },
    {
      question: 'Do UPI QR codes expire or have validity limits?',
      answer: 'No, UPI QR codes generated with our tool do not expire. They remain valid as long as your UPI ID is active. You can use the same QR code for multiple transactions.',
    },
    {
      question: 'Can I customize the UPI QR code with my business logo?',
      answer: 'Absolutely! You can upload your business logo, change colors, and adjust the size to match your brand identity. This helps customers recognize your business and builds trust.',
    },
    {
      question: 'Is it safe to use this UPI QR code generator?',
      answer: 'Yes, our generator is completely secure. We don\'t store your UPI ID or any personal information. All QR code generation happens in your browser, ensuring your data privacy and security.',
    },
    {
      question: 'What UPI apps support these QR codes?',
      answer: 'Our UPI QR codes work with all major UPI apps including PhonePe, Google Pay, Paytm, BHIM, Amazon Pay, and any other UPI-compliant payment application.',
    },
    {
      question: 'Can I set a fixed amount in the UPI QR code?',
      answer: 'Yes, you can set a fixed amount when generating the QR code. When customers scan it, the amount will be pre-filled. You can also leave it empty for flexible amount payments.',
    },
    {
      question: 'What formats can I download the QR code in?',
      answer: 'You can download your UPI QR code in high-resolution PNG format (perfect for printing) or SVG format (scalable vector graphics for digital use). Both formats maintain quality at any size.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about generating and using UPI QR codes for your business.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="card-elevated">
          <div className="p-6 sm:p-8 border-b border-border">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">UPI QR Code FAQs</h3>
          </div>
          <div className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                  <AccordionTrigger className="text-left px-4 sm:px-6 py-4 hover:bg-muted/50 rounded-lg text-sm sm:text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}