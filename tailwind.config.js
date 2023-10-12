/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      cyan: {
        dark: '#5ba4a4'
      },
      'grayish-cyan': {
        light: '#eef6f6',
        medium: '#7b8e8e',
        dark: '#2c3a3a'
      },
      white: colors.white,
      black: colors.black,
      red: colors.red,
      gray: colors.gray,
      transparent: colors.transparent
    },
    extend: {
      fontFamily: {
        'league-sparton': "'League Spartan', sans-serif;"
      },
      fontSize: {
        base: '0.938rem'
      }
    }
  },
  plugins: []
}
