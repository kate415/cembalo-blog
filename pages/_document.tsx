import { Html, Head, Main, NextScript } from 'next/document'
import { existsGaId, GA_ID } from '../libs/gtag'

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="MyApp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
<link href="https://fonts.googleapis.com/css2?family=Murecho&display=swap" rel="stylesheet" />
        {existsGaId &&
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script 
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || []
                  function gtag() {dataLayer.push(arguments) }
                  gtag('js', new Date())
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  })
                `
              }}
            />
          </>
        }
      </Head>
      <body className="font-murecho">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
