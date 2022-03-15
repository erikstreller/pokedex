import clsx from 'clsx'
import Capitalize from '../functions/Capitalize'
import UnstyledBlurButton from './UnstyledBlurButton'

type StatsButtonProps = {
  text: string
} & React.ComponentPropsWithoutRef<'button'>

export default function StatsButton({
  text,
  className = '',
  ...rest
}: StatsButtonProps) {
  return (
    <UnstyledBlurButton className={className}>
      <button
        className={clsx(
          'inline-flex scale-100 rounded-lg border',
          'border-gray-600 bg-dark-theme px-4 py-2 text-xl shadow-sm',
          'transition duration-100 hover:scale-[1.03] active:scale-[0.97]'
        )}
        {...rest}
      >
        {Capitalize(text)}
      </button>
    </UnstyledBlurButton>
  )
}
