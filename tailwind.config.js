/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-character':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.12%, #000 87.29%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-anton)'],
      },
      colors: {
        primary: '#F9FAFB',
        'primary-dark': '#D0D5DD',
        secondary: '#F79009',
        'secondary-dark': '#DC6803',
      },
    },
  },
  plugins: [],
}
