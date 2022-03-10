import { Dispatch, SetStateAction, useRef } from 'react'

export type SearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>
  setActiveStyle: Dispatch<SetStateAction<string>>
}

export default function Search({
  setSearchValue,
  setActiveStyle
}: SearchProps) {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.value = ''
    setActiveStyle('')
  }

  return (
    <input
      ref={inputRef}
      placeholder='Search...'
      onChange={(e) => setSearchValue(e.target.value)}
      onFocus={handleFocus}
      className='rounded bg-slate-700 pl-2 pr-36'
    />
  )
}
