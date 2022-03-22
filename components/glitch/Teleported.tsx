import Accent from '../Accent'
import Tooltip from '../Tooltip'

export default function Teleported() {
  return (
    <p>
      You{' '}
      <Tooltip content={catchAll}>
        <Accent gradient='from-electric to-fire font-semibold'>
          teleported
        </Accent>
      </Tooltip>{' '}
      away from the battle.
    </p>
  )
}

const catchAll = (
  <>
    Go and catch all{' '}
    <Accent gradient='from-electric to-fire font-semibold'>151</Accent> Pokémon.
  </>
)
