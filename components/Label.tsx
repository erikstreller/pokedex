import clsx from 'clsx'
import Capitalize from './functions/Capitalize'
import twBorderTypeColors from './functions/twBorderTypeColors'

export type LabelProps = {
  type: string
}

export default function Label({ type }: LabelProps) {
  return (
    <div
      className={clsx(
        'flex justify-center rounded-full border-2 py-1 px-3 align-middle text-sm transition-all duration-200 ease-in-out',
        twBorderTypeColors(type)
      )}
    >
      {Capitalize(type)}
    </div>
  )
}
