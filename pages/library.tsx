import { GetStaticProps } from 'next'
import Card from '../components/Card'
import typeColors from '../components/constants/colors'
import Label from '../components/Label'
import Seo from '../components/Seo'

export default function Library({ pokemons }) {
  return (
    <>
      <Seo title='Library' />
      <main className='min-h-screen w-full bg-black'>
        <div className='z-10 mx-auto w-[90%] max-w-[1100px] text-white'>
          <div className='text-4xl font-bold'>Pokémon Data</div>
          <div className='my-4 flex flex-wrap gap-3'>
            {typeColors.map((type, index) => (
              <Label key={index} type={type} />
            ))}
          </div>
          <div className='flex flex-wrap gap-6'>
            {pokemons.map((pokemon, index) => (
              <Card key={index} image={pokemon.image} name={pokemon.name} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let i = 1
  const pokemons = []

  while (i <= 151) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const pokemon = await res.json()

    const paddedIndex = ('00' + i).slice(-3)

    const allTypes = pokemon.types.map((type) => {
      return type.type.name
    })

    const allStats = pokemon.stats.map((stats) => {
      return { name: stats.stat.name, value: stats.base_stat }
    })

    pokemons.push({
      name: pokemon.name,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`,
      types: allTypes,
      stats: allStats
    })

    i += 1
  }

  return {
    props: {
      pokemons
    }
  }
}
