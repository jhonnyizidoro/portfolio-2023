import { useTranslation } from '@/hooks/translation'

import { FC, useCallback, useEffect, useState } from 'react'

import styles from './Introduction.module.scss'
import background from './images/background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'
import Section from '@/components/Section/Section'

const Introduction: FC = () => {
  const [subtitle, setSubtitle] = useState('')
  const { t } = useTranslation({ enUs, ptBr })

  const handleSubtitle = useCallback(() => {
    let activeSubtitle = 0
    let activeIndex = 0
    let typing = true
    let subtitle = t.subtitles[activeSubtitle]
    let sleep = 0

    return setInterval(() => {
      if (typing) {
        if (activeIndex <= subtitle.length) {
          setSubtitle(subtitle.slice(0, activeIndex))
          activeIndex++
        } else {
          if (sleep > 30) {
            typing = false
          } else {
            sleep++
          }
        }
      } else {
        if (activeIndex > 0) {
          setSubtitle(subtitle.slice(0, activeIndex))
          activeIndex--
        } else {
          if (activeSubtitle < t.subtitles.length - 1) {
            activeSubtitle++
          } else {
            activeSubtitle = 0
          }

          subtitle = t.subtitles[activeSubtitle]
          typing = true
          sleep = 0
        }
      }
    }, 50)
  }, [t.subtitles])

  useEffect(() => {
    const interval = handleSubtitle()

    return () => clearInterval(interval)
  }, [handleSubtitle])

  return (
    <Section>
      <Background image={background} opacity={0.5} />
      <div className={styles.content}>
        <h1 className={styles.title}>{t.title}</h1>
        <h2
          className={styles.subtitle}
          aria-label={`${t.subtitleStart} ${t.subtitles.join(', ')}`}
        >
          <span aria-hidden='true'>
            {t.subtitleStart} <span className={styles.subtitleAnimated}>{subtitle}</span>
          </span>
        </h2>
        <div className={styles.spacer} />
        <p className={styles.text}>{t.text}</p>
      </div>
    </Section>
  )
}

export default Introduction
