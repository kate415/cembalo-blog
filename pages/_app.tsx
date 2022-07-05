import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ちぇんばろぐ</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
  )
}

export default MyApp
