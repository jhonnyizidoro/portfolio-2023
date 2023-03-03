import background from './images/background.jpg'

import { FC } from 'react'

import styles from './Experience.module.scss'

import Background from '@/components/Background/Background'

const Experience: FC = () => (
  <section className={styles.container}>
    <Background image={background} opacity={0.15} />
    <div className={styles.left}>
      <h1 className={styles.title}>My skills</h1>
    </div>
  </section>
)

export default Experience
