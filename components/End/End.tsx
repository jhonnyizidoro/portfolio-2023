import Link from 'next/link'
import { FC } from 'react'

import { EnvelopeSvg, GitHubSvg, LinkedinSvg, PhoneSvg } from '@/svg'

import styles from './End.module.scss'
import background from './images/background.jpg'

import Background from '@/components/Background/Background'

const End: FC = () => (
  <>
    <Background image={background} opacity={0.15} />
    <div className={styles.content}>
      <h1 className={styles.title}>{`That's all!`}</h1>
      <h2 className={styles.subtitle}>
        Thank you for knowing me a little more
      </h2>
      <div className={styles.text}>Like what you saw? Contact me!</div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <Link href='mailto:jhonny-cwb@hotmail.com' className={styles.link}>
            <EnvelopeSvg />
          </Link>
          <Link href='tel:+5541991791053' className={styles.link}>
            <PhoneSvg />
          </Link>
        </div>
        <div className={styles.button}>
          <Link
            href='https://www.linkedin.com/in/jhonnyizidoro/'
            rel='noopener'
            className={styles.link}
          >
            <LinkedinSvg />
          </Link>
          <Link
            href='https://github.com/jhonnyizidoro'
            rel='noopener'
            className={styles.link}
          >
            <GitHubSvg />
          </Link>
        </div>
      </div>
      <small className={styles.textSmall}>Phone: +55 41 9 9179-1053</small>
    </div>
  </>
)

export default End
