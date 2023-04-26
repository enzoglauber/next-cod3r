'use client'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { AdjustmentsVertical, Bell, Home, Logout } from './icons'

interface MenuProps {}

export default function Menu(props: MenuProps) {
  return (
    <aside className={`flex flex-col`}>
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500 to-purple-800
          h-20 w-20
        `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Home" icon={Home} />
        <MenuItem url="/adjustments" text="Adjustments" icon={AdjustmentsVertical} />
        <MenuItem url="/news" text="News" icon={Bell} />
      </ul>
      <ul>
        <MenuItem
          text="Logout"
          icon={Logout}
          onClick={() => console.log('logout')}
          className={`text-red-600 hover:bg-red-400 hover:text-white transition-all ease-in`}
        />
      </ul>
    </aside>
  )
}
