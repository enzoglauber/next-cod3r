import { Theme } from '@/app/data/context/AppContext'
import { Moon, Sun } from './icons'

interface ToggleThemeProps {
  theme?: Theme
  toggleTheme?: () => void
}

export default function ToggleTheme({ theme, toggleTheme }: ToggleThemeProps) {
  return theme === `dark` ? (
    <div onClick={toggleTheme}>
      <div>{Sun}</div>
      <div>
        <span>Bright</span>
      </div>
    </div>
  ) : (
    <div onClick={toggleTheme}>
      {Moon}
      <div>
        <span>Dark</span>
      </div>
    </div>
  )
}
