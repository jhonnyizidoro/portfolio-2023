import { FC } from 'react'

import styles from './Introduction.module.scss'
import background from './images/background.jpg'

import Background from '@/components/Background/Background'

const Introduction: FC = () => (
  <>
    <Background image={background} opacity={0.5} />
    <div className={styles.content}>
      <h1 className={styles.title}>{`Hello, I'm Jhonny`}</h1>
      <h2 className={styles.subtitle}>{`I'm a: frontend engineer`}</h2>
      <div className={styles.spacer} />
      <p className={styles.text}>
        Use the buttons bellow, take a tour, and know me better
      </p>
    </div>
  </>
)

export default Introduction
