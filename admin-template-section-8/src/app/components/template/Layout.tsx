'use client'
import useApp from '@/app/data/hook/useApp'
import Authorized from '../auth/Authorized'
import Content from './Content'
import Header from './Header'
import Menu from './Menu'

interface LayoutProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export default function Layout({ title, subtitle, children }: LayoutProps) {
  const { theme } = useApp()

  return (
    <Authorized>
      <div className={`${theme} flex h-screen w-screen`}>
        <Menu />
        <div
          className={`
          flex flex-col w-full p-7 bg-gray-300 
        dark:bg-gray-800 dark:text-gray-50
        `}
        >
          <Header title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </div>
      </div>
    </Authorized>
  )
}
