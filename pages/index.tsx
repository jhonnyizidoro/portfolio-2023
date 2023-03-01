import { FC, useCallback, useState } from 'react'
import Introduction from '@/components/Introduction/Introduction'
import Navigation from '@/components/Navigation/Navigation'

const HomePage: FC = () => {
  const [section, setSection] = useState(1)

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
      <Introduction />
      <Navigation
        section={1}
        onPrevious={() => handleSectionChange('previous')}
        onNext={() => handleSectionChange('next')}
      />
    </>
  )
}

export default HomePage
