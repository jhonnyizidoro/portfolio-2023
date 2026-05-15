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
  section: number
}

const Navigation: FC<Props> = ({ onPrevious, onNext, section }) => {
  const { t } = useTranslation({ ptBr, enUs })

  return (
    <nav className={styles.wrapper}>
      <Player />
      <div className={styles.buttons}>
        <button
          type='button'
          onClick={onPrevious}
          disabled={section === 1}
          className={styles.button}
          aria-label={`${t.previousButtonText} ${t.buttonLabelSuffix}`}
        >
          <PreviousSvg /> {t.previousButtonText}
        </button>
        <button
          type='button'
          onClick={onNext}
          disabled={section === 5}
          className={styles.button}
          aria-label={`${t.nextButtonText} ${t.buttonLabelSuffix}`}
        >
          {t.nextButtonText} <NextSvg />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
