import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Base styles with mobile-first approach
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-4 py-3',
          // Typography - larger on mobile for better readability
          'text-base md:text-sm font-normal leading-relaxed',
          // Focus and interaction states
          'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          // Hover states for better UX
          'hover:border-ring/50 transition-colors duration-200',
          // Placeholder styles
          'placeholder:text-muted-foreground',
          // Disabled state
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Mobile optimizations
          'touch:min-h-[88px] resize-none',
          // Accessibility improvements
          'aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
