import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Maidana Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ margin: '3rem auto', width: '100%', display: 'flex' }}>
        <Link style={{
          borderRadius: '100px', margin: 'auto', fontSize:'150%',
          padding: '1rem 2rem', backgroundColor: 'pink', color: 'black'
        }}
          href={'/logger'}>Dirigirse al Test de Loggers</Link>

      </div>
    </>
  )
}
