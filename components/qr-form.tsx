'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Loader2, Sparkles, Lock, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import type { QRFormData } from '@/types/qr-types';

interface QRFormProps {
  onChange: (data: QRFormData) => void;
  formData: QRFormData;
  isPlaceholder?: boolean;
}

export function QRForm({ onChange, formData, isPlaceholder = false }: QRFormProps) {
  const [errors, setErrors] = useState<Partial<QRFormData>>({});
  const firstErrorRef = useRef<HTMLInputElement>(null);



  const validateUpiId = (upiId: string): string | null => {
    const trimmed = upiId.trim();

    if (!trimmed) {
      return 'UPI ID is required to generate QR code';
    }

    if (!trimmed.includes('@')) {
      return 'UPI ID must contain @ symbol (e.g., yourname@paytm)';
    }

    const parts = trimmed.split('@');
    if (parts.length !== 2) {
      return 'UPI ID should have exactly one @ symbol';
    }

    const [username, provider] = parts;

    if (username.length < 3) {
      return 'Username part should be at least 3 characters long';
    }

    if (provider.length < 3) {
      return 'Provider part should be at least 3 characters (e.g., paytm, phonepe, okaxis)';
    }

    if (!/^[\w.-]+$/.test(username)) {
      return 'Username can only contain letters, numbers, dots, and hyphens';
    }

    if (!/^[\w.-]+$/.test(provider)) {
      return 'Provider can only contain letters, numbers, dots, and hyphens';
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<QRFormData> = {};

    // Enhanced UPI ID validation
    const upiError = validateUpiId(formData.upiId);
    if (upiError) {
      newErrors.upiId = upiError;
    }

    // Merchant name validation
    if (!formData.merchantName.trim()) {
      newErrors.merchantName = 'Merchant name is required for payment identification';
    } else if (formData.merchantName.trim().length < 2) {
      newErrors.merchantName = 'Merchant name should be at least 2 characters long';
    } else if (formData.merchantName.trim().length > 50) {
      newErrors.merchantName = 'Merchant name should not exceed 50 characters';
    }

    // Amount validation
    if (formData.amount) {
      const amount = Number(formData.amount);
      if (isNaN(amount)) {
        newErrors.amount = 'Amount must be a valid number';
      } else if (amount <= 0) {
        newErrors.amount = 'Amount must be greater than 0';
      } else if (amount > 100000) {
        newErrors.amount = 'Amount cannot exceed ₹1,00,000 for UPI transactions';
      } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
        newErrors.amount = 'Amount can have maximum 2 decimal places';
      }
    }

    // Note validation
    if (formData.note && formData.note.length > 100) {
      newErrors.note = 'Transaction note should not exceed 100 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleInputChange = (field: keyof QRFormData, value: string) => {
    const newFormData = { ...formData, [field]: value };
    onChange(newFormData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInputBlur = (field: keyof QRFormData) => {
    // Validate individual field on blur for immediate feedback
    const newErrors: Partial<QRFormData> = {};

    if (field === 'upiId') {
      const upiError = validateUpiId(formData.upiId);
      if (upiError) {
        newErrors.upiId = upiError;
      }
    } else if (field === 'merchantName') {
      if (!formData.merchantName.trim()) {
        newErrors.merchantName = 'Merchant name is required for payment identification';
      } else if (formData.merchantName.trim().length < 2) {
        newErrors.merchantName = 'Merchant name should be at least 2 characters long';
      } else if (formData.merchantName.trim().length > 50) {
        newErrors.merchantName = 'Merchant name should not exceed 50 characters';
      }
    } else if (field === 'amount' && formData.amount) {
      const amount = Number(formData.amount);
      if (isNaN(amount)) {
        newErrors.amount = 'Amount must be a valid number';
      } else if (amount <= 0) {
        newErrors.amount = 'Amount must be greater than 0';
      } else if (amount > 100000) {
        newErrors.amount = 'Amount cannot exceed ₹1,00,000 for UPI transactions';
      } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
        newErrors.amount = 'Amount can have maximum 2 decimal places';
      }
    } else if (field === 'note' && formData.note && formData.note.length > 100) {
      newErrors.note = 'Transaction note should not exceed 100 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(prev => ({ ...prev, ...newErrors }));
    }
  };

  const fillExampleData = () => {
    const exampleData: QRFormData = {
      upiId: 'sheenammiddha1999-3@okaxis',
      merchantName: 'Sheena Middha Store',
      amount: '299.00',
      note: 'Payment for products'
    };

    onChange(exampleData);
    setErrors({});
    toast.success('Example data filled! QR code will update automatically.');
  };

  const clearForm = () => {
    const emptyData: QRFormData = {
      upiId: '',
      merchantName: '',
      amount: '',
      note: ''
    };

    onChange(emptyData);
    setErrors({});
    toast.success('Form cleared successfully');
  };

  return (
    <div role="form" aria-labelledby="form-title">
      {/* Form Actions */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={clearForm}
          className="mobile-button text-sm text-foreground-muted hover:text-foreground"
          aria-label="Clear all form data"
        >
          <RotateCcw className="h-4 w-4 mr-1" aria-hidden="true" />
          <span>Clear</span>
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={fillExampleData}
          className="mobile-button text-sm bg-secondary-100 hover:bg-secondary-200 border-secondary-300 text-neutral-800"
          aria-label="Fill form with example UPI data"
        >
          <Sparkles className="h-4 w-4 mr-1" aria-hidden="true" />
          <span>Example</span>
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-4">
          {/* UPI ID Field */}
          <div className="space-y-2">
            <Label htmlFor="upiId" className="flex items-center gap-2 text-sm sm:text-base font-medium">
              <Lock className="h-4 w-4 text-success flex-shrink-0" />
              <span>UPI ID *</span>
            </Label>
            <Input
              id="upiId"
              type="text"
              placeholder="sheenammiddha1999-3@okaxis"
              value={formData.upiId}
              onChange={(e) => handleInputChange('upiId', e.target.value)}
              onBlur={() => handleInputBlur('upiId')}
              className={cn(
                "mobile-input",
                errors.upiId
                  ? 'border-destructive focus:border-destructive ring-destructive/20'
                  : 'focus:border-primary focus:ring-primary/20'
              )}
              required
              aria-describedby={errors.upiId ? 'upiId-error' : 'upiId-help'}
              aria-invalid={!!errors.upiId}
              tabIndex={1}
              autoComplete="username"
              inputMode="email"
            />
            <div className="space-y-1">
              <p id="upiId-help" className="text-xs sm:text-sm text-foreground-muted flex items-start gap-2">
                <Lock className="h-3 w-3 text-success flex-shrink-0 mt-0.5" />
                <span>Truly Free & Secure: Enter your UPI ID (e.g., username@paytm) - never stored, no sign-up required</span>
              </p>
              {errors.upiId && (
                <p id="upiId-error" className="text-sm text-destructive font-medium" role="alert">
                  {errors.upiId}
                </p>
              )}
            </div>
          </div>

          {/* Merchant Name Field */}
          <div className="space-y-2">
            <Label htmlFor="merchantName" className="text-sm sm:text-base font-medium">
              Merchant Name *
            </Label>
            <Input
              id="merchantName"
              type="text"
              placeholder="Your Business Name"
              value={formData.merchantName}
              onChange={(e) => handleInputChange('merchantName', e.target.value)}
              onBlur={() => handleInputBlur('merchantName')}
              className={cn(
                "mobile-input",
                errors.merchantName
                  ? 'border-destructive focus:border-destructive ring-destructive/20'
                  : 'focus:border-primary focus:ring-primary/20'
              )}
              required
              aria-describedby={errors.merchantName ? 'merchantName-error' : 'merchantName-help'}
              aria-invalid={!!errors.merchantName}
              tabIndex={2}
              autoComplete="organization"
            />
            <div className="space-y-1">
              <p id="merchantName-help" className="text-xs sm:text-sm text-foreground-muted">
                Your business or personal name for the payment
              </p>
              {errors.merchantName && (
                <p id="merchantName-error" className="text-sm text-destructive font-medium" role="alert">
                  {errors.merchantName}
                </p>
              )}
            </div>
          </div>

          {/* Amount Field */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm sm:text-base font-medium">
              Amount (₹) - Optional
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="100.00"
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
              onBlur={() => handleInputBlur('amount')}
              className={cn(
                "mobile-input",
                errors.amount
                  ? 'border-destructive focus:border-destructive ring-destructive/20'
                  : 'focus:border-primary focus:ring-primary/20'
              )}
              aria-describedby={errors.amount ? 'amount-error' : 'amount-help'}
              aria-invalid={!!errors.amount}
              tabIndex={3}
              inputMode="decimal"
            />
            <div className="space-y-1">
              <p id="amount-help" className="text-xs sm:text-sm text-foreground-muted">
                Leave empty for flexible amount payments
              </p>
              {errors.amount && (
                <p id="amount-error" className="text-sm text-destructive font-medium" role="alert">
                  {errors.amount}
                </p>
              )}
            </div>
          </div>

          {/* Note Field */}
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm sm:text-base font-medium">
              Transaction Note - Optional
            </Label>
            <Textarea
              id="note"
              placeholder="Payment for services"
              value={formData.note}
              onChange={(e) => handleInputChange('note', e.target.value)}
              onBlur={() => handleInputBlur('note')}
              className={cn(
                "resize-none min-h-[80px] sm:min-h-[72px]",
                errors.note
                  ? 'border-destructive focus:border-destructive ring-destructive/20'
                  : 'focus:border-primary focus:ring-primary/20'
              )}
              rows={3}
              maxLength={100}
              aria-describedby={errors.note ? 'note-error' : 'note-help'}
              aria-invalid={!!errors.note}
              tabIndex={4}
            />
            <div className="space-y-1">
              <p id="note-help" className="text-xs sm:text-sm text-foreground-muted">
                Brief description of the payment (max 100 characters)
              </p>
              {errors.note && (
                <p id="note-error" className="text-sm text-destructive font-medium" role="alert">
                  {errors.note}
                </p>
              )}
            </div>
          </div>

          {/* Real-time Generation Notice */}
          <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-xs text-primary-foreground text-center font-medium mb-1">
              ⚡ Real-time Generation
            </p>
            <p className="text-xs text-foreground-muted text-center">
              Your QR code updates automatically as you type. {isPlaceholder ? 'Enter your details to see your custom QR code.' : 'Your QR code is ready!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}