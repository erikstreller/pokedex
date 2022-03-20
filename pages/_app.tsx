import { AppProps } from 'next/app'
import { GlitchProvider } from '../context/GlitchContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlitchProvider>
      <Component {...pageProps} />
    </GlitchProvider>
  )
}

export default MyApp
