import Image from 'next/image'
import { FC } from 'react'

import styles from './Projects.module.scss'
import background from './images/background.jpg'
import cardBackground from './images/card-background.jpg'
import projectImage1 from './images/projects/shiftcar.jpg'

import Background from '@/components/Background/Background'

const repeat = (arr: any[], n: number) => [].concat(...Array(n).fill(arr))

const projects = [
  {
    name: 'SiftCar',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
    image: projectImage1,
    list: ['Design', 'Develop'],
  },
]

const Projects: FC = () => (
  <section className={styles.container}>
    <Background image={background} opacity={0.2} />
    <div>
      <h1 className={styles.title}>Projects</h1>
      <h2 className={styles.subtitle}>Some of my projects as a free lancer</h2>
    </div>
    <div className={styles.cards}>
      {repeat(projects, 6).map((p: (typeof projects)[number], i) => (
        <div key={i} className={styles.card}>
          <Background image={cardBackground} opacity={0.11} />
          <h3 className={styles.cardTitle}>{p.name}</h3>
          <p className={styles.cardSubtitle}>{p.description}</p>
          <div className={styles.cardFooter}>
            <Image src={p.image} alt='' className={styles.cardImage} />
            <ul className={styles.cardList}>
              {p.list.map((ii) => (
                <li key={`${i}-${ii}`} className={styles.cardListItem}>
                  - {ii}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Projects
