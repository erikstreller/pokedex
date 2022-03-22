import Link from 'next/link'
import { useContext } from 'react'
import GlitchContext from '../../context/GlitchContext'
import Accent from '../Accent'

export default function TrainerBattle({ id }: { id: number }) {
  const { setTeleportOut24, setTeleportOut25, setFight24, setFight25 } =
    useContext(GlitchContext)

  const handleFight = () => {
    if (id === 24) {
      setFight24(true)
    }
    if (id === 25) {
      setFight25(true)
    }
  }

  const handleTeleport = () => {
    if (id === 24) {
      setTeleportOut24(true)
    }
    if (id === 25) {
      setTeleportOut25(true)
    }
  }

  return (
    <>
      <p>A trainer approaches.</p>
      <p>
        <span
          className='cursor-pointer decoration-psychic-flying-blend hover:underline hover:underline-offset-2'
          onClick={handleFight}
        >
          <Accent gradient='from-psychic to-flying font-semibold'>Fight</Accent>
        </span>{' '}
        or{' '}
        <Link href='/pokemon'>
          <a
            className='cursor-pointer decoration-electric-fire-blend hover:underline hover:underline-offset-2'
            onClick={handleTeleport}
          >
            <Accent gradient='from-electric to-fire font-semibold'>
              Teleport
            </Accent>{' '}
          </a>
        </Link>
        away?
      </p>
    </>
  )
}
