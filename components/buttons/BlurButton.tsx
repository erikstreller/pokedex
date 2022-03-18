import clsx from 'clsx'
import Link from 'next/link'
import capitalize from '../../lib/capitalize'
import UnstyledBlurButton from './UnstyledBlurButton'

type BlurButtonProps = {
  text: string
  link: string
} & React.ComponentPropsWithoutRef<'a'>

export default function BlurButton({
  text,
  link,
  className = ''
}: BlurButtonProps) {
  return (
    <UnstyledBlurButton className={className}>
      <Link href={link}>
        <a
          className={clsx(
            'inline-flex scale-100 rounded-lg border',
            'border-gray-600 bg-dark-theme px-4 py-2 text-xl shadow-sm',
            'transition duration-100 hover:scale-[1.03] active:scale-[0.97]'
          )}
        >
          {capitalize(text)}
        </a>
      </Link>
    </UnstyledBlurButton>
  )
}
