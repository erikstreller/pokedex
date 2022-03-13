import clsx from 'clsx'
import Link from 'next/link'
import useLoaded from '../hooks/useLoaded'
import Capitalize from './functions/Capitalize'
import gradientType from './functions/gradientType'
import {
  twFromTypeColors,
  twToTypeColors
} from './functions/twGradientTypeColors'

type BlurButtonProps = {
  text: string
  types: string[]
  link: string
}

export default function BlurButton({ text, types, link }: BlurButtonProps) {
  const isLoaded = useLoaded()

  return (
    <div className={clsx('flex', isLoaded && 'fade-in-start')}>
      <div className='group relative' data-fade='4'>
        <div
          className={clsx(
            'absolute -inset-1 rounded-lg',
            'bg-gradient-to-r opacity-75 blur',
            'transition duration-700 group-hover:opacity-100 group-hover:duration-200',
            twFromTypeColors(gradientType(types, types[0])),
            twToTypeColors(gradientType(types, types[1]))
          )}
        />
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
      </div>
    </div>
  )
}
