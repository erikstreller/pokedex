import Image from 'next/image'
import { GetStaticPaths } from 'next/types'
import background from '../../assets/landing.jpg'
import Capitalize from '../../components/functions/Capitalize'
import Label from '../../components/Label'
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

  const description = flavor_text_entries[0].flavor_text

  return {
    props: {
      name: pokemon.name,
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
  image,
  types,
  stats,
  description
}) {
  const modifiedDescription = description
    .replace('\f', ' ')
    .replace('POKéMON', 'Pokémon')

  return (
    <>
      <Seo />
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
          <p className='text-5xl font-bold '>{Capitalize(name)}</p>
          <div className='my-4 flex flex-wrap gap-3'>
            {types.map((type, index) => (
              <Label key={index} type={type} />
            ))}
          </div>
          <div className='mt-6 max-w-xl text-2xl'>{modifiedDescription}</div>
          <div className='absolute -right-[5%] bottom-[5%]'>
            <Image src={image} width={500} height={500} alt={name} />
          </div>
        </div>
        <div
          className='absolute bottom-0 h-screen w-full bg-pink-700'
          style={{
            clipPath: 'polygon(59.8% 0, 100% 0%, 100% 100%, 39.8% 100%)'
          }}
        ></div>
        <div
          className='absolute bottom-0 h-screen w-full bg-slate-900'
          style={{ clipPath: 'polygon(60% 0, 100% 0%, 100% 100%, 40% 100%)' }}
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
