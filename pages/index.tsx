import { FC, useCallback, useMemo, useState } from 'react'

import colors1 from '@/components/Introduction/Introduction.module.scss'
import colors2 from '@/components/Skills/Skills.module.scss'

import Introduction from '@/components/Introduction/Introduction'
import Navigation from '@/components/Navigation/Navigation'
import Skills from '@/components/Skills/Skills'

const colors: Record<number, { [key: string]: string }> = {
  1: colors1,
  2: colors2,
}

const HomePage: FC = () => {
  const [section, setSection] = useState(1)

  const dark = useMemo(() => {
    return colors[section]?.dark
  }, [section])

  const light = useMemo(() => {
    return colors[section]?.light
  }, [section])

  const handleSectionChange = useCallback(
    (action: 'previous' | 'next') => {
      if (action === 'previous') {
        if (section > 1) {
          setSection(section - 1)
        }
      } else {
        if (section < 5) {
          setSection(section + 1)
        }
      }
    },
    [section],
  )

  return (
    <>
      {section === 1 && <Introduction />}
      {section === 2 && <Skills />}
      <Navigation
        dark={dark}
        light={light}
        onPrevious={() => handleSectionChange('previous')}
        onNext={() => handleSectionChange('next')}
      />
    </>
  )
}

export default HomePage
