import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { useContext, useEffect, useState } from 'react'
import BackButton from '../components/buttons/BackButton'
import Card from '../components/Card'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Label from '../components/labels/Label'
import Search from '../components/Search'
import Seo from '../components/Seo'
import GlitchContext from '../context/GlitchContext'
import { PreloadProvider } from '../context/PreloadContext'
import useLoaded from '../hooks/useLoaded'
import typeColors from '../lib/colors'

export default function Pokemon({ pokemons }) {
  const { showMew } = useContext(GlitchContext)

  const [filteredType, setfilteredType] = useState([...pokemons])
  const [activeType, setActiveType] = useState('all')
  const [activeStyle, setActiveStyle] = useState('all')

  const [searchValue, setSearchValue] = useState(' ')
  const [searchError, setSearchError] = useState(false)
  const [showOutline, setShowOutline] = useState(false)

  useEffect(() => {
    setSearchValue(' ')
    setShowOutline(false)

    if (!showMew) {
      pokemons = pokemons.slice(0, 150)
    }

    if (activeType === 'all') {
      setfilteredType(pokemons)
      return
    }

    const filtered = pokemons.filter((pokemon) =>
      pokemon.types.includes(activeType)
    )

    setfilteredType(filtered)
  }, [activeType, showMew])

  const filteredName = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchValue.toLowerCase())
  )

  useEffect(() => {
    if (searchValue !== '' && searchValue !== ' ' && !filteredName.length) {
      setSearchError(true)
    } else {
      setSearchError(false)
    }
  }, [searchValue])

  const isLoaded = useLoaded()

  return (
    <div className='bg-dark-theme'>
      <Seo title='Pokemon' />
      <BackButton text='Start' link='/' />
      <PreloadProvider>
        <main className='min-h-screen w-full bg-dark-theme'>
          <div className={clsx('layout', isLoaded && 'fade-in-start')}>
            <div
              className='pt-10 pb-4 text-4xl font-bold underline decoration-dotted underline-offset-2'
              data-fade='1'
            >
              Pokédex
            </div>
            <div className='text-2xl font-semibold text-zinc-400' data-fade='2'>
              <Introduction />
            </div>
            <div
              className='mt-6 flex flex-wrap items-center gap-2 pb-2 pt-4 text-lg'
              data-fade='3'
            >
              <Search
                setSearchValue={setSearchValue}
                setActiveStyle={setActiveStyle}
                showOutline={showOutline}
                setShowOutline={setShowOutline}
              />
            </div>
            <div
              className='mt-4 mb-[39px] flex flex-wrap items-center gap-3 text-lg'
              data-fade='4'
            >
              <Label
                filter
                type='all'
                setActiveType={setActiveType}
                activeStyle={activeStyle}
                setActiveStyle={setActiveStyle}
              />
              <span className='pb-[2px] text-zinc-400'>or filter by type</span>
              {typeColors.map((type, index) => (
                <Label
                  filter
                  key={index}
                  type={type}
                  setActiveType={setActiveType}
                  activeStyle={activeStyle}
                  setActiveStyle={setActiveStyle}
                />
              ))}
            </div>
            <Divider />
            {searchError && (
              <p className='pt-3 text-lg text-zinc-400'>No Pokémon found.</p>
            )}
            <div data-fade='6'>
              <motion.div layout className='my-10 flex flex-wrap gap-6'>
                <AnimatePresence>
                  {!filteredName.length &&
                    !searchError &&
                    filteredType.map((pokemon) => (
                      <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        id={pokemon.id}
                        types={pokemon.types}
                      />
                    ))}
                  {filteredName.length &&
                    filteredName.map((pokemon) => (
                      <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        id={pokemon.id}
                        types={pokemon.types}
                      />
                    ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </main>
      </PreloadProvider>
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
