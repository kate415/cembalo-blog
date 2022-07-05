import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="MyApp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
<link href="https://fonts.googleapis.com/css2?family=Murecho&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-murecho">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
