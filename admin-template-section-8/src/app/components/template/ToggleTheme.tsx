import { Theme } from '@/app/data/context/AppContext'
import { Moon, Sun } from '../icons'

interface ToggleThemeProps {
  theme?: Theme
  toggleTheme?: () => void
}

export default function ToggleTheme({ theme, toggleTheme }: ToggleThemeProps) {
  return theme === `dark` ? (
    <div
      onClick={toggleTheme}
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
      `}
    >
      <div
        className={`
          flex items-center justify-center
          bg-white text-yellow-600 w-6 h-6 rounded-full
        `}
      >
        {Sun('w-4 h-4')}
      </div>

      <div
        className={`
          hidden lg:flex items-center ml-3
          text-white
        `}
      >
        <span className="text-sm">Bright</span>
      </div>
    </div>
  ) : (
    <div
      onClick={toggleTheme}
      className={`
        hidden sm:flex items-center cursor-pointer justify-end
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-24 h-8 p-1 rounded-full
      `}
    >
      <div
        className={`
          hidden lg:flex items-center mr-4
          text-gray-300
        `}
      >
        <span className="text-sm">Dark</span>
      </div>
      <div
        className={`
          flex items-center justify-center
          bg-black text-yellow-300 w-6 h-6 rounded-full
        `}
      >
        {Moon('w-4 h-4')}
      </div>
    </div>
  )
}
