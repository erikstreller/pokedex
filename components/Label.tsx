import clsx from 'clsx'
import Capitalize from './functions/Capitalize'
import twTypeColors from './functions/twTypeColors'

export type LabelProps = {
  type: string
}

export default function Label({ type }: LabelProps) {
  return (
    <div
      className={clsx(
        'flex justify-center rounded-full border-2 py-2 px-3 align-middle text-sm transition-all duration-200 ease-in-out',
        twTypeColors(type)
      )}
    >
      {Capitalize(type)}
    </div>
  )
}
