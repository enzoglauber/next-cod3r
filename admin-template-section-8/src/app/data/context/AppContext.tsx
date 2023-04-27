'use client'
import { createContext, useState } from 'react'

export type Theme = 'dark' | ''
interface AppContextProps {
  theme?: Theme
  toggleTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
  const [theme, setTheme] = useState<Theme>('dark')
  const toggleTheme = () => {
    setTheme(theme === '' ? 'dark' : '')
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
export const AppConsumer = AppContext.Consumer
