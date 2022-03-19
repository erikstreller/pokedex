import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticPaths } from 'next/types'
import { useState } from 'react'
import background from '../../assets/landing-branden-skeli.jpg'
import BackButton from '../../components/buttons/BackButton'
import StatsButton from '../../components/buttons/StatsButton'
import EntryNumber from '../../components/EntryNumber'
import Label from '../../components/labels/Label'
import Seo from '../../components/Seo'
import { StatCircle } from '../../components/StatCircle'
import useLoaded from '../../hooks/useLoaded'
import capitalize from '../../lib/capitalize'
import gradientType from '../../lib/gradientType'
import {
  twFromTypeColors,
  twToTypeColors
} from '../../lib/twGradientTypeColors'
import { getAllPokemonIds } from '../library'

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const pokemon = await res.json()

  const paddedIndex = ('00' + params.id).slice(-3)

  const types = pokemon.types.map((type) => {
    return type.type.name
  })

  const stats = pokemon.stats.map((stats) => {
    return { name: stats.stat.name, value: stats.base_stat }
  })

  // Fetching description
  const res2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
  )
  const { flavor_text_entries } = await res2.json()

  let description = ''
  flavor_text_entries.map((flavor) => {
    if (flavor.version.name === 'red') {
      description = description.concat(flavor.flavor_text)
    }
  })

  return {
    props: {
      name: pokemon.name,
      id: pokemon.id,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`,
      types,
      stats,
      description
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pathIDs = getAllPokemonIds()
  return {
    paths: pathIDs,
    fallback: false
  }
}

export default function PokemonSide({
  name,
  id,
  image,
  types,
  stats,
  description
}) {
  const modifiedDescription = description
    .replace('\f', ' ')
    .replace('POKéMON', 'Pokémon')
    .replace('POKé', 'Poké')
    .replace('MAGIKARP', 'Magikarp')
    .replace('PIDGEY', 'Pidgey')
    .replace('SPEAROW', 'Spearow')
    .replace('DIGLETT', 'Diglett')
    .replace('TELEPORT', 'Teleport')
    .replace('POISONPOWDER', 'Poisonpowder')
    .replace('ACID', 'Acid')
    .replace('SHELLDER', 'Shellder')
    .replace(`SLOWPOKE's`, `Slowpoke's`)
    .replace('THUNDER', 'Thunder')
    .replace('WAVE', 'Wave')
    .replace('MAGNEMITEs', 'Magnemites')
    .replace('HYPNOSIS', 'Hypnosis')
    .replace('CONFUSION', 'Confusion')
    .replace('BALL', 'Ball')
    .replace('EXEGGCUTE', 'Exeggcute')
    .replace('KOFFINGs', 'Koffings')
    .replace('WEEZING', 'Weezing')
    .replace('STONEs', 'Stones')

  const isLoaded = useLoaded()

  const [showStats, setShowStats] = useState<boolean>(false)
  const [blurColor, setBlurColor] = useState<boolean>(true)

  const handleShowStats = () => {
    showStats ? setShowStats(false) : setShowStats(true)
    blurColor ? setBlurColor(false) : setBlurColor(true)
  }

  return (
    <>
      <Seo title={capitalize(name)} />
      {/* TODO: min h for desktop if stats */}
      <main className='h-screen w-full bg-black'>
        <Image
          priority
          className='opacity-20'
          src={background}
          alt='Pokédex'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <BackButton text='library' link='/library' />
        <EntryNumber id={id} />
        {isLoaded && (
          <>
            <Link href={`${id + 1}`}>
              <a className='detail-page-btn left-1/2 ml-4'>{id + 1} &rarr;</a>
            </Link>
            <Link href={`${id - 1}`}>
              <a className='detail-page-btn right-1/2 mr-4'>&larr; {id - 1}</a>
            </Link>
          </>
        )}
        <div
          className={clsx(
            'relative z-10 mx-auto flex h-full w-[90%] max-w-[1200px] text-white',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='flex h-full w-1/2 flex-col items-start justify-center pl-[50px]'>
            <p className='text-5xl font-bold' data-fade='1'>
              {capitalize(name)}
            </p>
            <div className='my-4 flex flex-wrap gap-3' data-fade='2'>
              {types.map((type, index) => (
                <Label key={index} type={type} />
              ))}
            </div>
            <div className='mt-4 mb-10 max-w-[534px] text-2xl' data-fade='3'>
              {modifiedDescription}
            </div>
            <StatsButton
              text='stats'
              onClick={handleShowStats}
              className={
                blurColor
                  ? clsx(
                      twFromTypeColors(gradientType(types, types[0])),
                      twToTypeColors(gradientType(types, types[1]))
                    )
                  : 'from-slate-700 to-slate-700'
              }
            />
          </div>
          {/* TODO: image animation during scale to new position */}
          <div
            className={clsx(
              'flex w-1/2 flex-col items-end',
              !showStats ? 'justify-end pb-14' : 'justify-center'
            )}
          >
            <div className='flex' data-fade='5'>
              <Image
                src={image}
                width={500}
                height={500}
                alt={name}
                className={clsx(
                  'transition duration-1000',
                  !showStats ? 'scale-100' : 'scale-[0.65]'
                )}
              />
            </div>
            {/* TODO: stats opacity from 0 to 100 animation */}
            {showStats && (
              <div className='-mt-10 flex w-[500px] justify-center'>
                <div className='grid grid-cols-3 gap-8'>
                  {stats.map((stat, index) => (
                    <StatCircle
                      key={index}
                      text={stat.name}
                      number={stat.value}
                      className={clsx(
                        twFromTypeColors(gradientType(types, types[0])),
                        twToTypeColors(gradientType(types, types[1]))
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={clsx(
            'absolute bottom-0 h-screen w-full bg-gradient-to-b',
            twFromTypeColors(gradientType(types, types[0])),
            twToTypeColors(gradientType(types, types[1]))
          )}
          style={{
            clipPath: 'polygon(61.8% 0, 100% 0%, 100% 100%, 41.8% 100%)'
          }}
        />
        <div
          className='absolute bottom-0 h-screen w-full bg-slate-900'
          style={{ clipPath: 'polygon(62% 0, 100% 0%, 100% 100%, 42% 100%)' }}
        />
      </main>
    </>
  )
}
