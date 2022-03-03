import Head from 'next/head'

export default function Seo(props) {
  const { ...customMeta } = props

  const meta = {
    title: 'Pokédex',
    description: 'Explore your favorite Pokémons.',
    ...customMeta
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
  )
}
