module.exports = {
  theme: {
    extend: {
      container: {
        padding: '18rem'
      }
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
  plugins: [require("@tailwindcss/typography")]
}
