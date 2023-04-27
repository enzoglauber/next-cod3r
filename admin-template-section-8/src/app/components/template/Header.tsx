import useApp from '@/app/data/hook/useApp'
import Title from './Title'
import ToggleTheme from './ToggleTheme'

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle }: HeaderProps) {
  const { theme, toggleTheme } = useApp()
  return (
    <div className="flex ">
      <Title title={title} subtitle={subtitle} />
      <div className="flex grow justify-end">
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}
