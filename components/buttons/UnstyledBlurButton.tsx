import clsx from 'clsx'
import { ReactNode } from 'react'
import useLoaded from '../../hooks/useLoaded'
import gradientType from '../functions/gradientType'
import {
  twFromTypeColors,
  twToTypeColors
} from '../functions/twGradientTypeColors'

type UnstyledBlurButtonProps = {
  types: string[]
  children: ReactNode
} & React.ComponentPropsWithoutRef<'div'>

export default function UnstyledBlurButton({
  types,
  className = '',
  children
}: UnstyledBlurButtonProps) {
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
            twToTypeColors(gradientType(types, types[1])),
            className
          )}
        />
        {children}
      </div>
    </div>
  )
}
