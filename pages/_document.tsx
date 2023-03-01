import { Html, Head, Main, NextScript } from 'next/document'

import { FC } from 'react'

const Document: FC = () => (
  <Html lang='en'>
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Monda:wght@400;700&family=Russo+One&display=swap'
        rel='stylesheet'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
