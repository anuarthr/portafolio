import { createContext, useContext, useState } from 'react'

const LangContext = createContext({ lang: 'es', toggleLang: () => {} })

export const useLang = () => useContext(LangContext)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es')
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}
