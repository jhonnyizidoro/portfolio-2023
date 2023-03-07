import { FC, useCallback, useMemo, useState } from 'react'

import colors5 from '@/components/End/End.module.scss'
import colors3 from '@/components/Experience/Experience.module.scss'
import colors1 from '@/components/Introduction/Introduction.module.scss'
import colors4 from '@/components/Projects/Projects.module.scss'
import colors2 from '@/components/Skills/Skills.module.scss'

import Container from '@/components/Container/Container'
import End from '@/components/End/End'
import Experience from '@/components/Experience/Experience'
import Introduction from '@/components/Introduction/Introduction'
import Menu from '@/components/Menu/Menu'
import Navigation from '@/components/Navigation/Navigation'
import Projects from '@/components/Projects/Projects'
import SEO from '@/components/SEO/SEO'
import Skills from '@/components/Skills/Skills'

const colors: Record<number, { [key: string]: string }> = {
  1: colors1,
  2: colors2,
  3: colors3,
  4: colors4,
  5: colors5,
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
    <Container background={dark}>
      <SEO />
      <Menu />
      {section === 1 && <Introduction />}
      {section === 2 && <Skills />}
      {section === 3 && <Experience />}
      {section === 4 && <Projects />}
      {section === 5 && <End />}
      <Navigation
        dark={dark}
        light={light}
        section={section}
        onPrevious={() => handleSectionChange('previous')}
        onNext={() => handleSectionChange('next')}
      />
    </Container>
  )
}

export default HomePage
