'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Upload, X } from 'lucide-react';
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
  const [showAdvanced, setShowAdvanced] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleColorChange = (type: 'fgColor' | 'bgColor', color: string) => {
    const newOptions = { ...options, [type]: color };
    const fgColor = type === 'fgColor' ? color : options.fgColor;
    const bgColor = type === 'bgColor' ? color : options.bgColor;

    onChange(newOptions);
  };

  const handleSizeChange = (size: number[]) => {
    onChange({ ...options, size: size[0] });
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) return;

    if (file.size > 1024 * 1024) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onChange({ ...options, logo: result });
    };
    reader.readAsDataURL(file);
  };

  const removeLogo = () => {
    onChange({ ...options, logo: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const resetOptions = () => {
    onChange({ size: 512, fgColor: '#000000', bgColor: '#ffffff', logo: null });
  };

  const colorPresets = [
    { name: 'Black & White', fg: '#000000', bg: '#ffffff' },
    { name: 'Light Green', fg: '#000000', bg: '#CFFFE2' },
    { name: 'Medium Green', fg: '#000000', bg: '#A2D5C6' },
    { name: 'Light Gray', fg: '#000000', bg: '#F6F6F6' },
    { name: 'Inverse', fg: '#ffffff', bg: '#000000' },
    { name: 'Green on Gray', fg: '#0f766e', bg: '#ecfeff' },
  ];

  return (
    <div className="space-y-6">
      {/* Header actions */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Basic</h3>
        <Button onClick={resetOptions} variant="ghost" size="sm" className="h-8 px-2">
          Reset
        </Button>
      </div>

      {/* Basic: Size */}
      <div className="space-y-2">
        <Label>Size: {options.size}px</Label>
        <Slider
          value={[options.size]}
          onValueChange={handleSizeChange}
          min={256}
          max={1024}
          step={32}
          className="w-full"
        />
        <p className="text-xs text-foreground-muted">Tip: Larger size improves print quality.</p>
      </div>

      {/* Basic: Presets */}
      <div className="space-y-2">
        <Label>Color presets</Label>
        <div className="grid grid-cols-6 gap-2">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              aria-label={preset.name}
              onClick={() => onChange({ ...options, fgColor: preset.fg, bgColor: preset.bg })}
              className="h-8 w-full rounded border"
              style={{
                background: `linear-gradient(90deg, ${preset.fg} 0 50%, ${preset.bg} 50% 100%)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Basic: Custom colors */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Foreground</Label>
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
            <Label>Background</Label>
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

        {/* Inline guidance */}
        <div className="p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Contrast Ratio</span>
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
              ? 'Good for scanning.'
              : 'Low contrast may affect scanning. Try darker foreground on lighter background.'}
          </div>
        </div>
      </div>

      {/* Advanced toggle */}
      <div className="pt-2 border-t">
        <button
          type="button"
          onClick={() => setShowAdvanced(v => !v)}
          className="text-sm font-semibold w-full text-left"
          aria-expanded={showAdvanced}
        >
          Advanced (Logo)
        </button>
      </div>

      {showAdvanced && (
        <div className="space-y-2">
          <Label>Brand Logo (optional)</Label>
          <div>
            {options.logo ? (
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={options.logo}
                    alt="Logo preview"
                    className="w-10 h-10 object-contain rounded"
                  />
                  <span className="text-sm text-foreground-secondary">Logo added</span>
                </div>
                <Button onClick={removeLogo} size="sm" variant="ghost">
                  <X className="h-4 w-4" />
                </Button>
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
                <p className="text-xs text-foreground-muted mt-1">Square image, under 1MB recommended.</p>
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
      )}
    </div>
  );
}