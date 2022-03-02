const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        fire: '#C70039',
        water: '#3498DB',
        electro: '#f7ce68',
        leaf: '#00e887'
      }
    }
  },
  plugins: []
};
