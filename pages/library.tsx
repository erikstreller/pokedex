import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import Accent from '../components/Accent'
import Card from '../components/Card'
import typeColors from '../components/constants/colors'
import Footer from '../components/Footer'
import Label from '../components/Label'
import Search from '../components/Search'
import Seo from '../components/Seo'

export default function Library({ pokemons }) {
  const [filteredType, setfilteredType] = useState([...pokemons])
  const [activeType, setActiveType] = useState('all')
  const [searchValue, setSearchValue] = useState(' ')
  const [activeStyle, setActiveStyle] = useState(' ')

  useEffect(() => {
    if (activeType === 'all') {
      setfilteredType(pokemons)
      return
    }

    const filtered = pokemons.filter((pokemon) =>
      pokemon.types.includes(activeType)
    )

    setSearchValue(' ')
    setfilteredType(filtered)
  }, [activeType])

  const filteredName = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchValue.toLowerCase())
  )

  return (
    <div className='bg-dark-theme'>
      <Seo title='Library' />
      <main className='min-h-screen w-full bg-dark-theme'>
        <div className='layout'>
          <div className='pt-10 pb-4 text-4xl font-bold underline decoration-dotted underline-offset-2'>
            Pokédex
          </div>
          <div className='text-2xl font-semibold text-zinc-400'>
            In the original games there where{' '}
            <Accent gradient='from-psychic to-flying'>151 </Accent>
            Pokémon.
            {/* Mew: see notes under mew.md */}
          </div>
          <div className='mt-6 flex flex-wrap items-center gap-2 pb-2 pt-4 text-lg'>
            Show
            <Label
              className='bg-slate-500'
              type='all'
              setActiveType={setActiveType}
              filter
              activeStyle={activeStyle}
              setActiveStyle={setActiveStyle}
            />
            or
            <Search
              setSearchValue={setSearchValue}
              setActiveStyle={setActiveStyle}
            />
            by name.
          </div>
          <div className='my-4 flex flex-wrap items-center gap-3 pb-5 text-lg'>
            Filter by type:
            {typeColors.map((type, index) => (
              <Label
                key={index}
                type={type}
                setActiveType={setActiveType}
                activeStyle={activeStyle}
                setActiveStyle={setActiveStyle}
                filter
              />
            ))}
          </div>
          <motion.div layout className='mb-10 flex flex-wrap gap-6'>
            <AnimatePresence>
              {!filteredName.length &&
                filteredType.map((pokemon) => (
                  <Card
                    key={pokemon.id}
                    image={pokemon.image}
                    name={pokemon.name}
                    id={pokemon.id}
                    types={pokemon.types}
                  />
                ))}
              {filteredName.length &&
                filteredName.map((pokemon) => (
                  <Card
                    key={pokemon.id}
                    image={pokemon.image}
                    name={pokemon.name}
                    id={pokemon.id}
                    types={pokemon.types}
                  />
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
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
      id: pokemon.id,
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
