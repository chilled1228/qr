import html2canvas from 'html2canvas';

export interface ProfessionalQROptions {
  merchantName: string;
  upiId: string;
  qrCode: string;
  format?: 'png' | 'jpeg' | 'svg';
  quality?: number;
  scale?: number;
}

/**
 * Convert SVG to PNG data URL using canvas
 */
async function svgToPngDataUrl(svgUrl: string, width: number, height: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve('');
        return;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Fill with transparent background
      ctx.clearRect(0, 0, width, height);
      
      // Draw the SVG
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to PNG data URL
      resolve(canvas.toDataURL('image/png'));
    };
    
    img.onerror = () => {
      console.warn(`Failed to load SVG: ${svgUrl}`);
      resolve('');
    };
    
    // Set timeout fallback
    setTimeout(() => {
      resolve('');
    }, 5000);
    
    img.src = svgUrl;
  });
}

/**
 * Generate a professional QR card image that matches industry standards
 */
export async function generateProfessionalQRCard(options: ProfessionalQROptions): Promise<string> {
  const {
    merchantName,
    upiId,
    qrCode,
    format = 'png',
    quality = 1.0,
    scale = 2
  } = options;

  // Note: SVG format is not supported by html2canvas, fallback to PNG
  const actualFormat = format === 'svg' ? 'png' : format;

  // Get base URL for absolute paths
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  // Pre-convert all SVG logos to PNG data URLs for maximum compatibility
  const [bhimUpiPng, upiPng, googlePayPng, paytmPng] = await Promise.all([
    svgToPngDataUrl(`${baseUrl}/logos/bhim-upi.svg`, 64, 32),
    svgToPngDataUrl(`${baseUrl}/logos/upi.svg`, 64, 32),
    svgToPngDataUrl(`${baseUrl}/logos/google-pay.svg`, 48, 24),
    svgToPngDataUrl(`${baseUrl}/logos/paytm.svg`, 48, 24)
  ]);

  // Create a temporary container
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  container.style.width = '450px';
  container.style.height = 'auto';
  document.body.appendChild(container);

  // Create the professional QR card HTML with PNG logos
  container.innerHTML = `
    <div style="
      background: white;
      padding: 32px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      border: 1px solid #e5e7eb;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      text-align: center;
    ">
      <!-- Merchant Name -->
      <div style="margin-bottom: 24px;">
        <h2 style="
          font-size: 20px;
          font-weight: bold;
          color: #1f2937;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
          padding: 0;
          line-height: 1.2;
          word-break: break-word;
        ">
          ${(merchantName && merchantName.trim()) ? merchantName.trim().toUpperCase() : 'MERCHANT NAME'}
        </h2>
      </div>

      <!-- QR Code -->
      <div style="
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
      ">
        <div style="
          background: white;
          padding: 16px;
          border-radius: 8px;
          border: 2px solid #f3f4f6;
        ">
          <img 
            src="${qrCode}" 
            alt="UPI QR Code"
            style="
              width: 192px;
              height: 192px;
              object-fit: contain;
              display: block;
            "
          />
        </div>
      </div>

      <!-- UPI ID -->
      <div style="margin-bottom: 16px;">
        <p style="
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        ">
          ${upiId || 'merchant@upi'}
        </p>
      </div>

      <!-- Instructions -->
      <div style="margin-bottom: 24px;">
        <p style="
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        ">
          Scan and pay with any BHIM UPI app
        </p>
      </div>

      <!-- BHIM UPI Logos -->
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding: 12px 0;
        margin-bottom: 16px;
      ">
        ${bhimUpiPng ? `<img src="${bhimUpiPng}" alt="BHIM UPI" style="height: 32px; object-fit: contain;" />` : ''}
        ${upiPng ? `<img src="${upiPng}" alt="UPI" style="height: 32px; object-fit: contain;" />` : ''}
      </div>

      <!-- Payment App Logos -->
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding: 12px 0;
        border-top: 1px solid #f3f4f6;
        margin-bottom: 24px;
      ">
        ${googlePayPng ? `<img src="${googlePayPng}" alt="Google Pay" style="height: 24px; object-fit: contain;" />` : ''}
        ${paytmPng ? `<img src="${paytmPng}" alt="Paytm" style="height: 24px; object-fit: contain;" />` : ''}
      </div>

      <!-- Footer -->
      <div style="
        padding-top: 8px;
        border-top: 1px solid #f3f4f6;
      ">
        <p style="
          font-size: 12px;
          color: #9ca3af;
          margin: 0;
        ">
          Secure UPI payments powered by <span style="font-weight: 500;">UPI QR Generator</span>
        </p>
      </div>
    </div>
  `;

  try {
    // Wait a moment for DOM to be fully rendered
    await new Promise(resolve => setTimeout(resolve, 500));

    // Wait for all images to load
    const images = container.querySelectorAll('img');
    await Promise.all(Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
        setTimeout(resolve, 3000);
      });
    }));

    // Get the actual height of the content
    const contentElement = container.firstElementChild as HTMLElement;
    const actualHeight = contentElement ? contentElement.offsetHeight + 100 : 800;

    // Generate the image using html2canvas
    const canvas = await html2canvas(container, {
      scale: scale,
      backgroundColor: '#f8fafc',
      useCORS: false, // Not needed since we're using data URLs
      allowTaint: false, // Not needed since we're using data URLs
      logging: false,
      width: 450,
      height: Math.max(800, actualHeight),
      scrollX: 0,
      scrollY: 0,
    });

    // Clean up
    document.body.removeChild(container);

    // Convert to data URL
    const dataUrl = canvas.toDataURL(`image/${actualFormat}`, quality);
    return dataUrl;
  } catch (error) {
    // Clean up on error
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
    throw error;
  }
}

/**
 * Download the professional QR card as an image file
 */
export async function downloadProfessionalQRCard(
  options: ProfessionalQROptions,
  filename?: string
): Promise<void> {
  const dataUrl = await generateProfessionalQRCard(options);
  
  const link = document.createElement('a');
  const actualFormat = options.format === 'svg' ? 'png' : (options.format || 'png');
  link.download = filename || `upi-qr-card-${options.merchantName.replace(/\s+/g, '-').toLowerCase()}.${actualFormat}`;
  link.href = dataUrl;
  link.click();
}