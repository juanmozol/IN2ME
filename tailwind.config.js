/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        paper: {
          50: '#FAFAF8',
          100: '#F5F4F1',
          200: '#EDECE8',
          300: '#E2E0DB',
          400: '#D4D2CC',
          500: '#C0BDB6',
        },
        ink: {
          50: '#F0F0EF',
          100: '#D8D8D6',
          200: '#AEAEAC',
          300: '#888886',
          400: '#606060',
          500: '#444444',
          600: '#2C2C2C',
          700: '#1A1A1A',
          800: '#111111',
          900: '#0A0A0A',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '120': '30rem',
        '128': '32rem',
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.32em',
      },
      lineHeight: {
        'editorial': '1.02',
        'tight-heading': '1.08',
        'body': '1.65',
        'relaxed-body': '1.75',
      },
    },
  },
  plugins: [],
};
