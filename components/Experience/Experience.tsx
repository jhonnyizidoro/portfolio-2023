import background from './images/background.jpg'

import { FC, useCallback, useState } from 'react'

import { NextSvg, PreviousSvg } from '@/svg'

import styles from './Experience.module.scss'

import Background from '@/components/Background/Background'

const experiences = [
  {
    company: 'Globo',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nullam accumsan lorem in dui. Mauris sollicitudin fermentum libero. Nunc nulla. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
  },
  {
    company: 'E-completo',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ',
  },
]

const Experience: FC = () => {
  const [slide, setSlide] = useState(1)

  const handleSlideChange = useCallback(
    (action: 'previous' | 'next') => {
      if (action === 'previous') {
        if (slide > 1) {
          setSlide(slide - 1)
        }
      } else {
        if (slide < experiences.length) {
          setSlide(slide + 1)
        }
      }
    },
    [slide],
  )

  return (
    <section className={styles.container}>
      <Background image={background} opacity={0.15} />
      <div>
        <h1 className={styles.title}>Leading a team</h1>
        <p className={styles.text}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nullam
          accumsan lorem in dui. Mauris sollicitudin fermentum libero. Nunc
          nulla. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
          dignissim dolor, a pretium mi sem ut ipsum.
        </p>
      </div>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselControl}
          onClick={() => handleSlideChange('previous')}
        >
          <PreviousSvg />
        </div>
        <div className={styles.carousel}>
          <h2 className={styles.subtitle}>My experience as a developer</h2>
          {experiences.map((e, i) =>
            i + 1 === slide ? (
              <div className={styles.card} key={e.company}>
                <h3 className={styles.cardTitle}>{e.company}</h3>
                <p className={styles.cardText}>{e.description}</p>
              </div>
            ) : (
              <></>
            ),
          )}
          <div className={styles.dots}>
            {experiences.map((_, i) => (
              <div
                className={styles.dot}
                key={i}
                style={{ opacity: i + 1 === slide ? 1 : 0.5 }}
              />
            ))}
          </div>
        </div>
        <div
          className={styles.carouselControl}
          onClick={() => handleSlideChange('next')}
        >
          <NextSvg />
        </div>
      </div>
    </section>
  )
}

export default Experience
