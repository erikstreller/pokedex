import clsx from 'clsx'
import { ReactNode } from 'react'

type StatsContainerProps = {
  children: ReactNode
  className: string
}

export default function StatsContainer({
  children,
  className = ''
}: StatsContainerProps) {
  return (
    <div
      className={clsx(
        'absolute right-0 flex h-[380px] w-[380px] items-center rounded-lg bg-gradient-to-b p-[3px]',
        className
      )}
      style={{
        clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
      }}
    >
      <div
        className='flex h-full w-full items-center rounded-[5px] bg-slate-900'
        style={{
          clipPath:
            'polygon(9.8% 0, 100% 0, 100% 90.2%, 90.2% 100%, 0 100%, 0 9.8%)'
        }}
      >
        <div className='pl-8'>{children}</div>
      </div>
    </div>
  )
}
