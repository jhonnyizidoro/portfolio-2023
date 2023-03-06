import { FC, ReactNode } from 'react'

import styles from './Container.module.scss'

interface Props {
  background?: string
  children: ReactNode
}

const Container: FC<Props> = ({ background, children }) => (
  <section style={{ background: background }} className={styles.section}>
    {children}
  </section>
)

export default Container
