/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#4f7df3',
        'secondary-blue': '#c2d3ff',
        'secondary-red': '#ff5263',
        'neutral-gray': '#969696',
        'neutral-darkBlue': '#151f29',
      },
    },
  },
  plugins: [],
}
