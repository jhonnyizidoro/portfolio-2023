import { useTranslation } from '@/hooks/translation'

import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { PauseSvg, PlaySvg, SkipSvg, SongSvg } from '@/svg'

import styles from './Player.module.scss'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

const tracks = ['Filipe Ret - Invicto', 'Black Alien - Au Revoir']

interface Props {
  dark: string
  light: string
}

const Player: FC<Props> = ({ light, dark }) => {
  const { t } = useTranslation({ ptBr, enUs })
  const [currentTrack, setCurrentTrack] = useState<number>(0)
  const [playing, setPlaying] = useState(false)
  const refs = useRef<(HTMLAudioElement | null)[]>([])

  const handleVolume = useCallback((event?: ChangeEvent<HTMLInputElement>) => {
    const volume = Number(event?.target.value || 50) / 100

    refs.current.forEach((audio) => {
      if (audio) {
        audio.volume = volume
      }
    })
  }, [])

  useEffect(() => {
    handleVolume()
  }, [handleVolume])

  const handleNext = useCallback(() => {
    const nextTrack = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    const currentAudio = refs.current[currentTrack]
    const nextAudio = refs.current[nextTrack]

    if (!currentAudio || !nextAudio) {
      return
    }

    setPlaying(true)
    setCurrentTrack(nextTrack)
    currentAudio.pause()
    currentAudio.currentTime = 0
    nextAudio.play()
  }, [currentTrack])

  const handlePlay = useCallback(() => {
    const audio = refs.current[currentTrack]

    if (playing) {
      setPlaying(false)
      audio?.pause()
    } else {
      setPlaying(true)
      audio?.play()
    }
  }, [currentTrack, playing])

  return (
    <div className={styles.wrapper}>
      {tracks.map((t, i) => (
        <audio
          key={t}
          src={`/songs/${t}.mp3`}
          preload='none'
          ref={(el) => (refs.current[i] = el)}
        />
      ))}
      <button
        type='button'
        onClick={handlePlay}
        aria-label={t.title}
        style={{ background: light }}
        className={`${styles.playPause} ${playing && styles.playPauseAnim}`}
      >
        {playing ? <PauseSvg fill={dark} /> : <PlaySvg fill={dark} />}
      </button>
      <div className={styles.content}>
        {t.title}
        <div className={styles.songName}>
          <SongSvg />
          {tracks[currentTrack]}
        </div>
      </div>
      <button
        type='button'
        onClick={handleNext}
        className={styles.next}
        aria-label={t.skipButtonLabel}
      >
        <SkipSvg />
      </button>
      <input
        type='range'
        aria-label='Volume'
        onChange={handleVolume}
        className={styles.volume}
        // @ts-ignore
        style={{ '--dark': dark, '--light': light }}
      />
    </div>
  )
}

export default Player
