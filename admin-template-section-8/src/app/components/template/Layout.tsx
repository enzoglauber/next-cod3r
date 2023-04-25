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
    <div>
      <Menu />
      <Header title={title} subtitle={subtitle} />
      <Content>{children}</Content>
    </div>
  )
}
