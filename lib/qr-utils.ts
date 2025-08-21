import type { QROptions } from '@/types/qr-types';

/**
 * Generate QR code from UPI string with customization options
 */
export async function generateQRCode(upiString: string, options: QROptions): Promise<string> {
  try {
    // Dynamic import for better code splitting
    const QRCode = (await import('qrcode')).default;

    if (!QRCode) {
      throw new Error('QR code library failed to load');
    }

    // Convert options to QRCode library format
    const qrOptions = {
      width: options.size || 512,
      margin: 4, // Minimum 4 modules quiet zone
      color: {
        dark: options.fgColor || '#000000',
        light: options.bgColor || '#ffffff',
      },
      errorCorrectionLevel: 'Q' as const, // 25% error correction
      type: 'image/png' as const
    };

    const qrDataUrl = await QRCode.toDataURL(upiString, qrOptions);

    if (!qrDataUrl || !qrDataUrl.startsWith('data:image/png;base64,')) {
      throw new Error('Failed to generate QR code image');
    }

    return qrDataUrl;
  } catch (error) {
    console.error('QR generation error:', error);
    throw error;
  }
}

/**
 * Generate SVG QR code for vector output
 */
export async function generateQRCodeSVG(upiString: string, options: QROptions): Promise<string> {
  try {
    const QRCode = (await import('qrcode')).default;

    if (!QRCode) {
      throw new Error('QR code library failed to load');
    }

    const qrOptions = {
      width: options.size || 512,
      margin: 4,
      color: {
        dark: options.fgColor || '#000000',
        light: options.bgColor || '#ffffff',
      },
      errorCorrectionLevel: 'Q' as const,
      type: 'svg' as const
    };

    const svgString = await QRCode.toString(upiString, qrOptions);
    
    // Convert SVG string to data URL
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;
    
    return svgDataUrl;
  } catch (error) {
    console.error('SVG QR generation error:', error);
    throw error;
  }
}

/**
 * Validate UPI string before QR generation
 */
export function validateUPIString(upiString: string): boolean {
  try {
    // Basic UPI string validation
    if (!upiString || typeof upiString !== 'string') {
      return false;
    }

    // Must start with upi://pay?
    if (!upiString.startsWith('upi://pay?')) {
      return false;
    }

    // Parse URL parameters
    const url = new URL(upiString);
    const params = url.searchParams;

    // Must have required parameters
    const requiredParams = ['pa', 'pn'];
    for (const param of requiredParams) {
      if (!params.get(param)) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}
