import { useTranslation } from '@/hooks/translation'

import { FC, useCallback, useEffect, useRef, useState } from 'react'

import { CloseSvg } from '@/svg'

import styles from './Skills.module.scss'
import background from './images/background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'
import Section from '@/components/Section/Section'

const list = [
  'React, NextJS',
  'AWS, CI/CD',
  'Automated tests',
  'Docker, Vite, Webpack',
  'CSS, Sass, Tailwind',
  'Node, Express',
  'SQL, Mongo, GraphQL',
  'Typescript, Javascript',
  'LLMs, AI orchestration',
]

const detailedList = [
  {
    title: 'Front End',
    list: [
      'React',
      'NextJS',
      'Typescript',
      'React Query',
      'tRPC',
      'Vue',
      'HTML',
      'CSS, Sass',
      'Javascript',
      'Accessibility',
      'Performance',
      'SEO',
      'Webpack',
      'Vite',
      'Gulp',
      'Tailwind CSS',
      'Zustand',
      'React Router',
      'Jest, Vitest, Cypress',
      'React Testing Library',
      'UI Frameworks',
      'Service Workers',
      'Firebase',
    ],
  },
  {
    title: 'Back End',
    list: [
      'NodeJS',
      'Express',
      'Docker',
      'PHP',
      'Laravel, CodeIgniter',
      'SQL',
      'MongoDB, Mongoose',
      'Redis',
      'RabbitMQ',
      'Elasticsearch',
      'GraphQL',
    ],
  },
  {
    title: 'Design',
    list: ['Adobe XD', 'Photoshop', 'Illustrator', 'Figma'],
  },
  {
    title: 'Other',
    list: [
      'AWS S3',
      'AWS RDS',
      'AWS Lambda',
      'AWS EC2',
      'AWS EventBridge',
      'Docker',
      'Git',
      'CI, CD',
      'GitHub Actions',
      'BitBucket Pipelines',
      'Caching',
      'Cloudflare',
      'WCAG',
    ],
  },
]

const Skills: FC = () => {
  const { t } = useTranslation({ enUs, ptBr })
  const [detailed, setDetailed] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (detailed) {
      closeRef.current?.focus()
    } else {
      triggerRef.current?.focus()
    }
  }, [detailed])

  return (
    <Section>
      <Background image={background} opacity={0.5} />
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>{t.title}</h1>
          {t.texts.map((t, i) => (
            <p className={styles.text} key={i}>
              {t}
            </p>
          ))}
        </div>
        <div>
          <ul className={styles.list}>
            {list.map((i) => (
              <li className={styles.listItem} key={i}>
                {i}
              </li>
            ))}
          </ul>
          <button
            type='button'
            ref={triggerRef}
            className={styles.link}
            onClick={() => setDetailed(true)}
          >
            {t.buttonText}
          </button>
        </div>

        {detailed && (
          <div className={styles.detailedListWrapper}>
            <button
              type='button'
              ref={closeRef}
              aria-label={t.closeListButtonLabel}
              className={styles.detailedListClose}
              onClick={() => setDetailed(false)}
            >
              <CloseSvg />
            </button>
            <div className={styles.detailedListOverflow}>
              {detailedList.map((i) => (
                <div key={i.title}>
                  <h2 className={styles.detailedListTitle}>{i.title}</h2>
                  <ul className={styles.detailedList}>
                    {i.list.map((i) => (
                      <li className={styles.detailedListItem} key={i}>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

export default Skills
