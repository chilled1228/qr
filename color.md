# Elegant Color Palette Documentation

## Color Palette Overview

This sophisticated color palette combines vibrant accents with neutral foundations, creating a modern and elegant design system perfect for contemporary web applications.

### Primary Colors

| Color | Hex Code | RGB Values | Usage |
|-------|----------|------------|--------|
| **Coral Pink** | `#FF2E63` | rgb(255, 46, 99) | Primary accent, CTAs, highlights |
| **Charcoal** | `#252A34` | rgb(37, 42, 52) | Primary text, headers, navigation |
| **Turquoise** | `#08D9D6` | rgb(8, 217, 214) | Secondary accent, alerts, emphasis |
| **Light Gray** | `#EAEAEA` | rgb(234, 234, 234) | Backgrounds, dividers, subtle elements |

## Color Hierarchy & Usage Guidelines

### 1. Primary Coral Pink (`#FF2E63`)
**Use For:**
- Primary buttons and call-to-action elements
- Active navigation states
- Progress indicators and loading states
- Interactive elements on hover
- Brand highlights and logos

**Best Practices:**
- Ensure sufficient contrast with white text (contrast ratio: 4.1:1)
- Use strategically to create strong visual impact
- Pair with neutral backgrounds for maximum effectiveness

### 2. Charcoal (`#252A34`)
**Use For:**
- Primary headings (H1, H2)
- Body text and paragraphs
- Navigation menu items
- Form labels and input text
- Footer content

**Best Practices:**
- Excellent readability on light backgrounds
- Use for text that requires maximum legibility
- Works well for professional and formal content

### 3. Turquoise (`#08D9D6`)
**Use For:**
- Secondary buttons and actions
- Success messages and positive feedback
- Important notifications
- Accent elements and decorative features
- Highlighting informational content

**Best Practices:**
- Use white text for optimal contrast
- Great for supporting actions and secondary emphasis
- Complements the primary coral pink beautifully

### 4. Light Gray (`#EAEAEA`)
**Use For:**
- Background sections and containers
- Subtle borders and dividers
- Disabled button states
- Placeholder text
- Card backgrounds and subtle separations

**Best Practices:**
- Provides excellent contrast for dark text
- Creates breathing space between content sections
- Use for secondary information that shouldn't compete with primary content

## Color Combinations & Schemes

### Elegant Combinations

#### **Professional & Clean**
- Background: `#EAEAEA` (Light Gray)
- Primary Text: `#252A34` (Charcoal)
- Accent: `#FF2E63` (Coral Pink)
- Highlights: `#08D9D6` (Turquoise)

#### **High Contrast & Modern**
- Background: `#252A34` (Charcoal)
- Primary Text: `#EAEAEA` (Light Gray)
- Accent: `#FF2E63` (Coral Pink)
- Secondary: `#08D9D6` (Turquoise)

#### **Soft & Approachable**
- Background: `#FFFFFF` (White)
- Container Background: `#EAEAEA` (Light Gray)
- Text: `#252A34` (Charcoal)
- Primary Action: `#FF2E63` (Coral Pink)

## Tailwind CSS Implementation

### Tailwind Config Setup
Add these custom colors to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#FF2E63',
          50: '#FFE5ED',
          100: '#FFCCD9',
          200: '#FF99B3',
          300: '#FF668C',
          400: '#FF3366',
          500: '#FF2E63', // Main color
          600: '#E6295A',
          700: '#CC2450',
          800: '#B31F47',
          900: '#991A3D',
        },
        secondary: {
          DEFAULT: '#08D9D6',
          50: '#E0FFFE',
          100: '#C2FFFD',
          200: '#85FFFA',
          300: '#47FFF8',
          400: '#0AFFF5',
          500: '#08D9D6', // Main color
          600: '#07C2BF',
          700: '#06AAA8',
          800: '#059390',
          900: '#047C79',
        },
        neutral: {
          DEFAULT: '#252A34',
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#252A34', // Main color
          900: '#1A1D23',
        },
        gray: {
          light: '#EAEAEA',
        }
      }
    }
  }
}
```

### Utility Classes Usage

#### Buttons
```html
<!-- Primary Button -->
<button class="bg-primary hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-secondary hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Secondary Action
</button>

<!-- Outline Button -->
<button class="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Outline Button
</button>

<!-- Ghost Button -->
<button class="text-primary hover:text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-lg transition-colors">
  Ghost Button
</button>
```

#### Text Colors
```html
<!-- Primary text -->
<h1 class="text-neutral-800 text-3xl font-bold">Main Heading</h1>

<!-- Accent text -->
<p class="text-primary text-lg font-semibold">Highlighted Text</p>

<!-- Secondary accent -->
<span class="text-secondary font-medium">Success Message</span>

<!-- Muted text -->
<p class="text-neutral-500">Secondary information</p>
```

#### Backgrounds
```html
<!-- Primary background -->
<div class="bg-primary text-white p-6 rounded-lg">
  Primary background section
</div>

<!-- Light background -->
<div class="bg-gray-light p-6 rounded-lg">
  Light background section
</div>

<!-- Dark background -->
<div class="bg-neutral-800 text-white p-6 rounded-lg">
  Dark background section
</div>

<!-- Gradient backgrounds -->
<div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
  Gradient background
