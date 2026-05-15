import type { FC, PropsWithChildren } from 'react'

import styles from './Section.module.scss'

const Section: FC<PropsWithChildren> = ({ children }) => (
  <section className={styles.section}>{children}</section>
)

export default Section
