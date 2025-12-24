import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { FC } from 'react'

import '@/styles/reset.scss'

import '@/styles/global.scss'

const App: FC<AppProps> = ({ pageProps, Component }) => (
  <>
    <Analytics />
    <Component {...pageProps} />
  </>
)

export default App
