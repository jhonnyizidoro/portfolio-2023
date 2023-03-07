import { useTranslation } from '@/hooks/translation'

import Head from 'next/head'
import { FC } from 'react'

import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

const ogImage = '/fav/og-image.jpg'

const SEO: FC = () => {
  const { t } = useTranslation({ enUs, ptBr })

  return (
    <Head>
      <title>{t.title}</title>
      <link rel='canonical' href='/' />
      <meta name='description' content='' />
      <meta name='robots' content='index, follow' />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={t.title} />
      <meta property='og:description' content={t.description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content='/' />
      <meta property='og:site_name' content='World Pulse' />

      <meta name='twitter:title' content={t.title} />
      <meta name='twitter:description' content={t.description} />
      <meta name='twitter:image' content={ogImage} />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/fav/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/fav/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/fav/favicon-16x16.png'
      />
      <link rel='manifest' href='/fav/site.webmanifest' />
      <link rel='mask-icon' href='/fav/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#cdcdcd' />
      <meta name='theme-color' content='#cdcdcd' />
    </Head>
  )
}

export default SEO
