import { useTranslation } from '@/hooks/translation'

import { FC, useCallback, useState } from 'react'

import { NextSvg, PreviousSvg } from '@/svg'

import styles from './Experience.module.scss'
import background from './images/background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'

const Experience: FC = () => {
  const { t } = useTranslation({ enUs, ptBr })
  const [slide, setSlide] = useState(1)

  const handleSlideChange = useCallback(
    (action: 'previous' | 'next') => {
      if (action === 'previous') {
        if (slide > 1) {
          setSlide(slide - 1)
        } else {
          setSlide(t.experiences.length)
        }
      } else {
        if (slide < t.experiences.length) {
          setSlide(slide + 1)
        } else {
          setSlide(1)
        }
      }
    },
    [slide, t.experiences.length],
  )

  return (
    <>
      <Background image={background} opacity={0.15} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.text}>{t.text}</p>
        </div>
        <div className={styles.carouselWrapper}>
          <button
            type='button'
            aria-label={t.previousButtonLabel}
            className={styles.carouselControl}
            onClick={() => handleSlideChange('previous')}
          >
            <PreviousSvg />
          </button>
          <div className={styles.carousel}>
            <h2 className={styles.subtitle}>{t.subtitle}</h2>
            <div className={styles.carouselSlides}>
              {t.experiences.map((e) => (
                <div
                  className={styles.card}
                  key={e.company}
                  style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}
                >
                  <h3 className={styles.cardTitle}>{e.company}</h3>
                  <p className={styles.cardText}>{e.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.dots}>
              {t.experiences.map((_, i) => (
                <div
                  className={styles.dot}
                  key={i}
                  style={{ opacity: i + 1 === slide ? 1 : 0.5 }}
                />
              ))}
            </div>
          </div>
          <button
            type='button'
            aria-label={t.nextButtonLabel}
            className={styles.carouselControl}
            onClick={() => handleSlideChange('next')}
          >
            <NextSvg />
          </button>
        </div>
      </div>
    </>
  )
}

export default Experience
