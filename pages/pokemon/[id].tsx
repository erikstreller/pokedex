import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GetStaticPaths } from 'next/types'
import { useContext, useState } from 'react'
import background from '../../assets/landing-branden-skeli.jpg'
import Accent from '../../components/Accent'
import BackButton from '../../components/buttons/BackButton'
import StatsButton from '../../components/buttons/StatsButton'
import Description from '../../components/Description'
import EntryNumber from '../../components/EntryNumber'
import Fought from '../../components/glitch/Fought'
import Teleported from '../../components/glitch/Teleported'
import TrainerBattle from '../../components/glitch/TrainerBattle'
import Label from '../../components/labels/Label'
import { Navigate } from '../../components/Navigate'
import Seo from '../../components/Seo'
import { StatCircle } from '../../components/StatCircle'
import Tooltip from '../../components/Tooltip'
import GlitchContext from '../../context/GlitchContext'
import useLoaded from '../../hooks/useLoaded'
import capitalize from '../../lib/capitalize'
import gradientType from '../../lib/gradientType'
import {
  twFromTypeColors,
  twToTypeColors
} from '../../lib/twGradientTypeColors'
import { getAllPokemonIds } from '../pokemon'

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
  const {
    clickTeleport,
    catchAbra,
    setCatchAbra,
    teleportOut24,
    teleportOut25,
    fight24,
    fight25,
    showMew
  } = useContext(GlitchContext)

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

  const handleCatchAbra = () => {
    setCatchAbra(true)
  }

  const hidden = () => {
    return !showMew && id === 151 ? 'hidden' : ''
  }

  return (
    <>
      <Seo title={capitalize(name)} />
      <main className='h-screen w-full overflow-hidden bg-black'>
        <Image
          priority
          className='opacity-20'
          src={background}
          alt='Pokédex'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <BackButton text='library' link='/pokemon' />
        <EntryNumber id={id} />
        {isLoaded && <Navigate id={id} />}
        {clickTeleport && id === 112 && !showMew && (
          <div
            className='fixed bottom-0 right-4 z-10'
            onClick={handleCatchAbra}
          >
            <Image
              src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png'
              alt='Abra'
              width={100}
              height={100}
              className='cursor-pointer'
            />
            {catchAbra && id === 112 && (
              <div className='fixed bottom-10 z-10 -rotate-45 pr-2 font-bold text-light'>
                <Accent gradient='from-fighting-colorful to-fighting-colorful'>
                  Abra catched
                </Accent>
              </div>
            )}
          </div>
        )}
        {catchAbra && (id === 24 || id === 25) && !showMew && (
          <div className='fixed bottom-4 right-4 z-20 pr-2 text-light'>
            {!fight24 && !teleportOut24 && id === 24 && (
              <TrainerBattle id={id} />
            )}
            {!fight25 && !teleportOut25 && id === 25 && (
              <TrainerBattle id={id} />
            )}
            {fight24 && id === 24 && <Fought id={id} />}
            {fight25 && id === 25 && <Fought id={id} />}
            {teleportOut24 && id === 24 && <Teleported />}
            {teleportOut25 && id === 25 && <Teleported />}
          </div>
        )}
        {!showMew && id === 151 && (
          <div
            className={clsx(
              'id-layout items-center',
              isLoaded && 'fade-in-start'
            )}
          >
            <p className='pl-[50px] text-2xl' data-fade='1'>
              Mew can only be catched through a glitch.
            </p>
          </div>
        )}
        <div
          className={clsx('id-layout', isLoaded && 'fade-in-start', hidden())}
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
            <Description text={modifiedDescription} id={id} />
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
          <div
            className={clsx(
              'flex w-1/2 flex-col items-end',
              !showStats ? 'justify-end pb-14' : 'justify-center'
            )}
          >
            {clickTeleport && id === 63 && !showMew && (
              <motion.div layout className='absolute z-10'>
                <Tooltip content={abraText}>
                  <Accent gradient='from-electric to-fire font-semibold'>
                    Abra
                  </Accent>
                </Tooltip>{' '}
                used Teleport!
              </motion.div>
            )}
            <div data-fade='5'>
              <motion.div layout className='-mt-10 flex'>
                <Image
                  src={image}
                  width={500}
                  height={500}
                  alt={name}
                  className={clsx(
                    'transition duration-[400ms]',
                    !showStats ? 'scale-100' : 'scale-[0.65]',
                    clickTeleport && id === 63 ? 'invert' : ''
                  )}
                />
              </motion.div>
            </div>
            {showStats && (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className='-mt-10 flex w-[500px] justify-center'>
                  <div className='grid grid-cols-3 gap-8 transition'>
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
              </motion.div>
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

const abraText = <>Look at the first Pokémon ever drawn.</>
