import MenuItem from './MenuItem'
import { AdjustmentsVertical, Bell, Home } from './icons'

interface MenuProps {}

export default function Menu(props: MenuProps) {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={Home} />
        <MenuItem url="/adjustments" text="Adjustments" icon={AdjustmentsVertical} />
        <MenuItem url="/news" text="News" icon={Bell} />
      </ul>
    </aside>
  )
}
