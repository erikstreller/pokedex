import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Accent from '../components/Accent'
import Card from '../components/Card'
import typeColors from '../components/constants/colors'
import Label from '../components/Label'
import Seo from '../components/Seo'

export default function Library({ pokemons }) {
  const [filteredType, setfilteredType] = useState([])
  const [activeType, setActiveType] = useState('All')

  useEffect(() => {
    if (activeType === 'All') {
      setfilteredType(pokemons)
      return
    }

    const filtered = pokemons.filter((pokemon) =>
      pokemon.types.includes(activeType)
    )

    setfilteredType(filtered)
  }, [activeType])

  return (
    <>
      <Seo title='Library' />
      <main className='min-h-screen w-full bg-black'>
        <div className='z-10 mx-auto w-[90%] max-w-[1100px] text-white'>
          <div className='pt-10 pb-4 text-4xl font-bold'>
            In the original games there where{' '}
            <Accent gradient='from-psychic'>151 </Accent>
            Pokémon.
            {/* Mew: see notes under mew.md */}
          </div>
          <div className='my-4 flex flex-wrap gap-3 pb-5'>
            <Label type='All' setActiveType={setActiveType} filter />
            {typeColors.map((type, index) => (
              <Label
                key={index}
                type={type}
                setActiveType={setActiveType}
                filter
              />
            ))}
          </div>
          <div className='flex flex-wrap gap-6'>
            {filteredType.map((pokemon, index) => (
              <Card
                key={index}
                image={pokemon.image}
                name={pokemon.name}
                id={index + 1}
              />
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

export function getAllPokemonIds() {
  const pokemon = Array.from({ length: 151 }, (value, index) =>
    (index + 1).toString()
  )

  return pokemon.map((index) => {
    return {
      params: {
        id: index
      }
    }
  })
}
