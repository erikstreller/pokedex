import clsx from 'clsx'
import twTypeColors from './functions/twTypeColors'

export type LabelProps = {
  type: string
}

export default function Label({ type }: LabelProps) {
  const capitalize = (string: string) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (
    <div
      className={clsx(
        'flex justify-center rounded-full border-2 py-2 px-3 align-middle text-sm transition-all duration-200 ease-in-out',
        twTypeColors(type)
      )}
    >
      {capitalize(type)}
    </div>
  )
}
