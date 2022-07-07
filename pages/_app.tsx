import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import Head from 'next/head'
import usePageView from '../hooks/usePageView'

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
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
