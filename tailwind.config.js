/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
    './thankyou.html'
],

  theme: {
    extend: {
      boxShadow: {
        white: '0px 2px 0px 0px #FFFFFF',
        primary: '3px 3px 0px 0px #EA7339',
        secondary: '3px 3px 0px 0px #00A6CF',
        third: '3px 3px 0px 0px #6D00B3',
        wl: '3px 3px 0px 0px #FFFFFF',
      },
      dropShadow: {
        white: '0px 2px 0px #FFFFFF',
        primary: '3px 3px 0px #EA7339',
        secondary: '3px 3px 0px #00A6CF',
        third: '3px 3px 0px #6D00B3',
        wl: '3px 3px 0px #FFFFFF',
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
      },
    },
  },
  plugins: [],
}
