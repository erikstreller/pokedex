import clsx from 'clsx'
import Link from 'next/link'
import Capitalize from '../functions/Capitalize'
import UnstyledBlurButton from './UnstyledBlurButton'

type BlurButtonProps = {
  text: string
  types: string[]
  link: string
}

export default function BlurButton({ text, types, link }: BlurButtonProps) {
  return (
    <UnstyledBlurButton types={types}>
      <Link href={link}>
        <a
          className={clsx(
            'inline-flex scale-100 rounded-lg border',
            'border-gray-600 bg-dark-theme px-4 py-2 text-xl shadow-sm',
            'transition duration-100 hover:scale-[1.03] active:scale-[0.97]'
          )}
        >
          {Capitalize(text)}
        </a>
      </Link>
    </UnstyledBlurButton>
  )
}
