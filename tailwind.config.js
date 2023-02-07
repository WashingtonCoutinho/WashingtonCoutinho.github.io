/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
],

  theme: {
    extend: {
      dropShadow: {
        white: '0px 2px 0px #FFFFFF',
        primary: '0px 2px 0px #EA7339',
        secondary: '0px 2px 0px #00A6CF',
        third: '0px 2px 0px #6D00B3',
      },
      colors: {
        primary: '#EA7339',
        secondary: '#00A6CF',
        third: '#6D00B3',
        darkcolors: {
          100: '#252525',
          300: '#0F0F0F',
          500: '#0E0D0F',
          700: '#090909',
        },
      }
    },
  },
  plugins: [],
}
