import Link from 'next/link'

function Next({ id }) {
  return (
    <Link href={`${id + 1}`}>
      <a className='fixed left-1/2 top-4 ml-2 flex rounded-md bg-slate-700 align-middle'>
        <div className='py-1 px-3'>{id + 1} &rarr;</div>
      </a>
    </Link>
  )
}

function Prev({ id }) {
  return (
    <Link href={`${id - 1}`}>
      <a className='fixed right-1/2 top-4 mr-2 flex rounded-md bg-slate-700 align-middle'>
        <div className='py-1 px-3'>&larr; {id - 1}</div>
      </a>
    </Link>
  )
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
