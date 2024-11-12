import { useTranslation } from '@/hooks/translation'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Projects.module.scss'
import background from './images/background.jpg'
import cardBackground from './images/card-background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'

const Projects: FC = () => {
  const { t } = useTranslation({ ptBr, enUs })

  return (
    <>
      <Background image={background} opacity={0.2} />
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <div className={styles.text}>{t.text}</div>
        </div>
        <div className={styles.cards}>
          {t.projects.map((p) => (
            <Link
              key={p.id}
              className={styles.card}
              href={`/images/projects/${p.id}.jpg`}
              target='_blank'
              aria-label={`${t.linkLabel} ${p.name}`}
            >
              <Background image={cardBackground} opacity={0.11} />
              <Image
                src={`/images/projects/${p.id}-m.jpg`}
                alt=''
                className={styles.cardImage}
                width={150}
                height={100}
                quality={50}
              />
              <div>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <p className={styles.cardSubtitle}>{p.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
