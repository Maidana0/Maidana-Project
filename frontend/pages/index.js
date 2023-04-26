import Head from 'next/head'
import Image from 'next/image'

import { Toastify
 } from '@FMaidana07/components/toast'
export default function Home() {
  return (
    <>
      <Head>
        <title>Maidana Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      HOLA
      <br/>
      <button
      onClick={(e)=>{
        e.preventDefault()
        Toastify('HOLA MI REY')
      }}
      >Toast</button>
    </>
  )
}
