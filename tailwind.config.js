/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#371B58',
        'dark-violet': '#4C3575',
        'light-violet': '#5B4B8A',
        'light-purple': '#7858A6',
      },
      fontSize: {
        '2.5rem': '2.5rem',
      },
      spacing: {
        '328px': '328px',
      },
      minHeight: {
        '48px': '48px',
        '72px': '72px',
      },
      maxWidth: {
        '2/3': '66.666667%',
      },
      fontFamily: {
        flower: ['Indie Flower', 'cursive'],
      },
      screens: {
        md: '770px',
        tablet: '870px',
      },
    },
  },
  plugins: [],
};
