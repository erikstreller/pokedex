import clsx from 'clsx'
import capitalize from '../lib/capitalize'

type StatCircleProps = {
  number: string
  text: string
} & React.ComponentPropsWithoutRef<'div'>

export function StatCircle({ number, text, className = '' }: StatCircleProps) {
  return (
    <div className='flex flex-col items-center'>
      <div
        className={clsx(
          'h-14 w-14 rounded-full bg-gradient-to-r p-[3px]',
          className
        )}
      >
        <div className='flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-lg'>
          {number}
        </div>
      </div>
      <p className='pt-2'>{capitalize(text)}</p>
    </div>
  )
}
