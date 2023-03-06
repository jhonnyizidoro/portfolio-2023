import { useTranslation } from '@/hooks/translation'

import { FC } from 'react'

import { NextSvg, PreviousSvg } from '@/svg'

import styles from './Navigation.module.scss'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

import Player from '@/components/Player/Player'

interface Props {
  onPrevious: () => void
  onNext: () => void
  dark: string
  light: string
  section: number
}

const Navigation: FC<Props> = ({
  onPrevious,
  onNext,
  light,
  dark,
  section,
}) => {
  const { t } = useTranslation({ ptBr, enUs })

  return (
    <nav className={styles.wrapper}>
      <Player dark={dark} light={light} />
      <div className={styles.buttons}>
        <button
          onClick={onPrevious}
          disabled={section === 1}
          className={styles.button}
          style={{ background: light, color: dark }}
          aria-label={`${t.previousButtonText} ${t.buttonLabelSuffix}`}
        >
          <PreviousSvg fill={dark} /> {t.previousButtonText}
        </button>
        <button
          onClick={onNext}
          disabled={section === 5}
          className={styles.button}
          style={{ background: light, color: dark }}
          aria-label={`${t.nextButtonText} ${t.buttonLabelSuffix}`}
        >
          {t.nextButtonText} <NextSvg fill={dark} />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
