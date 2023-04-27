'use client'
import { createContext } from 'react'

const AppContext = createContext({ name: null })

export function AppProvider(props) {
  return (
    <AppContext.Provider
      value={{
        name: `name text`
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
export const AppConsumer = AppContext.Consumer
