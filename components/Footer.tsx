import { useRouter } from 'next/router'
import Accent from './Accent'
import Divider from './Divider'
import Tooltip from './Tooltip'

export default function Footer() {
  const router = useRouter()

  const handleClear = () => {
    localStorage.clear()
    router.reload()
  }

  return (
    <footer className='layout'>
      <Divider />
      <div className='flex justify-between py-3'>
        <span>
          Erik Streller 2022 •{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/erikstreller/pokedex'
            className='cursor-pointer text-link hover:underline hover:underline-offset-2'
          >
            Source Code
          </a>
        </span>
        <span
          className='cursor-pointer hover:underline hover:underline-offset-2'
          onClick={handleClear}
        >
          <Tooltip
            content={<>Click to start a new game and catch Mew again.</>}
          >
            <Accent gradient='from-psychic to-flying font-semibold'>
              Clear
            </Accent>
          </Tooltip>
        </span>
      </div>
    </footer>
  )
}
