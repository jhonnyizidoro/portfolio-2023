import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import styles from './Background.module.scss'

interface Props {
  image: StaticImageData
  opacity: number
}

const Background: FC<Props> = ({ image, opacity }) => (
  <Image
    priority
    src={image}
    alt=''
    className={styles.background}
    style={{ opacity }}
    quality={50}
  />
)

export default Background
