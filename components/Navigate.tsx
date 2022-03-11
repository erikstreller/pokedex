import clsx from 'clsx'
import Link from 'next/link'

type StyleProps = {
  id: number
  text: string
  className?: string
  before?: boolean
}

function Style({ id, text, className = '', before }: StyleProps) {
  return (
    <Link href={`${id}`}>
      <a
        className={clsx(
          'fixed top-6 rounded-md border-2 border-zinc-800 bg-dark-theme py-1 px-3',
          'flex justify-center align-middle text-light',
          'transition duration-100 hover:scale-[1.03] hover:border-all focus:border-all active:scale-[0.97]',
          className
        )}
      >
        {before && text}
        {id}
        {!before && text}
      </a>
    </Link>
  )
}

function Next({ id }) {
  return <Style id={id + 1} text=' &rarr;' className='left-1/2 ml-4' />
}

function Prev({ id }) {
  return <Style id={id - 1} text='&larr; ' className='right-1/2 mr-4' before />
}

export default function Navigate({ id }) {
  const noNext = id === 150 ? true : false
  const noPrev = id === 1 ? true : false

  if (noNext) {
    return <Prev id={id} />
  }

  if (noPrev) {
    return <Next id={id} />
  }

  return (
    <>
      <Next id={id} />
      <Prev id={id} />
    </>
  )
}
