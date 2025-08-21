export interface QRFormData {
  upiId: string;
  merchantName: string;
  amount: string;
  note: string;
}

export interface QROptions {
  size: number;
  fgColor: string;
  bgColor: string;
  logo: string | null;
}

export interface QRGenerationResult {
  dataUrl: string;
  svg: string;
  upiString: string;
}