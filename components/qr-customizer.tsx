'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Upload, X, Palette } from 'lucide-react';
import { toast } from 'sonner';
import type { QROptions } from '@/types/qr-types';

// Utility function to calculate contrast ratio
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return 1;

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

// Check if colors are problematic for colorblind users (red-green combinations)
function isColorBlindFriendly(color1: string, color2: string): boolean {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return true;

  // Check for red-green combinations that are problematic
  const isReddish = (rgb: { r: number; g: number; b: number }) => rgb.r > rgb.g && rgb.r > rgb.b;
  const isGreenish = (rgb: { r: number; g: number; b: number }) => rgb.g > rgb.r && rgb.g > rgb.b;

  return !(isReddish(rgb1) && isGreenish(rgb2)) && !(isGreenish(rgb1) && isReddish(rgb2));
}

interface QRCustomizerProps {
  options: QROptions;
  onChange: (options: QROptions) => void;
}

export function QRCustomizer({ options, onChange }: QRCustomizerProps) {
  const [showColorPicker, setShowColorPicker] = useState<'fg' | 'bg' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleColorChange = (type: 'fgColor' | 'bgColor', color: string) => {
    const newOptions = { ...options, [type]: color };
    const fgColor = type === 'fgColor' ? color : options.fgColor;
    const bgColor = type === 'bgColor' ? color : options.bgColor;

    // Validate contrast ratio (minimum 3:1 for QR codes)
    const contrastRatio = getContrastRatio(fgColor, bgColor);
    if (contrastRatio < 3) {
      toast.error(`Low contrast ratio (${contrastRatio.toFixed(1)}:1). Minimum 3:1 required for reliable scanning.`);
    }

    // Check colorblind accessibility
    if (!isColorBlindFriendly(fgColor, bgColor)) {
      toast.warning('Red-green color combinations may be difficult for colorblind users to distinguish.');
    }

    onChange(newOptions);
  };

  const handleSizeChange = (size: number[]) => {
    onChange({ ...options, size: size[0] });
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 1024 * 1024) {
      toast.error('Image size should be less than 1MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onChange({ ...options, logo: result });
      toast.success('Logo uploaded successfully');
    };
    reader.readAsDataURL(file);
  };

  const removeLogo = () => {
    onChange({ ...options, logo: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('Logo removed');
  };

  const colorPresets = [
    { name: 'Brand Black & White', fg: '#000000', bg: '#ffffff' },
    { name: 'Brand Light Green', fg: '#000000', bg: '#CFFFE2' },
    { name: 'Brand Medium Green', fg: '#000000', bg: '#A2D5C6' },
    { name: 'Brand Light Gray', fg: '#000000', bg: '#F6F6F6' },
    { name: 'Inverse (White on Black)', fg: '#ffffff', bg: '#000000' },
    { name: 'Green on Gray', fg: '#A2D5C6', bg: '#F6F6F6' },
  ];

  return (
    <Card className="bg-card/70 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Customize QR Code
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Size Control */}
        <div>
          <Label>Size: {options.size}px</Label>
          <div className="mt-2">
            <Slider
              value={[options.size]}
              onValueChange={handleSizeChange}
              min={256}
              max={1024}
              step={32}
              className="w-full"
            />
          </div>
        </div>

        {/* Color Presets */}
        <div>
          <Label>Color Presets</Label>
          <div className="grid grid-cols-1 gap-2 mt-2">
            {colorPresets.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                size="sm"
                onClick={() => {
                  onChange({ ...options, fgColor: preset.fg, bgColor: preset.bg });
                  toast.success(`Applied ${preset.name} theme`);
                }}
                className="justify-start"
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <div 
                      className="w-4 h-4 border rounded-l" 
                      style={{ backgroundColor: preset.fg }}
                    />
                    <div 
                      className="w-4 h-4 border rounded-r" 
                      style={{ backgroundColor: preset.bg }}
                    />
                  </div>
                  {preset.name}
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Foreground Color</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  type="color"
                  value={options.fgColor}
                  onChange={(e) => handleColorChange('fgColor', e.target.value)}
                  className="w-12 h-10 p-1 border rounded"
                />
                <Input
                  type="text"
                  value={options.fgColor}
                  onChange={(e) => handleColorChange('fgColor', e.target.value)}
                  className="font-mono text-sm"
                  placeholder="#000000"
                />
              </div>
            </div>

            <div>
              <Label>Background Color</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  type="color"
                  value={options.bgColor}
                  onChange={(e) => handleColorChange('bgColor', e.target.value)}
                  className="w-12 h-10 p-1 border rounded"
                />
                <Input
                  type="text"
                  value={options.bgColor}
                  onChange={(e) => handleColorChange('bgColor', e.target.value)}
                  className="font-mono text-sm"
                  placeholder="#ffffff"
                />
              </div>
            </div>
          </div>

          {/* Contrast Ratio Indicator */}
          <div className="p-3 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Contrast Ratio:</span>
              <span className={`text-sm font-mono ${
                getContrastRatio(options.fgColor, options.bgColor) >= 3
                  ? 'text-success'
                  : 'text-destructive'
              }`}>
                {getContrastRatio(options.fgColor, options.bgColor).toFixed(1)}:1
              </span>
            </div>
            <div className="text-xs text-foreground-muted mt-1">
              {getContrastRatio(options.fgColor, options.bgColor) >= 3
                ? '✓ Good contrast for reliable scanning'
                : '⚠ Low contrast - may affect scanning reliability'}
            </div>
          </div>
        </div>

        {/* Logo Upload */}
        <div>
          <Label>Brand Logo (Optional)</Label>
          <div className="mt-2">
            {options.logo ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={options.logo}
                      alt="Logo preview"
                      className="w-10 h-10 object-contain rounded"
                    />
                    <span className="text-sm text-foreground-secondary">
                      Logo uploaded
                    </span>
                  </div>
                  <Button onClick={removeLogo} size="sm" variant="ghost">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Logo
                </Button>
                <p className="text-xs text-foreground-muted mt-1">
                  Recommended: Square image, max 1MB
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}