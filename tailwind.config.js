const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        'water-colorful': '#3498DB',
        electro: '#F7D02C',
        gras: '#7AC74C',
        'gras-colorful': '#00e887',
        ice: '#96D9D6',
        fighting: '#C22E28',
        'fighting-colorful': '#C70039',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        'psychic-colorful': '#e5368b',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
      }
    }
  },
  plugins: []
};
