import clsx from 'clsx'
import Link from 'next/link'
import Capitalize from '../functions/Capitalize'

type BackButtonProps = {
  text: string
  link: string
}

export default function BackButton({ text, link }: BackButtonProps) {
  return (
    <Link href={link}>
      <a
        className={clsx(
          'fixed left-4 top-5 rounded-md border-2 border-zinc-800 bg-dark-theme py-1 px-3',
          'flex justify-center align-middle text-light',
          'transition duration-100 hover:scale-[1.03] hover:border-all focus:border-all active:scale-[0.97]'
        )}
      >
        {Capitalize(text)}
      </a>
    </Link>
  )
}
