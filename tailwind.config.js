/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'green-pastel': '#CEEDC7',
        'green-pastel-drak': '#86C8BC',
      },
      fontSize: {
        '2.5rem': '2.5rem',
      },
      spacing: {
        '328px': '328px',
        '230px': '230px',
      },
      minHeight: {
        '48px': '48px',
      },
    },
  },
  plugins: [],
};
