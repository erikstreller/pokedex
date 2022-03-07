const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        all: '#000000',
        // all: '#0F172A',
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        'water-colorful': '#3498DB',
        electric: '#F7D02C',
        grass: '#7AC74C',
        'grass-colorful': '#00e887',
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
        fairy: '#D685AD',
        'dark-theme': '#111111',
        light: '#fefefe',
        link: '#58a6ff',
        divider: '#4b5563'
      },
      width: {
        'overlay-image': 'clamp(250px, 40vw, 500px)'
      }
    }
  },
  plugins: []
}
