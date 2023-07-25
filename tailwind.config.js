/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        sans: ['var(--font-inter)'],
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
