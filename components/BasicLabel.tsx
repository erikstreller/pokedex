import clsx from 'clsx'
import Capitalize from './functions/Capitalize'
import twBorderTypeColors from './functions/twBorderTypeColors'

export type BasicLabelProps = {
  type: string
} & React.ComponentPropsWithoutRef<'div'>

export default function BasicLabel({
  type,
  className = '',
  ...rest
}: BasicLabelProps) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center rounded-full border-2 py-1 px-3 align-middle text-sm transition-all duration-200 ease-in-out',
        twBorderTypeColors(type)
      )}
      {...rest}
    >
      {Capitalize(type)}
    </div>
  )
}
