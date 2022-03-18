import clsx from 'clsx'
import capitalize from '../../lib/capitalize'
import twBorderTypeColors from '../../lib/twBorderTypeColors'

export type BasicLabelProps = {
  type: string
  border?: boolean
} & React.ComponentPropsWithoutRef<'div'>

export default function BasicLabel({
  type,
  border = false,
  className = '',
  ...rest
}: BasicLabelProps) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center rounded-md border-2 py-1 px-3 align-middle text-sm transition-all duration-200 ease-in-out',
        border ? twBorderTypeColors(type) : ''
      )}
      {...rest}
    >
      {capitalize(type)}
    </div>
  )
}
