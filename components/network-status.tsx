'use client';

import { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    // Force a network check by trying to fetch a small resource
    fetch('/favicon.ico', { method: 'HEAD', cache: 'no-cache' })
      .then(() => {
        setIsOnline(true);
        setShowOfflineMessage(false);
      })
      .catch(() => {
        setIsOnline(false);
        setShowOfflineMessage(true);
      });
  };

  if (!showOfflineMessage && isOnline) {
    return null;
  }

  return (
    <div className="fixed top-20 left-4 right-4 z-50 max-w-md mx-auto">
      <Alert className={`${isOnline ? 'border-success bg-success/10' : 'border-warning bg-warning/10'}`}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4 text-success" />
          ) : (
            <WifiOff className="h-4 w-4 text-warning" />
          )}
          <AlertDescription className="flex-1">
            {isOnline ? (
              <div className="flex items-center justify-between">
                <span className="text-success-foreground">Back online! QR generation is available.</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOfflineMessage(false)}
                  className="h-6 px-2 text-xs"
                >
                  Dismiss
                </Button>
              </div>
            ) : (
              <div>
                <div className="font-medium text-warning-foreground mb-1">
                  You're currently offline
                </div>
                <div className="text-sm text-foreground-secondary mb-2">
                  QR code generation works offline, but some features may be limited.
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRetry}
                  className="h-7 px-3 text-xs"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Check Connection
                </Button>
              </div>
            )}
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
}

// Hook for components to check network status
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
