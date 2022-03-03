import clsx from 'clsx'
import { ReactNode } from 'react'

export type AccentProps = {
  children: ReactNode
  gradient?: string
}

export default function Accent({ children, gradient }: AccentProps) {
  return (
    <span
      className={clsx(
        'bg-gradient-to-tr bg-clip-text text-transparent',
        gradient
      )}
    >
      {children}
    </span>
  )
}
