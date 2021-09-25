module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"url(../public/coverimage.png)"
      },
      spacing:{
         '96':'45rem',
      },
      textColor:{
        'primary':'#f2b012',
        'tcolor':'#212529',
        'foter':'#ddeaf6'

      },
      fontfamily:{
        'patrick':['Patrick Hand SC cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
