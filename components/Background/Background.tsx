import Image, { StaticImageData } from 'next/image'
import { FC, useState } from 'react'

import styles from './Background.module.scss'

interface Props {
  image: StaticImageData
  opacity: number
}

const Background: FC<Props> = ({ image, opacity }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      priority
      src={image}
      alt=''
      onLoad={() => setLoaded(true)}
      className={styles.background}
      style={{ opacity: loaded ? opacity : 0 }}
      quality={50}
      data-loaded={loaded}
    />
  )
}

export default Background
