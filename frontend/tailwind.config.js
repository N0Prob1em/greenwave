/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#333333',
        'accent': '#7FC37E',
        'white': '#FFFFFF'
      },
      spacing: {
        'card': '330px',
        'filter': '360px'
      },
      screens: {
        'phone': '0px',
        'tablet': '640px',
        'laptop': '1162px',
      }
    },
  },
  plugins: [],
}