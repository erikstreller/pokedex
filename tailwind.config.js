const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      screens: {
        xl: { max: '1280px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' }
      },
      colors: {
        all: '#0349a8',
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
        'dark-theme': '#050606',
        light: '#fefefe',
        link: '#58a6ff',
        divider: '#4b5563',
        'psychic-flying-blend': '#D56FB8',
        'electric-fire-blend': '#F3AC2E'
      },
      width: {
        'overlay-image': 'clamp(250px, 40vw, 500px)'
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 0.5px #D56FB8) drop-shadow(0 0 0.5px #D685AD)'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none'
          }
        }
      },
      animation: {
        flicker: 'flicker 3s linear infinite'
      }
    }
  },
  plugins: []
}
