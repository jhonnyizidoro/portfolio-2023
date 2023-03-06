import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { DownSvg, EnvelopeSvg, GitHubSvg, LinkedinSvg, PhoneSvg } from '@/svg'

import styles from './Menu.module.scss'
import brFlag from './images/br.jpg'
import usFlag from './images/us.jpg'

const Menu: FC = () => {
  const { locale } = useRouter()

  return (
    <div className={styles.menu}>
      <div className={styles.wrapper}>
        <Image
          alt=''
          width={20}
          height={14}
          src={locale === 'en-US' ? usFlag : brFlag}
          className={styles.flag}
        />
        <DownSvg />
      </div>

      <div className={styles.list}>
        <Link
          className={styles.listItem}
          href='/'
          locale={locale === 'en-US' ? 'pt-BR' : 'en-US'}
        >
          <Image
            alt=''
            width={20}
            height={14}
            src={locale === 'en-US' ? brFlag : usFlag}
            className={styles.flag}
          />
          {locale === 'en-US'
            ? 'Mudar idioma para Português'
            : 'Change language to English'}
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
