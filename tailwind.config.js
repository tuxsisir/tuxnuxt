const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  theme: {
    darkSelector: '.dark',
    fontFamily: {
      sans: ['"Oxygen"'],
      serif: ['"Oxygen"'],
      mono: ['"Menlo"'],
      display: ['"Oxygen"'],
      body: ['"Oxygen"']
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2rem',
          lg: '2rem',
          xl: '13rem'
        }
      }
    },
    colors: {
      black: colors.black,
      blue: colors.blue,
      teal: colors.teal,
      white: colors.white,
      cyan: colors.cyan,
      gray: colors.gray
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    borderWidth: ['responsive', 'first', 'last'],
    extend: {
      typography: ['responsive', 'dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
