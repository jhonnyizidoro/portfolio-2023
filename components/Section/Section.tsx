import type { FC, PropsWithChildren } from 'react'

import styles from './Section.module.scss'

const Section: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.section}>{children}</div>
)

export default Section
