import { useTranslation } from '@/hooks/translation'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Projects.module.scss'
import SevenPlaceImage from './images/7place.png'
import background from './images/background.jpg'
import cardBackground from './images/card-background.jpg'
import FoxImage from './images/fox.png'
import GloboplayImage from './images/globoplay.png'
import RadarGestaoImage from './images/radargestao.png'
import ShiftCarImage from './images/shiftcar.png'
import WorldpulseImage from './images/worldpulse.png'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'
import Section from '@/components/Section/Section'

const images = {
  worldpulse: WorldpulseImage,
  globoplay: GloboplayImage,
  fox: FoxImage,
  sevenplace: SevenPlaceImage,
  shiftcar: ShiftCarImage,
  radargestao: RadarGestaoImage,
}

const Projects: FC = () => {
  const { t } = useTranslation({ ptBr, enUs })

  return (
    <Section>
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
              href={p.url}
              target='_blank'
              aria-label={`${t.linkLabel} ${p.name}`}
            >
              <Background
                image={cardBackground}
                opacity={0.11}
                sizes='(max-width: 768px) 95vw, 500px'
              />
              <Image
                src={images[p.id as keyof typeof images]}
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

        <h3 className={styles.repositoriesTitle}>{t.repositoriesTitle}</h3>
        <div className={styles.repositories}>
          {ptBr.repositories.map((r) => (
            <Link
              href={r.url}
              key={r.url}
              target='_blank'
              className={styles.card}
              data-centered
            >
              {r.url.split('/').pop()}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects
