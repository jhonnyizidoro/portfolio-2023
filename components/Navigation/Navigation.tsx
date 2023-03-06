import { FC } from 'react'

import { NextSvg, PreviousSvg } from '@/svg'

import styles from './Navigation.module.scss'

import Player from '@/components/Player/Player'

interface Props {
  onPrevious: () => void
  onNext: () => void
  dark: string
  light: string
}

const Navigation: FC<Props> = ({ onPrevious, onNext, light, dark }) => {
  return (
    <nav className={styles.wrapper}>
      <Player dark={dark} light={light} />
      <div className={styles.buttons}>
        <button
          onClick={onPrevious}
          className={styles.button}
          style={{ background: light, color: dark }}
        >
          <PreviousSvg fill={dark} /> Previous
        </button>
        <button
          onClick={onNext}
          className={styles.button}
          style={{ background: light, color: dark }}
        >
          Next <NextSvg fill={dark} />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
