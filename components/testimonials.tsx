'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Tea Stall Owner, Mumbai',
      rating: 5,
      text: 'This UPI QR generator is amazing! I created a professional QR code for my tea stall in minutes. Now customers can pay easily without cash.',
    },
    {
      name: 'Priya Sharma',
      business: 'Freelance Designer, Bangalore',
      rating: 5,
      text: 'Perfect for freelancers like me. I can add my logo and brand colors to the QR code. Clients love how professional it looks.',
    },
    {
      name: 'Amit Patel',
      business: 'Grocery Store, Ahmedabad',
      rating: 5,
      text: 'Simple and fast. No registration needed, just enter details and download. My customers appreciate the quick payment option.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
          What Our Users Say
        </h2>
        <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied merchants who trust our UPI QR code generator for their business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card-elevated p-6 sm:p-8 hover:border-primary/30 transition-colors duration-200">
            <div className="flex items-center mb-4 sm:mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-warning text-warning" />
              ))}
            </div>
            <blockquote className="text-sm sm:text-base text-foreground-secondary mb-4 sm:mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-foreground-muted mt-1">{testimonial.business}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}