import Link from 'next/link'
import Accent from './Accent'
import Tooltip from './Tooltip'

export default function Introduction() {
  return (
    <>
      <Tooltip content={firstVersions}>
        <Accent gradient='from-grass-colorful to-water-colorful font-semibold'>
          Hover
        </Accent>
      </Tooltip>{' '}
      and{' '}
      <Tooltip content={pikachu}>
        <Accent gradient='from-electric to-fire font-semibold'>explore</Accent>
      </Tooltip>{' '}
      the world of Generation One. Where{' '}
      <Link href='/pokemon/151'>
        <a className='decoration-psychic-flying-blend hover:underline hover:underline-offset-2'>
          <Accent gradient='from-psychic to-flying font-semibold'>Mew</Accent>
        </a>
      </Link>{' '}
      was only a myth.
    </>
  )
}

const firstVersions = (
  <>
    The original versions of Generation I released in Japan were{' '}
    <Accent gradient='from-fire to-fighting font-semibold'>Red</Accent> and{' '}
    <Accent gradient='from-grass-colorful to-water-colorful font-semibold'>
      Green
    </Accent>
    . Version{' '}
    <Accent gradient='from-water-colorful to-ice font-semibold'>Blue</Accent>{' '}
    was later localized in the west, along with many bug fixes and several
    glitch removals.
  </>
)

const pikachu = (
  <>
    <Accent gradient='from-electric to-fire font-semibold'>Pikachu</Accent> was
    very rarely seen in the Virdian Forest, as it was favored by its designers.
  </>
)

// might be useful later
const accuracy = (
  <>There was a 1 in 256 chance to miss any move, even with perfect accuracy.</>
)

const critHit = (
  <>
    The move Focus Energy was supposed to increase the frequency of critical
    hits, but instead lowered the chance. A higher speed value also increased
    critical hits.
  </>
)

const psychicType = (
  <>
    Pokémon of type psychic should be weak against type ghost. A bug made them
    immune instead.
  </>
)
