import Accent from '../Accent'
import Tooltip from '../Tooltip'

export default function Fought({ id }: { id: number }) {
  return (
    <p>
      You{' '}
      <Tooltip
        content={
          <>
            You can reset your progress and start a new game by clicking the{' '}
            <Accent gradient='from-psychic to-flying font-semibold'>
              clear
            </Accent>{' '}
            button at the bottom of the library page.
          </>
        }
      >
        <Accent gradient='from-psychic to-flying font-semibold'>fought</Accent>
      </Tooltip>{' '}
      the trainer on route {id}.
    </p>
  )
}