</div>
```

## Accessibility Considerations

### Contrast Ratios
- **Coral Pink on White**: 4.1:1 ✅ (AA compliant)
- **Charcoal on White**: 12.6:1 ✅ (AAA compliant)
- **Turquoise on White**: 4.8:1 ✅ (AA compliant)
- **Charcoal on Light Gray**: 8.9:1 ✅ (AAA compliant)

### Color Blindness Considerations
- The palette works well for most types of color blindness
- Coral Pink and Turquoise provide sufficient differentiation
- Always use additional visual cues (icons, typography) alongside color

## Tailwind Component Examples

### Navigation Components
```html
<!-- Navigation Bar -->
<nav class="bg-white border-b border-gray-light">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <span class="text-primary font-bold text-xl">Brand</span>
      </div>
      <div class="flex space-x-8">
        <a href="#" class="text-neutral-800 hover:text-primary px-3 py-2 text-sm font-medium">Home</a>
        <a href="#" class="text-primary border-b-2 border-primary px-3 py-2 text-sm font-medium">About</a>
        <a href="#" class="text-neutral-800 hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile Menu Button -->
<button class="text-neutral-800 hover:text-primary hover:bg-gray-light p-2 rounded-md">
  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
```

### Card Components
```html
<!-- Product Card -->
<div class="bg-white rounded-lg border border-gray-light hover:shadow-lg transition-shadow duration-300">
  <div class="p-6">
    <h3 class="text-neutral-800 text-lg font-semibold mb-2">Card Title</h3>
    <p class="text-neutral-500 text-sm mb-4">Card description goes here.</p>
    <div class="flex justify-between items-center">
      <span class="text-primary font-bold text-xl">$99</span>
      <button class="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>

<!-- Feature Card with Icon -->
<div class="bg-gray-light rounded-lg p-6 text-center">
  <div class="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
  <h3 class="text-neutral-800 text-lg font-semibold mb-2">Feature Title</h3>
  <p class="text-neutral-500 text-sm">Feature description</p>
</div>
```

### Form Components
```html
<!-- Input Field -->
<div class="mb-4">
  <label class="block text-neutral-800 text-sm font-medium mb-2">Email Address</label>
  <input 
    type="email" 
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
    placeholder="Enter your email"
  >
</div>

<!-- Success Input -->
<div class="mb-4">
  <label class="block text-neutral-800 text-sm font-medium mb-2">Username</label>
  <input 
    type="text" 
    class="w-full px-3 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
    placeholder="Username"
  >
  <p class="text-secondary text-xs mt-1">✓ Username is available</p>
</div>

<!-- Error Input -->
<div class="mb-4">
  <label class="block text-neutral-800 text-sm font-medium mb-2">Password</label>
  <input 
    type="password" 
    class="w-full px-3 py-2 border border-red-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
    placeholder="Password"
  >
  <p class="text-red-500 text-xs mt-1">Password must be at least 8 characters</p>
</div>
```

### Alert Components
```html
<!-- Success Alert -->
<div class="bg-secondary-50 border border-secondary-200 text-secondary-800 px-4 py-3 rounded-md mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
    <span class="font-medium">Success! Your changes have been saved.</span>
  </div>
</div>

<!-- Primary Alert -->
<div class="bg-primary-50 border border-primary-200 text-primary-800 px-4 py-3 rounded-md mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
    </svg>
    <span class="font-medium">Important information you should know.</span>
  </div>
</div>
```

## Quick Reference Classes

### Most Common Tailwind Classes for This Palette

#### Backgrounds
- `bg-primary` - Coral Pink background
- `bg-secondary` - Turquoise background  
- `bg-neutral-800` - Charcoal background
- `bg-gray-light` - Light Gray background
- `bg-white` - White background

#### Text Colors
- `text-primary` - Coral Pink text
- `text-secondary` - Turquoise text
- `text-neutral-800` - Charcoal text (primary text)
- `text-neutral-500` - Gray text (secondary text)
- `text-white` - White text

#### Borders
- `border-primary` - Coral Pink border
- `border-secondary` - Turquoise border
- `border-gray-light` - Light Gray border
- `border-neutral-800` - Charcoal border

#### Hover States
- `hover:bg-primary-600` - Darker primary on hover
- `hover:bg-secondary-600` - Darker secondary on hover
- `hover:text-primary` - Primary text on hover
- `hover:border-primary` - Primary border on hover

### Pre-built Component Classes
Create these custom utility classes in your CSS for common patterns:

```css
@layer utilities {
  .btn-primary {
    @apply bg-primary hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
  
  .btn-secondary {
    @apply bg-secondary hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
  
  .btn-outline {
    @apply border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
  
  .card {
    @apply bg-white rounded-lg border border-gray-light p-6 hover:shadow-lg transition-shadow duration-300;
  }
  
  .input-field {
    @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200;
  }
}
```

## Brand Personality

This color palette conveys:
- **Modern & Sophisticated**: The combination feels contemporary and professional
- **Trustworthy & Reliable**: Neutral grays provide stability
- **Energetic & Creative**: Bright accents add personality and vibrancy
- **Clean & Minimalist**: The limited palette maintains simplicity

## Implementation Checklist

- [ ] Define CSS custom properties
- [ ] Create component utility classes
- [ ] Test contrast ratios for accessibility
- [ ] Implement hover and focus states
- [ ] Create style guide for team reference
- [ ] Test across different devices and browsers
- [ ] Validate color combinations with stakeholders

## Additional Resources

### Complementary Colors (Optional Extensions)
- **Success Green**: `#00C896` (for positive actions)
- **Warning Orange**: `#FFA726` (for cautionary messages)
- **Info Blue**: `#42A5F5` (for informational content)

These can be added as semantic colors while maintaining the core elegant palette.