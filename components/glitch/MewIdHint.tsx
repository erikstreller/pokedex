import Accent from '../Accent'
import Tooltip from '../Tooltip'

export default function MewIdHint() {
  return (
    <Tooltip content={mewText}>
      <Accent gradient='from-psychic to-flying font-semibold'>glitch</Accent>
    </Tooltip>
  )
}

const mewText = (
  <>
    The technique involves an{' '}
    <Accent gradient='from-psychic to-flying font-semibold'>Abra</Accent> with{' '}
    <Accent gradient='from-electric to-fire font-semibold'>TELEPORT</Accent> and
    there must be two special trainers on{' '}
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
