
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#f9f506',
        'brand-dark': '#1c1c0d',
        'brand-muted': '#5e5e4a',
        'brand-bg': '#f8f8f5',
        'brand-border': '#e9e8ce',
        'brand-footer': '#23220f'
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        display: ['Spline Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
