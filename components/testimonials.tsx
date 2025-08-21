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
    <section className="py-16">
      <div className="text-center section-spacing">
        <h2 className="element-spacing">What Our Users Say</h2>
        <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
          Join thousands of satisfied merchants who trust our UPI QR code generator for their business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card/70 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-active text-active" />
                ))}
              </div>
              <p className="text-foreground-secondary mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-caption text-foreground-muted">{testimonial.business}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}