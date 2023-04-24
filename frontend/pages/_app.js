import '@FMaidana07/styles/globals.css'
import Layout from '@FMaidana07/components/layout/Layout.js'
import ContextProvider from '@FMaidana07/components/context'

import { ToastContain } from '@FMaidana07/components/toast'


export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContain />
      </ContextProvider>

    </>
  )
}
