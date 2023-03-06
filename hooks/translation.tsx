import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export const useTranslation = <T,>({ ptBr, enUs }: { ptBr: T; enUs: T }) => {
  const { locale } = useRouter()
  const [t, setT] = useState<T>(locale === 'pt-BR' ? ptBr : enUs)
  const [currentLocale, setCurrentLocale] = useState(locale)

  const loadTranslation = useCallback(async () => {
    if (locale !== currentLocale) {
      setCurrentLocale(locale)
      if (locale === 'pt-BR') {
        setT(ptBr)
      } else {
        setT(enUs)
      }
    }
  }, [currentLocale, enUs, locale, ptBr])

  useEffect(() => {
    loadTranslation()
  }, [loadTranslation])

  return { t, l: locale }
}
