const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '12rem',
          lg: '13rem',
          xl: '13rem'
        }
      }
    },
    colors: {
      blue: colors.blue,
      teal: colors.teal,
      white: colors.white
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
