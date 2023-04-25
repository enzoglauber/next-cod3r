import Content from './Content'
import Header from './Header'
import Menu from './Menu'

interface LayoutProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export default function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div
      className={`
        flex h-screen w-screen
      `}
    >
      <Menu />
      <div className={`flex flex-col w-full p-7 bg-gray-300`}>
        <Header title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
  )
}
