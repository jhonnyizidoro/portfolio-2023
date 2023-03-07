import { useTranslation } from '@/hooks/translation'

import Link from 'next/link'
import { FC } from 'react'

import { EnvelopeSvg, GitHubSvg, LinkedinSvg, PhoneSvg } from '@/svg'

import styles from './End.module.scss'
import background from './images/background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'

const End: FC = () => {
  const { t } = useTranslation({ enUs, ptBr })

  return (
    <>
      <Background image={background} opacity={0.15} />
      <div className={styles.content}>
        <h1 className={styles.title}>{t.title}</h1>
        <h2 className={styles.subtitle}>{t.subtitle}</h2>
        <div className={styles.text}>{t.text}</div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link href='mailto:jhonny-cwb@hotmail.com' className={styles.link}>
              <EnvelopeSvg />
            </Link>
            <Link href='tel:+5541991791053' className={styles.link}>
              <PhoneSvg />
            </Link>
          </div>
          <div className={styles.button}>
            <Link
              href='https://www.linkedin.com/in/jhonnyizidoro/'
              rel='noopener'
              className={styles.link}
            >
              <LinkedinSvg />
            </Link>
            <Link
              href='https://github.com/jhonnyizidoro'
              rel='noopener'
              className={styles.link}
            >
              <GitHubSvg />
            </Link>
          </div>
        </div>
        <small className={styles.textSmall}>{t.phone}</small>
      </div>
    </>
  )
}

export default End
