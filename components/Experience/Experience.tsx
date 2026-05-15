import { useTranslation } from '@/hooks/translation'

import { FC, useCallback, useState } from 'react'

import { NextSvg, PreviousSvg } from '@/svg'

import styles from './Experience.module.scss'
import background from './images/background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'
import Section from '@/components/Section/Section'

const Experience: FC = () => {
  const { t } = useTranslation({ enUs, ptBr })
  const [slide, setSlide] = useState(1)

  const handleSlideChange = useCallback(
    (action: 'previous' | 'next') => {
      setSlide((slide) => {
        if (action === 'previous')
          return slide > 1 ? slide - 1 : t.experiences.length
        return slide < t.experiences.length ? slide + 1 : 1
      })
    },
    [t.experiences.length],
  )

  return (
    <Section>
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
            <div
              className={styles.carouselSlides}
              aria-live='polite'
              aria-atomic='true'
            >
              {t.experiences.map((e) => (
                <div
                  className={styles.card}
                  key={e.company}
                  style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}
                >
                  <h3 className={styles.cardTitle}>{e.company}</h3>
                  <p className={styles.cardText}>{e.text}</p>
                  <ul className={styles.stack}>
                    <li className={`${styles.stackItem} ${styles.stackTitle}`}>
                      <strong>{t.stack}:</strong>
                    </li>
                    {e.stack.map((s, i) => (
                      <li
                        className={styles.stackItem}
                        key={`${e.company}_${i}`}
                      >
                        {s}
                        {i !== e.stack.length - 1 && (
                          <span aria-hidden='true'>,</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.dots} role='tablist'>
              {t.experiences.map((e, i) => (
                <button
                  type='button'
                  role='tab'
                  key={i}
                  className={styles.dot}
                  aria-label={e.company}
                  aria-selected={i + 1 === slide}
                  onClick={() => setSlide(i + 1)}
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
    </Section>
  )
}

export default Experience
