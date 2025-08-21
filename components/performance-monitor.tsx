'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production or when explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_PERF_MONITORING) {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.fcp = fcpEntry.startTime;
          console.log(`First Contentful Paint: ${fcpEntry.startTime.toFixed(2)}ms`);
          
          // Check if FCP meets the target (under 1.5 seconds)
          if (fcpEntry.startTime > 1500) {
            console.warn(`FCP is ${fcpEntry.startTime.toFixed(2)}ms, which exceeds the 1.5s target`);
          }
          
          observer.disconnect();
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = lastEntry.startTime;
        console.log(`Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`);
        
        // Check if LCP meets the target (under 2.5 seconds)
        if (lastEntry.startTime > 2500) {
          console.warn(`LCP is ${lastEntry.startTime.toFixed(2)}ms, which exceeds the 2.5s target`);
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const firstInputEntry = entry as any;
          metrics.fid = firstInputEntry.processingStart - entry.startTime;
          console.log(`First Input Delay: ${metrics.fid.toFixed(2)}ms`);
          
          // Check if FID meets the target (under 100ms)
          if (metrics.fid > 100) {
            console.warn(`FID is ${metrics.fid.toFixed(2)}ms, which exceeds the 100ms target`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        metrics.cls = clsValue;
        console.log(`Cumulative Layout Shift: ${clsValue.toFixed(4)}`);
        
        // Check if CLS meets the target (under 0.1)
        if (clsValue > 0.1) {
          console.warn(`CLS is ${clsValue.toFixed(4)}, which exceeds the 0.1 target`);
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log(`Time to First Byte: ${metrics.ttfb.toFixed(2)}ms`);
        
        // Check if TTFB meets the target (under 600ms)
        if (metrics.ttfb > 600) {
          console.warn(`TTFB is ${metrics.ttfb.toFixed(2)}ms, which exceeds the 600ms target`);
        }
      }
    };

    // Measure bundle size and loading performance
    const measureBundlePerformance = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      let totalJSSize = 0;
      let totalCSSSize = 0;
      
      resources.forEach((resource) => {
        if (resource.name.includes('.js')) {
          totalJSSize += resource.transferSize || 0;
        } else if (resource.name.includes('.css')) {
          totalCSSSize += resource.transferSize || 0;
        }
      });
      
      console.log(`Total JS bundle size: ${(totalJSSize / 1024).toFixed(2)} KB`);
      console.log(`Total CSS bundle size: ${(totalCSSSize / 1024).toFixed(2)} KB`);
      
      // Warn if bundles are too large
      if (totalJSSize > 500 * 1024) { // 500KB
        console.warn(`JS bundle size (${(totalJSSize / 1024).toFixed(2)} KB) exceeds recommended 500KB`);
      }
      
      if (totalCSSSize > 100 * 1024) { // 100KB
        console.warn(`CSS bundle size (${(totalCSSSize / 1024).toFixed(2)} KB) exceeds recommended 100KB`);
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
    
    // Measure bundle performance after page load
    setTimeout(measureBundlePerformance, 1000);

    // Log overall performance summary after 5 seconds
    setTimeout(() => {
      console.group('Performance Summary');
      console.log('Metrics:', metrics);
      
      // Calculate performance score (simplified)
      let score = 100;
      if (metrics.fcp && metrics.fcp > 1500) score -= 20;
      if (metrics.lcp && metrics.lcp > 2500) score -= 20;
      if (metrics.fid && metrics.fid > 100) score -= 20;
      if (metrics.cls && metrics.cls > 0.1) score -= 20;
      if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
      
      console.log(`Overall Performance Score: ${score}/100`);
      console.groupEnd();
    }, 5000);

  }, []);

  return null; // This component doesn't render anything
}

// Hook to get performance metrics
export function usePerformanceMetrics() {
  const getMetrics = (): PerformanceMetrics => {
    const metrics: PerformanceMetrics = {};
    
    // Get paint metrics
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }
    
    // Get navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }
    
    return metrics;
  };
  
  return { getMetrics };
}
