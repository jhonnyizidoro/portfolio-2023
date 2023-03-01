import background from './images/background.jpg'

import Image from 'next/image'
import { FC } from 'react'

import styles from './Introduction.module.scss'

const Introduction: FC = () => (
  <section>
    <div className={styles.container}>
      <Image src={background} alt='' className={styles.background} />
      <div className={styles.content}>
        <h1 className={styles.title}>{`Hello, I'm Jhonny`}</h1>
        <h2 className={styles.subtitle}>{`I'm a: frontend engineer`}</h2>
        <div className={styles.spacer} />
        <p className={styles.text}>
          Use the buttons bellow, take a tour, and know me better
        </p>
      </div>
    </div>
  </section>
)

export default Introduction
