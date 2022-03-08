import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import background from '../assets/landing-branden-skeli.jpg'
import concept from '../assets/rhydon-ken-sugimori.jpg'
import Accent from '../components/Accent'
import Seo from '../components/Seo'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const [position, setPosition] = useState({
    x: '',
    y: ''
  })

  const handleMouseOver = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
    setShowImage(true)
  }

  const handleMouseLeave = (e) => {
    setShowImage(false)
  }

  return (
    <>
      <Seo />
      <main className='relative flex h-screen min-h-[500px] w-full flex-col items-start justify-center overflow-x-hidden bg-black'>
        <Image
          priority
          className='opacity-20'
          src={background}
          alt='pokemon gaming room'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <div className='z-10 mx-auto w-[90%] max-w-[1100px] text-white'>
          <div className='mb-8 text-7xl font-bold'>Pokédex</div>
          <p className='mb-8 max-w-2xl text-3xl'>
            Discover
            <Accent gradient='from-electric to-fire'> types</Accent>,
            <Accent gradient='from-psychic to-flying'> stats</Accent> and
            <Accent gradient='from-water-colorful to-ice'> fun facts</Accent> of
            your favorite Pokémon.
          </p>
          <p className='mb-16 max-w-2xl text-3xl'>
            Did you know that the first Pokémon ever designed was{' '}
            <Link href='/pokemon/112'>
              <a
                className='decoration-grass-colorful transition duration-1000 ease-in-out hover:underline hover:underline-offset-2'
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <Accent gradient='from-grass-colorful to-water-colorful'>
                  Rhydon
                </Accent>
              </a>
            </Link>
            ?
          </p>
          <div
            className='left-calc-x top-calc-y absolute w-overlay-image'
            style={{
              left: `calc(${position.x}px + 125px)`,
              top: `calc(${position.y}px - 175px)`
            }}
          >
            <Image
              src={concept}
              layout='responsive'
              alt='early concept design of Rhydon'
              className={clsx(
                'rounded-3xl transition duration-700 ease-[cubic-bezier(1,0,0,1,0,0)]',
                showImage ? 'opacity-100' : 'opacity-0'
              )}
            />
          </div>
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
