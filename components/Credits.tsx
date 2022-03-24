import Accent from './Accent'
import Tooltip from './Tooltip'

export default function Credits() {
  return (
    <span>
      <Tooltip
        content={
          <>
            Background Image - Branden Skeli
            <br />
            Rhydon Drawing - Ken Sugimori
          </>
        }
      >
        <Accent gradient='from-electric to-fire font-semibold'>Credits</Accent>
      </Tooltip>
    </span>
  )
}
