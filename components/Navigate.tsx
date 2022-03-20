import Link from 'next/link'

type NavigateProps = {
  id: number
}

export function Navigate({ id }: NavigateProps) {
  const Prev = ({ id }: NavigateProps) => {
    return (
      <Link href={`${id - 1}`}>
        <a className='detail-page-btn right-1/2 mr-4'>&larr; {id - 1}</a>
      </Link>
    )
  }

  const Next = ({ id }: NavigateProps) => {
    return (
      <Link href={`${id + 1}`}>
        <a className='detail-page-btn left-1/2 ml-4'>{id + 1} &rarr;</a>
      </Link>
    )
  }

  if (id <= 1) {
    return <Next id={id} />
  }

  if (id >= 150) {
    return <Prev id={id} />
  }

  return (
    <>
      <Prev id={id} />
      <Next id={id} />
    </>
  )
}
