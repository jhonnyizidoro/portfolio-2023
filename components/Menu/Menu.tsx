import { useTranslation } from '@/hooks/translation'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { DownSvg, EnvelopeSvg, GitHubSvg, LinkedinSvg, PhoneSvg } from '@/svg'

import styles from './Menu.module.scss'
import brFlag from './images/br.jpg'
import usFlag from './images/us.jpg'
import enUs from './translations/en-US.json'
import ptBr from './translations/pt-BR.json'

const Menu: FC = () => {
  const { t, l } = useTranslation({ enUs, ptBr })

  return (
    <div className={styles.menu}>
      <div className={styles.wrapper}>
        <Image
          alt=''
          width={20}
          height={14}
          src={l === 'en-US' ? usFlag : brFlag}
          className={styles.flag}
        />
        <DownSvg />
      </div>

      <div className={styles.list}>
        <Link className={styles.listItem} href='/' locale={t.linkLocale}>
          <Image
            alt=''
            width={20}
            height={14}
            src={l === 'en-US' ? brFlag : usFlag}
            className={styles.flag}
          />
          {t.buttonText}
        </Link>
        <div className={styles.listItem}>
          <Link href='mailto:jhonny-cwb@hotmail.com' className={styles.link}>
            <EnvelopeSvg />
          </Link>
          <Link href='tel:+5541991791053' className={styles.link}>
            <PhoneSvg />
          </Link>
          <Link
            href='https://www.linkedin.com/in/jhonnyizidoro/'
            rel='noopener'
            className={styles.link}
          >
            <LinkedinSvg />
          </Link>
          <Link
            href='https://github.com/jhonnyizidoro'
            rel='noopener'
            className={styles.link}
          >
            <GitHubSvg />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
