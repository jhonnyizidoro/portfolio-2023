import { FC, ReactNode } from 'react'

import styles from './Container.module.scss'

interface Props {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => (
  <section className={styles.section}>{children}</section>
)

export default Container
