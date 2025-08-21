/**
 * Elegant Color System - TypeScript Interfaces and Types
 * Comprehensive type definitions for the sophisticated color palette
 */

// Core Color Definition Interface
export interface ColorDefinition {
  name: string;
  hex: string;
  rgb: readonly [number, number, number];
  hsl: readonly [number, number, number];
  usage: string;
}

// Color Palette Variations Interface
export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// Semantic Color Mapping Interface
export interface SemanticColors {
  background: string;
  'background-secondary': string;
  'background-tertiary': string;
  foreground: string;
  'foreground-secondary': string;
  'foreground-muted': string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  active: string;
  'active-foreground': string;
  destructive: string;
  'destructive-foreground': string;
  success: string;
  'success-foreground': string;
  warning: string;
  'warning-foreground': string;
  info: string;
  'info-foreground': string;
  border: string;
  input: string;
  ring: string;
}

// Accessibility Result Interface
export interface AccessibilityResult {
  contrastRatio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  recommendation: string;
}

// Color Combination Interface
export interface ColorCombination {
  name: string;
  description: string;
  background: string;
  primaryText: string;
  accent: string;
  highlight?: string;
  contrastRatios: {
    primaryText: number;
    accent: number;
    highlight?: number;
  };
}

// Component Utility Classes Type
export type ComponentUtilityClass = 
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-outline'
  | 'btn-ghost'
  | 'card'
  | 'input-field'
  | 'text-primary-brand'
  | 'text-secondary-brand'
  | 'text-neutral-brand'
  | 'text-muted-brand'
  | 'bg-professional'
  | 'bg-modern'
  | 'bg-soft';

// Color Usage Guidelines Type
export type ColorUsage = 
  | 'primary-actions'
  | 'secondary-actions'
  | 'text-content'
  | 'backgrounds'
  | 'borders'
  | 'success-states'
  | 'warning-states'
  | 'error-states'
  | 'info-states';

// Theme Mode Type
export type ThemeMode = 'light' | 'dark';

// Color Scale Type
export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// Elegant Color Palette Names
export type ElegantColorName = 'primary' | 'secondary' | 'neutral' | 'gray';

// Color Format Type
export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'css-variable';

// Color Validation Result Interface
export interface ColorValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  accessibility: AccessibilityResult;
}

// Brand Color Configuration Interface
export interface BrandColorConfig {
  colors: Record<ElegantColorName, ColorDefinition>;
  palette: Record<ElegantColorName, ColorPalette>;
  semanticMapping: {
    light: SemanticColors;
    dark: SemanticColors;
  };
  combinations: ColorCombination[];
  utilityClasses: ComponentUtilityClass[];
}

// Color System Status Interface
export interface ColorSystemStatus {
  initialized: boolean;
  cssVariablesLoaded: boolean;
  tailwindConfigured: boolean;
  accessibilityCompliant: boolean;
  darkModeSupported: boolean;
  lastValidated: Date;
}

// Export type for the main elegant colors object
export type ElegantColorsType = Record<ElegantColorName, ColorDefinition>;

// Export type for the color palette object
export type ColorPaletteType = Record<ElegantColorName, ColorPalette>;
