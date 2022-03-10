import clsx from 'clsx'
import { Dispatch, SetStateAction, useRef } from 'react'

export type SearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>
  setActiveStyle: Dispatch<SetStateAction<string>>
  showOutline: boolean
  setShowOutline: Dispatch<SetStateAction<boolean>>
}

export default function Search({
  setSearchValue,
  setActiveStyle,
  showOutline,
  setShowOutline
}: SearchProps) {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.value = ''
    setShowOutline(true)
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)

    if (e.target.value === '') {
      setActiveStyle('all')
    } else {
      setActiveStyle('')
    }
  }

  return (
    <div
      className={clsx(
        'relative flex items-center justify-center rounded-lg bg-gradient-to-r p-[2px] text-left',
        'hover:from-water-colorful hover:to-ice',
        showOutline ? 'from-water-colorful to-ice' : 'from-zinc-800 to-zinc-800'
      )}
    >
      <input
        aria-label='Search Pokémon...'
        type='text'
        maxLength={20}
        ref={inputRef}
        placeholder='Search Pokémon...'
        onChange={handleChange}
        onFocus={handleFocus}
        className={clsx(
          'w-full rounded-md bg-slate-800 px-3 py-1',
          'focus:outline-none'
        )}
      />
    </div>
  )
}
