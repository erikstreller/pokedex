import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import background from '../assets/landing.jpg'
import Accent from '../components/Accent'
import Seo from '../components/Seo'

export default function Home() {
  const [loading, setLoading] = useState(false)

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
          <div className='mb-8 text-7xl font-bold'>Pokédex</div>
          <p className='mb-16 max-w-2xl text-3xl'>
            Did you know that the first Pokémon ever designed was{' '}
            <Link href='/'>
              <a className='decoration-grass-colorful hover:underline hover:underline-offset-2'>
                <Accent gradient='from-grass-colorful to-water-colorful '>
                  Rhydon
                </Accent>
              </a>
            </Link>
            ?
          </p>
          <div className='mt-8 flex'>
            <div className='group relative'>
              <div
                className={clsx(
                  'absolute -inset-1 rounded-lg',
                  'bg-gradient-to-r from-fighting-colorful to-water-colorful opacity-75 blur',
                  'transition duration-700 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <Link href='/library'>
                <a
                  className={clsx(
                    'inline-flex scale-100 rounded-lg border',
                    'border-gray-600 bg-black px-4 py-2 text-xl shadow-sm',
                    'transition duration-100 hover:scale-[1.03] active:scale-[0.97]'
                  )}
                  onClick={(e) => setLoading(true)}
                >
                  {!loading && 'Explore'}
                  {loading && 'Loading...'}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
