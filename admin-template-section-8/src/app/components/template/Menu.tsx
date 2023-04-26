import Logo from './Logo'
import MenuItem from './MenuItem'
import { AdjustmentsVertical, Bell, Home } from './icons'

interface MenuProps {}

export default function Menu(props: MenuProps) {
  return (
    <aside>
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500 to-purple-800
          h-20 w-20
        `}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Home" icon={Home} />
        <MenuItem url="/adjustments" text="Adjustments" icon={AdjustmentsVertical} />
        <MenuItem url="/news" text="News" icon={Bell} />
      </ul>
    </aside>
  )
}
