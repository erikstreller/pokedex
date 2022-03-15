import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import background from '../assets/landing-branden-skeli.jpg'
import concept from '../assets/rhydon-ken-sugimori.jpg'
import Accent from '../components/Accent'
import BlurButton from '../components/buttons/BlurButton'
import Seo from '../components/Seo'
import Tooltip from '../components/Tooltip'
import { PreloadProvider } from '../context/PreloadContext'
import useLoaded from '../hooks/useLoaded'

export default function Home() {
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

  const isLoaded = useLoaded()

  return (
    <>
      <Seo />
      <PreloadProvider>
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
          <div
            className={clsx(
              'z-10 mx-auto w-[90%] max-w-[1100px] text-white',
              isLoaded && 'fade-in-start'
            )}
          >
            <div className='mb-8 text-7xl font-bold' data-fade='1'>
              Pokédex
            </div>
            <p className='mb-8 max-w-2xl text-3xl' data-fade='2'>
              Discover{' '}
              <Tooltip content={typesText}>
                <Accent gradient='from-electric to-fire'>types</Accent>
              </Tooltip>
              ,{' '}
              <Tooltip content={statsText}>
                <Accent gradient='from-psychic to-flying'>stats</Accent>
              </Tooltip>{' '}
              and{' '}
              <Tooltip content={factsText}>
                <Accent gradient='from-water-colorful to-ice'>fun facts</Accent>
              </Tooltip>{' '}
              of your favorite Pokémon.
            </p>
            <div>
              <p className='mb-16 max-w-2xl text-3xl' data-fade='3'>
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
                className={clsx(
                  'left-calc-x top-calc-y absolute w-overlay-image transition duration-700 ease-[cubic-bezier(1,0,0,1,0,0)]',
                  showImage ? 'opacity-100' : '-z-10 opacity-0'
                )}
                style={{
                  left: `calc(${position.x}px + 125px)`,
                  top: `calc(${position.y}px - 175px)`
                }}
              >
                <Image
                  src={concept}
                  layout='responsive'
                  alt='early concept design of Rhydon'
                  className={clsx('rounded-3xl')}
                />
              </div>
            </div>
            <BlurButton
              text='explore'
              className='from-fighting-colorful to-water-colorful'
              link='/library'
            />
          </div>
        </main>
      </PreloadProvider>
    </>
  )
}

const typesText = (
  <>
    17 of the 18{' '}
    <Accent gradient='from-electric to-fire font-bold'>types</Accent> can be
    found in the first 151 Pokémon.
  </>
)

const statsText = (
  <>
    Each Pokémon has 6{' '}
    <Accent gradient='from-psychic to-flying font-bold'>stats</Accent>: hp,
    attack, defense, speed, special-attack and special-defense.
  </>
)

const factsText = (
  <>
    To save memory the original games had only 38 base{' '}
    <Accent gradient='from-water-colorful to-ice font-bold'>cries</Accent>{' '}
    Pokémon could make.
  </>
)
