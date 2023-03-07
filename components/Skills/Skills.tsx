import { useTranslation } from '@/hooks/translation'

import { FC, useState } from 'react'

import { CloseSvg } from '@/svg'

import styles from './Skills.module.scss'
import background from './images/background.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Background from '@/components/Background/Background'

const list = [
  'React',
  'AWS / Heroku',
  'Unit / E2E tests',
  'NextJS',
  'Pipelines / Webpack',
  'JS / HTML / CSS',
  'Node / Express',
  'SQL',
  'GraphQL',
]

const detailedList = [
  {
    title: 'Front End',
    list: [
      'React',
      'NextJS',
      'Vue',
      'HTML',
      'CSS / Sass',
      'Javascript',
      'Accessibility',
      'Performance',
      'SEO',
      'Webpack',
      'Gulp',
      'Jest',
      'React Testing Library',
      'Cypress',
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
      'PHP',
      'Laravel',
      'CodeIgniter',
      'SQL',
      'GraphQL',
      'API integration',
    ],
  },
  {
    title: 'Design',
    list: ['Adobe XD', 'Photoshop', 'Illustrator', 'Figma'],
  },
  {
    title: 'Other',
    list: [
      'Heroku',
      'AWS S3',
      'AWS RDS',
      'AWS Lambda',
      'AWS EC2',
      'Vercel',
      'Git',
      'Pipelines',
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

  return (
    <div className={styles.wrapper}>
      <Background image={background} opacity={0.5} />
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
        <span className={styles.link} onClick={() => setDetailed(true)}>
          {t.buttonText}
        </span>
      </div>

      {detailed && (
        <div className={styles.detailedListWrapper}>
          <button
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
  )
}

export default Skills
