/**
 * Elegant Color System Utilities
 * Implements the sophisticated color palette from color.md specifications
 * Provides utilities for color manipulation, accessibility checking, and brand color management
 */

// Elegant Color Palette - Exact Specifications
export const elegantColors = {
  primary: {
    name: 'Coral Pink',
    hex: '#FF2E63',
    rgb: [255, 46, 99] as const,
    hsl: [340, 100, 59] as const,
    usage: 'Primary accent, CTAs, highlights',
  },
  secondary: {
    name: 'Turquoise',
    hex: '#08D9D6',
    rgb: [8, 217, 214] as const,
    hsl: [179, 93, 44] as const,
    usage: 'Secondary accent, alerts, emphasis',
  },
  neutral: {
    name: 'Charcoal',
    hex: '#252A34',
    rgb: [37, 42, 52] as const,
    hsl: [220, 17, 17] as const,
    usage: 'Primary text, headers, navigation',
  },
  gray: {
    name: 'Light Gray',
    hex: '#EAEAEA',
    rgb: [234, 234, 234] as const,
    hsl: [0, 0, 92] as const,
    usage: 'Backgrounds, dividers, subtle elements',
  },
} as const;

// Elegant Color Palette with Variations (matches CSS variables)
export const colorPalette = {
  primary: {
    50: '#FFF0F4',    // 340 100% 97% - Lightest coral
    100: '#FFE0E8',   // 340 100% 94% - Very light coral
    200: '#FFC0D1',   // 340 100% 88% - Light coral
    300: '#FF80A3',   // 340 100% 76% - Medium light coral
    400: '#FF4D83',   // 340 100% 68% - Medium coral
    500: '#FF2E63',   // 340 100% 59% - Primary coral (brand)
    600: '#E6295A',   // 340 90% 50% - Medium dark coral
    700: '#CC2450',   // 340 80% 40% - Dark coral
    800: '#B31F47',   // 340 70% 32% - Very dark coral
    900: '#991A3D',   // 340 60% 24% - Darkest coral
  },
  secondary: {
    50: '#E0FFFE',    // 179 93% 97% - Lightest turquoise
    100: '#C2FFFD',   // 179 93% 94% - Very light turquoise
    200: '#85FFFA',   // 179 93% 88% - Light turquoise
    300: '#47FFF8',   // 179 93% 76% - Medium light turquoise
    400: '#0AFFF5',   // 179 93% 60% - Medium turquoise
    500: '#08D9D6',   // 179 93% 44% - Primary turquoise (brand)
    600: '#07C2BF',   // 179 85% 38% - Medium dark turquoise
    700: '#06AAA8',   // 179 75% 32% - Dark turquoise
    800: '#059390',   // 179 65% 26% - Very dark turquoise
    900: '#047C79',   // 179 55% 20% - Darkest turquoise
  },
  neutral: {
    50: '#F8F9FA',    // 220 17% 95% - Lightest neutral
    100: '#E9ECEF',   // 220 17% 90% - Very light neutral
    200: '#DEE2E6',   // 220 17% 80% - Light neutral
    300: '#CED4DA',   // 220 17% 65% - Medium light neutral
    400: '#ADB5BD',   // 220 17% 50% - Medium neutral
    500: '#6C757D',   // 220 17% 35% - Medium dark neutral
    600: '#495057',   // 220 17% 25% - Dark neutral
    700: '#343A40',   // 220 17% 20% - Very dark neutral
    800: '#252A34',   // 220 17% 17% - Primary neutral (brand)
    900: '#1A1D23',   // 220 17% 12% - Darkest neutral
  },
  gray: {
    50: '#FAFAFA',    // 0 0% 98% - Lightest gray
    100: '#F5F5F5',   // 0 0% 96% - Very light gray
    200: '#F0F0F0',   // 0 0% 94% - Light gray
    300: '#EAEAEA',   // 0 0% 92% - Primary light gray (brand)
    400: '#D9D9D9',   // 0 0% 85% - Medium light gray
    500: '#BFBFBF',   // 0 0% 75% - Medium gray
    600: '#A6A6A6',   // 0 0% 65% - Medium dark gray
    700: '#8C8C8C',   // 0 0% 55% - Dark gray
    800: '#737373',   // 0 0% 45% - Very dark gray
    900: '#595959',   // 0 0% 35% - Darkest gray
  },
} as const;

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/**
 * Calculate relative luminance of a color
 * Used for contrast ratio calculations
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * Returns a value between 1 and 21
 */
