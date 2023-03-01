import { FC, useMemo } from 'react'

import styles from './Navigation.module.scss'

import colors1 from '@/components/Introduction/Introduction.module.scss'
import { NextSvg, PreviousSvg } from '@/svg'

interface Props {
  section: number
  onPrevious: () => void
  onNext: () => void
}

const colors: Record<number, { [key: string]: string }> = {
  1: colors1,
}

const Navigation: FC<Props> = ({ section, onPrevious, onNext }) => {
  const dark = useMemo(() => {
    return colors[section].dark
  }, [section])

  const light = useMemo(() => {
    return colors[section].light
  }, [section])

  return (
    <nav className={styles.container}>
      <div className={styles.background} />
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
