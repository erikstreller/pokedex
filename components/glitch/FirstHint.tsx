import clsx from 'clsx'
import { useContext, useState } from 'react'
import GlitchContext from '../../context/GlitchContext'
import Accent from '../Accent'
import Tooltip from '../Tooltip'

export default function FirstHint() {
  const { readTooltip, setReadTooltip, showMew } = useContext(GlitchContext)
  const [animation, setAnimation] = useState<boolean>(false)

  const handleHover = () => {
    setReadTooltip(true)
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 3000)
  }

  const handleClick = () => {
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 3000)
  }

  return (
    <>
      In the original ga
      <Accent
        gradient={clsx(
          readTooltip && !showMew
            ? 'from-psychic to-flying'
            : 'from-zinc-400 to-zinc-400',
          animation ? 'animate-flicker' : ''
        )}
      >
        m
      </Accent>
      es th
      <Accent
        gradient={clsx(
          readTooltip && !showMew
            ? 'from-psychic to-flying'
            : 'from-zinc-400 to-zinc-400',
          animation ? 'animate-flicker' : ''
        )}
      >
        e
      </Accent>
      re{' '}
      <Accent
        gradient={clsx(
          readTooltip && !showMew
            ? 'from-psychic to-flying'
            : 'from-zinc-400 to-zinc-400',
          animation ? 'animate-flicker' : ''
        )}
      >
        w
      </Accent>
      here{' '}
      <Tooltip content={mewText}>
        <span
          onMouseOver={handleHover}
          onClick={handleClick}
          className={clsx(
            'cursor-pointer decoration-psychic-flying-blend hover:underline hover:underline-offset-2'
          )}
        >
          <Accent gradient='from-psychic to-flying font-semibold'>151</Accent>
        </span>
      </Tooltip>{' '}
      Pokémon.
    </>
  )
}

const mewText = (
  <>
    In the first versions{' '}
    <Accent gradient='from-psychic to-flying font-semibold'>Mew</Accent> could
    only be catched through a glitch. The technique involves an Abra with{' '}
    <Accent gradient='from-water-colorful to-ice font-semibold'>
      TELEPORT
    </Accent>{' '}
    and there must be two special trainers on{' '}
    <Accent gradient='from-grass-colorful to-water-colorful font-semibold'>
      route 24
    </Accent>{' '}
    and{' '}
    <Accent gradient='from-grass-colorful to-water-colorful font-semibold'>
      25
    </Accent>{' '}
    available for a fight.
  </>
)
