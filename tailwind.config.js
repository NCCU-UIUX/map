/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature-green': '#A8CF8F',
        'sun-yellow': '#FEEA8A',
        'sky-blue': '#A1D2E6',
        'earth-gray': '#C0B5A2',
        'cta-orange': '#F3A15F',
        'path-purple': '#C8A2C8',
        'highlight-teal': '#7BDFF2',
      },
      fontFamily: {
        'title': ['"Shadows Into Light"', 'cursive'],
        'body': ['"Noto Sans TC"', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
} 