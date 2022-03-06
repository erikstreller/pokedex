import Link from 'next/link'
import { useState } from 'react'

export default function BackLibrary() {
  const [loading, setLoading] = useState(false)

  return (
    <Link href={'/library'}>
      <a className='fixed left-4 top-4 flex rounded-md bg-slate-700 align-middle'>
        <div className='py-1 px-3' onClick={(e) => setLoading(true)}>
          {!loading && 'Library'}
          {loading && 'Loading...'}
        </div>
      </a>
    </Link>
  )
}
