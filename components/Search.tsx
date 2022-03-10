import { Dispatch, SetStateAction } from 'react'

export type SearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function Search({ setSearchValue }: SearchProps) {
  return (
    <input
      placeholder='Search...'
      onChange={(e) => setSearchValue(e.target.value)}
      className='rounded bg-slate-700 pl-2 pr-36'
    />
  )
}
