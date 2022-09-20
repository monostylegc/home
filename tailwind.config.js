/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend:{
        fontFamily: {
          'sans': ['Noto', 'Arial', 'sans-serif'],
        },
        colors: {
          'primary' : '#1c9946',
          'secondary' :'#88ba46',
          'accent' : '#e2ef25',
        }
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
