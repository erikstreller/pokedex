export default function Footer() {
  return (
    <footer className='layout border-t border-divider border-opacity-50 py-3'>
      <p>
        Erik Streller 2022 •{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/erikstreller/pokedex'
          className='text-link cursor-pointer hover:underline hover:underline-offset-2'
        >
          Source Code
        </a>
      </p>
    </footer>
  )
}
