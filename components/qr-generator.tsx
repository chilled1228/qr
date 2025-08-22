'use client';

import { useState, useCallback } from 'react';
import { QrCode, Download, Palette } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QRForm } from './qr-form';
import { QRDisplay } from './qr-display';
import { QRCustomizer } from './qr-customizer';
import { useRealtimeQR } from '@/hooks/use-realtime-qr';
import type { QRFormData, QROptions } from '@/types/qr-types';
import { toast } from 'sonner';
import { useNetworkStatus } from './network-status';

export function QRGenerator() {
  const [formData, setFormData] = useState<QRFormData>({
    upiId: '',
    merchantName: '',
    amount: '',
    note: '',
  });

  const [qrOptions, setQROptions] = useState<QROptions>({
    size: 512,
    fgColor: '#000000',
    bgColor: '#ffffff',
    logo: null,
  });

  const isOnline = useNetworkStatus();

  // Real-time QR generation
  const {
    qrCode,
    upiString,
    isGenerating,
    hasValidData,
    isPlaceholder
  } = useRealtimeQR({
    formData,
    options: qrOptions,
    debounceMs: 400
  });

  // Handle form data changes (no manual submission needed)
  const handleFormChange = useCallback((data: QRFormData) => {
    setFormData(data);
  }, []);

  // Handle QR options changes
  const handleOptionsChange = useCallback((options: QROptions) => {
    setQROptions(options);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Mobile-First Tabbed Interface - Improved Visibility */}
      <div className="mobile-qr-container">
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="mobile-tabs-list grid w-full grid-cols-3">
            <TabsTrigger value="create" className="mobile-tab-trigger">
              <QrCode className="h-4 w-4 mr-1 sm:mr-2" />
              <span>Create</span>
            </TabsTrigger>
            <TabsTrigger value="customize" className="mobile-tab-trigger" disabled={!qrCode}>
              <Palette className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Customize</span>
              <span className="sm:hidden">Style</span>
            </TabsTrigger>
            <TabsTrigger value="download" className="mobile-tab-trigger" disabled={!qrCode}>
              <Download className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Get</span>
            </TabsTrigger>
          </TabsList>

          {/* Create Tab - Form and QR Preview */}
          <TabsContent value="create" className="mobile-tab-content mt-0">
            <div className="mobile-card">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                {/* Form Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <QrCode className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">Enter Details</h2>
                  </div>

                  <QRForm
                    onChange={handleFormChange}
                    formData={formData}
                    isPlaceholder={isPlaceholder}
                  />
                </div>

                {/* QR Preview Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded"></div>
                      </div>
                      <h2 className="text-lg font-semibold">Preview</h2>
                    </div>

                  </div>

                  <QRDisplay
                    qrCode={qrCode}
                    upiString={upiString}
                    formData={formData}
                    options={qrOptions}
                    onOptionsChange={handleOptionsChange}
                    isGenerating={isGenerating}
                    showActions={false}
                    showCustomizer={false}
                    showPaymentDetails={false}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Customize Tab - QR Styling Options */}
          <TabsContent value="customize" className="mobile-tab-content mt-0">
            <div className="mobile-card">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                {/* Customization Controls */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">Customize Style</h2>
                  </div>

                  <QRCustomizer
                    options={qrOptions}
                    onChange={handleOptionsChange}
                  />
                </div>

                {/* Live Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-primary/20 flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded"></div>
                      </div>
                      <h2 className="text-lg font-semibold">Live Preview</h2>
                    </div>

                  </div>

                  <QRDisplay
                    qrCode={qrCode}
                    upiString={upiString}
                    formData={formData}
                    options={qrOptions}
                    onOptionsChange={handleOptionsChange}
                    isGenerating={isGenerating}
                    showActions={false}
                    showCustomizer={false}
                    showPaymentDetails={false}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Download Tab - QR Code and Download Options */}
          <TabsContent value="download" className="mobile-tab-content mt-0">
            <div className="mobile-card">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                {/* Final QR Code Display */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Download className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">Your QR Code</h2>
                  </div>

                  <QRDisplay
                    qrCode={qrCode}
                    upiString={upiString}
                    formData={formData}
                    options={qrOptions}
                    onOptionsChange={handleOptionsChange}
                    isGenerating={isGenerating}
                    showActions={true}
                    showCustomizer={false}
                    showPaymentDetails={true}
                  />
                </div>

                {/* Download Instructions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-5 w-5 rounded bg-success/20 flex items-center justify-center">
                      <div className="h-2 w-2 bg-success rounded"></div>
                    </div>
                    <h2 className="text-lg font-semibold">Ready to Use</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">How to Use Your QR Code:</h3>
                      <ul className="text-sm space-y-1 text-foreground-secondary">
                        <li>• Download as PNG for digital use</li>
                        <li>• Download as SVG for print materials</li>
                        <li>• Share directly from your device</li>
                        <li>• Copy the payment link to share manually</li>
                      </ul>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                      <h3 className="font-medium mb-2">Payment Details:</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>Merchant:</strong> {formData.merchantName || 'Not specified'}</p>
                        <p><strong>UPI ID:</strong> {formData.upiId || 'Not specified'}</p>
                        {formData.amount && (
                          <p><strong>Amount:</strong> ₹{formData.amount}</p>
                        )}
                        {formData.note && (
                          <p><strong>Note:</strong> {formData.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}