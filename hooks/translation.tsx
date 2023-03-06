import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export const useTranslation = (component: string) => {
  const [t, setT] = useState<Record<string, any>>({})
  const { locale } = useRouter()

  const loadTranslation = useCallback(async () => {
    const { default: json } = await import(
      `../components/${component}/translations/${locale}.json`
    )
    console.log(json)
    setT(json)
  }, [component, locale])

  useEffect(() => {
    loadTranslation()
  }, [loadTranslation])

  return t
}
