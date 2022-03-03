import { GetStaticProps } from 'next'

export default function Library({ pokemons }) {
  return (
    <>
      <div className='text-4xl font-bold'>Pokémon Data</div>
      <div>
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <p>{pokemon.name}</p>
            <p>{pokemon.image}</p>
            {/* <p>{pokemon.types}</p>
            <p>{pokemon.stats}</p> */}
          </div>
        ))}
      </div>
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
