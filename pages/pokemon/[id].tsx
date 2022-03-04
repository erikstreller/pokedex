import Image from 'next/image'
import { GetStaticPaths } from 'next/types'
import background from '../../assets/landing.jpg'
import Capitalize from '../../components/functions/Capitalize'
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

  console.log(stats)

  return {
    props: {
      name: pokemon.name,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`,
      types,
      stats
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

export default function PokemonSide({ name, image, types, stats }) {
  return (
    <>
      <Seo />
      <main className='flex h-screen w-full flex-col items-start justify-center bg-black'>
        <Image
          priority
          className='opacity-20'
          src={background}
          alt='Pokédex'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className='z-10 mx-auto w-[90%] max-w-[1100px] text-white'>
          <p>{Capitalize(name)}</p>
          <p>{image}</p>
          {types.map((type, index) => (
            <p key={index}>{type}</p>
          ))}
          {stats.map((stat, index) => (
            <p key={index}>
              {stat.name}: <span>{stat.value}</span>
            </p>
          ))}
        </div>
      </main>
    </>
  )
}
