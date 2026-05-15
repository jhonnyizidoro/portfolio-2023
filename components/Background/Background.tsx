import Image, { StaticImageData } from 'next/image'
import { FC, useState } from 'react'

import styles from './Background.module.scss'

interface Props {
  image: StaticImageData
  opacity: number
  sizes?: string
}

const Background: FC<Props> = ({ image, opacity, sizes }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      fill
      priority
      src={image}
      alt=''
      sizes={sizes ?? '100vw'}
      onLoad={() => setLoaded(true)}
      className={styles.background}
      style={{ opacity: loaded ? opacity : 0 }}
      quality={50}
      data-loaded={loaded}
    />
  )
}

export default Background
