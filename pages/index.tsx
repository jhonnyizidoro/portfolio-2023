import { FC, useCallback, useEffect, useMemo, useState } from 'react'

import Container from '@/components/Container/Container'
import End from '@/components/End/End'
import Experience from '@/components/Experience/Experience'
import Introduction from '@/components/Introduction/Introduction'
import Menu from '@/components/Menu/Menu'
import Navigation from '@/components/Navigation/Navigation'
import Projects from '@/components/Projects/Projects'
import SEO from '@/components/SEO/SEO'
import Skills from '@/components/Skills/Skills'

const HomePage: FC = () => {
  const [section, setSection] = useState(1)

  const handleSectionChange = useCallback((action: 'previous' | 'next') => {
    setSection((section) => {
      if (action === 'previous' && section > 1) return section - 1
      if (action === 'next' && section < 5) return section + 1
      return section
    })
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-section', String(section))
  }, [section])

  return (
    <Container>
      <SEO />
      <Menu />
      {section === 1 && <Introduction />}
      {section === 2 && <Skills />}
      {section === 3 && <Experience />}
      {section === 4 && <Projects />}
      {section === 5 && <End />}
      <Navigation
        section={section}
        onPrevious={() => handleSectionChange('previous')}
        onNext={() => handleSectionChange('next')}
      />
    </Container>
  )
}

export default HomePage
