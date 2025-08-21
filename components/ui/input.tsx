import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles with mobile-first approach
          'flex h-12 w-full rounded-md border border-input bg-background px-4 py-3',
          // Typography - larger on mobile for better readability
          'text-base md:text-sm font-normal',
          // Focus and interaction states
          'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          // Hover and active states for better UX
          'hover:border-ring/50 transition-colors duration-200',
          // File input styles
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          // Placeholder styles
          'placeholder:text-muted-foreground',
          // Disabled state
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Touch-friendly minimum height
          'min-h-[48px] touch:min-h-[52px]',
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
Input.displayName = 'Input';

export { Input };
