import type { QRFormData } from '@/types/qr-types';

/**
 * Validates and cleans UPI ID for maximum compatibility
 */
function validateAndCleanUpiId(upiId: string): string {
  // Remove extra spaces and convert to lowercase
  const cleaned = upiId.trim().toLowerCase();

  // Validate UPI ID format
  if (!/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+$/.test(cleaned)) {
    throw new Error('Invalid UPI ID format');
  }

  return cleaned;
}

/**
 * Cleans merchant name for UPI compatibility
 * Removes special characters that might cause parsing issues in UPI apps
 */
function cleanMerchantName(name: string): string {
  return name
    .trim()
    .replace(/[^\w\s.-]/g, '') // Keep only alphanumeric, spaces, dots, hyphens
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .substring(0, 50) // Limit length for compatibility
    .trim();
}

/**
 * Cleans transaction note for UPI compatibility
 */
function cleanTransactionNote(note: string): string {
  return note
    .trim()
    .replace(/[^\w\s.-]/g, '') // Remove special characters that might cause issues
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .substring(0, 100) // Limit length for compatibility
    .trim();
}

/**
 * Enhanced UPI string generation with improved Google Pay compatibility
 * Addresses common issues that cause bank account filtering in Google Pay
 */
export function generateUPIString(data: QRFormData): string {
  const { upiId, merchantName, amount, note } = data;

  try {
    // Validate and clean UPI ID
    const cleanUpiId = validateAndCleanUpiId(upiId);

    // Clean merchant name for maximum compatibility
    const cleanedMerchantName = cleanMerchantName(merchantName);

    const params = new URLSearchParams();

    // Required parameters - these are essential for all UPI apps
    params.set('pa', cleanUpiId); // Payee Address (UPI ID)
    params.set('pn', cleanedMerchantName); // Payee Name

    // Optional amount parameter with validation
    if (amount && amount.trim() && parseFloat(amount) > 0) {
      // Format amount to 2 decimal places for consistency
      const numericAmount = parseFloat(amount);
      if (numericAmount <= 100000) { // Limit to ₹1,00,000 for compatibility
        const formattedAmount = numericAmount.toFixed(2);
        params.set('am', formattedAmount);
      }
    }

    // Optional transaction note with cleaning
    if (note && note.trim()) {
      const cleanNote = cleanTransactionNote(note);
      if (cleanNote) {
        params.set('tn', cleanNote);
      }
    }

    // Add currency code for better international compatibility
    params.set('cu', 'INR');

    // Generate the UPI URL with proper encoding
    return `upi://pay?${params.toString()}`;

  } catch (error) {
    console.error('Error generating UPI string:', error);
    // Fallback to basic format if cleaning fails
    return generateMinimalUPIString(data);
  }
}

/**
 * Generates a minimal UPI string with only required parameters
 * Used as fallback when the enhanced version fails
 */
export function generateMinimalUPIString(data: QRFormData): string {
  const { upiId, merchantName } = data;

  const params = new URLSearchParams();
  params.set('pa', upiId.trim().toLowerCase());
  params.set('pn', merchantName.trim().substring(0, 50));

  return `upi://pay?${params.toString()}`;
}

export function validateUPIId(upiId: string): boolean {
  // Basic UPI ID validation pattern
  const upiPattern = /^[\w.-]+@[\w.-]+$/;
  return upiPattern.test(upiId);
}

export function formatCurrency(amount: string | number): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(num);
}