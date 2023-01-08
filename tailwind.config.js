/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'green-pastel': '#CEEDC7',
        'green-pastel-drak': '#86C8BC',
        'dark-blue': '#0A2647',
        'light-blue': '#144272',
      },
      fontSize: {
        '2.5rem': '2.5rem',
      },
      spacing: {
        '328px': '328px',
      },
      minHeight: {
        '48px': '48px',
      },
      fontFamily: {
        flower: ['Indie Flower', 'cursive'],
      },
    },
  },
  plugins: [],
};