export function getContrastRatio(
  color1: [number, number, number],
  color2: [number, number, number]
): number {
  const lum1 = getLuminance(...color1);
  const lum2 = getLuminance(...color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if color combination meets WCAG accessibility standards
 */
export function isAccessible(
  foreground: [number, number, number],
  background: [number, number, number],
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const contrast = getContrastRatio(foreground, background);
  
  if (level === 'AAA') {
    return size === 'large' ? contrast >= 4.5 : contrast >= 7;
  }
  
  return size === 'large' ? contrast >= 3 : contrast >= 4.5;
}

/**
 * Validate color contrast with detailed results
 */
export function validateColorContrast(
  foreground: [number, number, number],
  background: [number, number, number]
): {
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  wcagAALarge: boolean;
  wcagAAALarge: boolean;
} {
  const ratio = getContrastRatio(foreground, background);

  return {
    ratio,
    wcagAA: ratio >= 4.5,
    wcagAAA: ratio >= 7,
    wcagAALarge: ratio >= 3,
    wcagAAALarge: ratio >= 4.5,
  };
}

/**
 * Get accessible text color (black or white) for a given background
 */
export function getAccessibleTextColor(
  background: [number, number, number]
): 'black' | 'white' {
  const whiteContrast = getContrastRatio([255, 255, 255], background);
  const blackContrast = getContrastRatio([0, 0, 0], background);
  
  return whiteContrast > blackContrast ? 'white' : 'black';
}

/**
 * Generate color variations with opacity
 */
export function withOpacity(color: string, opacity: number): string {
  const rgb = hexToRgb(color);
  if (!rgb) return color;
  
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
}

/**
 * Elegant color presets for common use cases
 */
export const elegantColorPresets = {
  primary: {
    name: 'Coral Pink Primary',
    foreground: '#FFFFFF',
    background: elegantColors.primary.hex,
    description: 'White text on coral pink background for primary actions',
  },
  secondary: {
    name: 'Turquoise Secondary',
    foreground: '#FFFFFF',
    background: elegantColors.secondary.hex,
    description: 'White text on turquoise background for secondary actions',
  },
  neutral: {
    name: 'Charcoal Neutral',
    foreground: '#FFFFFF',
    background: elegantColors.neutral.hex,
    description: 'White text on charcoal background for neutral elements',
  },
  light: {
    name: 'Light Gray Background',
    foreground: elegantColors.neutral.hex,
    background: elegantColors.gray.hex,
    description: 'Charcoal text on light gray background for subtle elements',
  },
  inverse: {
    name: 'Dark on Light',
    foreground: elegantColors.neutral.hex,
    background: '#FFFFFF',
    description: 'High contrast charcoal text on white background',
  },
  turquoiseOnLight: {
    name: 'Turquoise on Light',
    foreground: elegantColors.secondary.hex,
    background: elegantColors.gray.hex,
    description: 'Turquoise text on light gray background for better accessibility',
  },
} as const;

/**
 * Comprehensive accessibility validation for brand color combinations
 */
export interface ColorAccessibilityResult {
  accessible: boolean;
  contrastRatio: number;
  wcagAA: {
    normal: boolean;
    large: boolean;
  };
  wcagAAA: {
    normal: boolean;
    large: boolean;
  };
  recommendedTextColor: 'black' | 'white';
}

/**
 * Validate all elegant color combinations for accessibility with detailed results
 */
export function validateElegantColors(): Record<string, ColorAccessibilityResult> {
  const results: Record<string, ColorAccessibilityResult> = {};

  Object.entries(elegantColorPresets).forEach(([key, preset]) => {
    const fg = hexToRgb(preset.foreground);
    const bg = hexToRgb(preset.background);

    if (fg && bg) {
      const contrastRatio = getContrastRatio(fg, bg);
      const recommendedTextColor = getAccessibleTextColor(bg);

      results[key] = {
        accessible: isAccessible(fg, bg, 'AA', 'normal'),
        contrastRatio: Math.round(contrastRatio * 100) / 100,
        wcagAA: {
          normal: isAccessible(fg, bg, 'AA', 'normal'),
          large: isAccessible(fg, bg, 'AA', 'large'),
        },
        wcagAAA: {
          normal: isAccessible(fg, bg, 'AAA', 'normal'),
          large: isAccessible(fg, bg, 'AAA', 'large'),
        },
        recommendedTextColor,
      };
    }
  });

  return results;
}

/**
 * Simple validation function for backward compatibility
 */
export function validateElegantColorsSimple(): Record<string, boolean> {
  const detailedResults = validateElegantColors();
  const simpleResults: Record<string, boolean> = {};

  Object.entries(detailedResults).forEach(([key, result]) => {
    simpleResults[key] = result.accessible;
  });

  return simpleResults;
}

/**
 * Parse HSL color string to RGB values
 */
export function parseHSLColor(hslString: string): [number, number, number] {
  // Match HSL format: hsl(h, s%, l%) or hsl(h s% l%)
  const match = hslString.match(/hsl\(\s*(\d+)\s*,?\s*(\d+)%\s*,?\s*(\d+)%\s*\)/);
  if (!match) {
    throw new Error(`Invalid HSL color format: ${hslString}`);
  }

  const h = parseInt(match[1], 10);
  const s = parseInt(match[2], 10);
  const l = parseInt(match[3], 10);

  return hslToRgb(h, s, l);
}

/**
 * Convert HSL to RGB
 */
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  if (s === 0) {
    const gray = Math.round(l * 255);
    return [gray, gray, gray]; // achromatic
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  const r = Math.round(hue2rgb(p, q, h + 1/3) * 255);
  const g = Math.round(hue2rgb(p, q, h) * 255);
  const b = Math.round(hue2rgb(p, q, h - 1/3) * 255);

  return [r, g, b];
}

/**
 * Convert HSL string to hex
 */
export function hslToHex(h: number, s: number, l: number): string {
  const [r, g, b] = hslToRgb(h, s, l);
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Validate CSS custom property format
 */
export function validateCssVar(cssVar: string): boolean {
  return /^hsl\(var\(--[\w-]+\)\)$/.test(cssVar);
}

/**
 * CSS custom property helpers
 */
export const cssVars = {
  // Brand colors
  brandTeal: 'hsl(var(--brand-teal))',
  brandDark: 'hsl(var(--brand-dark))',
  brandPink: 'hsl(var(--brand-pink))',
  brandLight: 'hsl(var(--brand-light))',

  // Semantic colors
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  foregroundSecondary: 'hsl(var(--foreground-secondary))',
  foregroundMuted: 'hsl(var(--foreground-muted))',
  primary: 'hsl(var(--primary))',
  secondary: 'hsl(var(--secondary))',
  accent: 'hsl(var(--accent))',
  active: 'hsl(var(--active))',
  muted: 'hsl(var(--muted))',
  border: 'hsl(var(--border))',

  // State colors
  success: 'hsl(var(--success))',
  warning: 'hsl(var(--warning))',
  destructive: 'hsl(var(--destructive))',
  info: 'hsl(var(--info))',
} as const;

/**
 * Get all available elegant color classes for Tailwind
 */
export function getElegantColorClasses(): string[] {
  const classes: string[] = [];

  // Elegant color classes with numbered shades
  Object.keys(colorPalette).forEach(colorName => {
    Object.keys(colorPalette[colorName as keyof typeof colorPalette]).forEach(shade => {
      classes.push(`${colorName}-${shade}`);
    });
  });

  // Add semantic aliases for the elegant colors
  classes.push('primary');             // alias for primary-500
  classes.push('secondary');           // alias for secondary-500
  classes.push('neutral');             // alias for neutral-800
  classes.push('gray-light');          // alias for gray-light-300

  return classes.sort();
}

/**
 * Comprehensive color system validation
 */
export function validateColorSystem(): {
  cssVariables: boolean;
  elegantColors: Record<string, ColorAccessibilityResult>;
  paletteConsistency: boolean;
  tailwindClasses: string[];
  issues: string[];
} {
  const issues: string[] = [];
  const elegantColorResults = validateElegantColors();

  // Check palette consistency
  let paletteConsistency = true;
  try {
    // Verify elegant colors match palette
    const primaryRgb = hexToRgb(elegantColors.primary.hex);
    const palettePrimaryRgb = hexToRgb(colorPalette.primary[500]);
    if (JSON.stringify(primaryRgb) !== JSON.stringify(palettePrimaryRgb)) {
      issues.push('Primary color does not match palette primary-500');
      paletteConsistency = false;
    }

    const secondaryRgb = hexToRgb(elegantColors.secondary.hex);
    const paletteSecondaryRgb = hexToRgb(colorPalette.secondary[500]);
    if (JSON.stringify(secondaryRgb) !== JSON.stringify(paletteSecondaryRgb)) {
      issues.push('Secondary color does not match palette secondary-500');
      paletteConsistency = false;
    }
  } catch (error) {
    issues.push(`Palette consistency check failed: ${error}`);
    paletteConsistency = false;
  }

  return {
    cssVariables: Object.values(cssVars).every(validateCssVar),
    elegantColors: elegantColorResults,
    paletteConsistency,
    tailwindClasses: getElegantColorClasses(),
    issues,
  };
}
