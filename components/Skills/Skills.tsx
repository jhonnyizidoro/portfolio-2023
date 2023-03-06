import { FC } from 'react'

import styles from './Skills.module.scss'
import background from './images/background.jpg'

import Background from '@/components/Background/Background'

const list = [
  'React',
  'AWS / Heroku',
  'Unit / E2E tests',
  'NextJS',
  'Pipelines / Webpack',
  'JS / HTML / CSS',
  'Node / Express',
  'SQL',
  'GraphQL',
]

const Skills: FC = () => (
  <div className={styles.wrapper}>
    <Background image={background} opacity={0.5} />
    <div className={styles.card}>
      <h1 className={styles.title}>My skills</h1>
      <p className={styles.text}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; In ac dui quis mi consectetuer lacinia. Nullam accumsan
        lorem in dui. Mauris sollicitudin fermentum libero. Nunc nulla. Praesent
        porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a
        pretium mi sem ut ipsum.
        <br />
        <br />
        Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
        Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
        Fusce vel dui. Vestibulum volutpat pretium libero. Nam pretium turpis et
        arcu.
      </p>
    </div>
    <div>
      <ul className={styles.list}>
        {list.map((i) => (
          <li className={styles.listItem} key={i}>
            {i}
          </li>
        ))}
      </ul>
      <span className={styles.link}>Click here to a more detailed list</span>
    </div>
  </div>
)

export default Skills
