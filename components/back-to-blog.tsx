'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackToBlog() {
  return (
    <div className="mb-8">
      <Link 
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Guides & Tips</span>
      </Link>
    </div>
  );
}
