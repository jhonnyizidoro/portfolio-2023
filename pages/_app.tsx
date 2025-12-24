import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/reset.scss'

import '@/styles/global.scss'

const App: FC<AppProps> = ({ pageProps, Component }) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
)

export default App
