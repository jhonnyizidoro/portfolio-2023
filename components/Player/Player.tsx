import { FC, useCallback, useRef, useState } from 'react'

import { PauseSvg, PlaySvg, SkipSvg, SongSvg } from '@/svg'

import styles from './Player.module.scss'

const tracks = ['Filipe Ret - Invicto', 'Black Alien - Au Revoir']

interface Props {
  dark: string
  light: string
}

const Player: FC<Props> = ({ light, dark }) => {
  const [currentTrack, setCurrentTrack] = useState<number>(0)
  const [playing, setPlaying] = useState(false)
  const refs = useRef<(HTMLAudioElement | null)[]>([])

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
        className={`${styles.playPause} ${playing && styles.playPauseAnim}`}
        style={{ background: light }}
        onClick={handlePlay}
      >
        {playing ? <PauseSvg fill={dark} /> : <PlaySvg fill={dark} />}
      </button>
      <div className={styles.content}>
        <div className={styles.title}>{`Play one of my favorite's songs`}</div>
        <div className={styles.songName}>
          <SongSvg />
          {tracks[currentTrack]}
        </div>
      </div>
      <button className={styles.next} onClick={handleNext}>
        <SkipSvg />
      </button>
    </div>
  )
}

export default Player
