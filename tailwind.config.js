/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F2F5F0',
          100: '#E3EBE0',
          200: '#C5D6C0',
          300: '#A3C09D',
          400: '#7FA678',
          500: '#5C8554',
          600: '#4A5D4E',   // Brand Dark Sage
          700: '#3D4F41',
          800: '#314035',
          900: '#253228',
          950: '#1A241C',
        },
        cream: {
          50: '#FEFCF8',
          100: '#FDF9F2',
          200: '#FBF3E5',
          300: '#F5F0E8',   // Brand Warm Cream
          400: '#EDE3D2',
          500: '#E0D0B8',
          600: '#C8B496',
          700: '#A89578',
          800: '#8A7960',
          900: '#6B5D4A',
        },
        gold: {
          50: '#FDF8EC',
          100: '#FAEFD4',
          200: '#F5DDA8',
          300: '#EEC872',
          400: '#D4A853',   // Brand Golden Accent
          500: '#C49A3C',
          600: '#A8812E',
          700: '#866527',
          800: '#6E5225',
          900: '#5C4423',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2' }],
        'subhead': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.35' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'section-lg': 'clamp(6rem, 12vw, 12rem)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'premium': '0 4px 24px -2px rgba(74, 93, 78, 0.12), 0 2px 8px -2px rgba(74, 93, 78, 0.06)',
        'premium-lg': '0 12px 40px -4px rgba(74, 93, 78, 0.15), 0 4px 16px -4px rgba(74, 93, 78, 0.08)',
        'gold': '0 4px 24px -4px rgba(212, 168, 83, 0.25)',
        'card': '0 1px 3px rgba(44, 36, 22, 0.06), 0 8px 32px -8px rgba(44, 36, 22, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
