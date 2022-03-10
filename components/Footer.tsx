import Divider from './Divider'

export default function Footer() {
  return (
    <footer className='layout'>
      <Divider />
      <p className='py-3'>
        Erik Streller 2022 •{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/erikstreller/pokedex'
          className='cursor-pointer text-link hover:underline hover:underline-offset-2'
        >
          Source Code
        </a>
      </p>
    </footer>
  )
}
