import clsx from 'clsx'
import Image from 'next/image'
import { GetStaticPaths } from 'next/types'
import background from '../../assets/landing.jpg'
import BackLibrary from '../../components/BackLibrary'
import Capitalize from '../../components/functions/Capitalize'
import {
  twFromTypeColors,
  twToTypeColors
} from '../../components/functions/twGradientTypeColors'
import Label from '../../components/Label'
import Navigate from '../../components/Navigate'
import Seo from '../../components/Seo'
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

  function gradientType(types, type) {
    if (type === undefined) {
      return types[0]
    } else {
      return type
    }
  }

  return (
    <>
      <Seo title={Capitalize(name)} />
      <main className='relative h-screen w-full bg-black'>
        <Image
          priority
          className='opacity-20'
          src={background}
          alt='Pokédex'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className='relative z-10 mx-auto flex h-full w-[90%] max-w-[1100px] flex-col items-start justify-center text-white'>
          <p className='text-5xl font-bold'>{Capitalize(name)}</p>
          <div className='my-4 flex flex-wrap gap-3'>
            {types.map((type, index) => (
              <Label key={index} type={type} />
            ))}
          </div>
          <div className='mt-4 mb-10 max-w-[534px] text-2xl'>
            {modifiedDescription}
          </div>
          <div className='absolute -right-[5%] bottom-[5%]'>
            <Image src={image} width={500} height={500} alt={name} />
          </div>
          <Navigate id={id} />
          <BackLibrary />
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
        ></div>
        <div
          className='absolute bottom-0 h-screen w-full bg-slate-900'
          style={{ clipPath: 'polygon(62% 0, 100% 0%, 100% 100%, 42% 100%)' }}
        ></div>
        {/* {stats.map((stat, index) => (
            <p key={index}>
              {stat.name}: <span>{stat.value}</span>
            </p>
          ))} */}
      </main>
    </>
  )
}
