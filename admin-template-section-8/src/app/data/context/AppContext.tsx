'use client'
import { createContext, useState } from 'react'

export type Theme = 'dark' | ''
interface AppContextProps {
  theme?: Theme
  toggleTheme?: () => void
}
interface AppProviderProps {
  children: React.ReactNode
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppProviderProps) {
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
