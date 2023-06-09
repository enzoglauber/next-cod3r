'use client'
import useAuth from '@/app/data/hook/useAuth'
import { AdjustmentsVertical, Bell, Home, Logout } from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

interface MenuProps {}

export default function Menu(props: MenuProps) {
  const { signOut } = useAuth()
  return (
    <aside
      className={`
        flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900 dark:text-gray-200
      `}
    >
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
          onClick={signOut}
          className={`
            text-red-600 hover:bg-red-400 hover:text-white transition-all ease-in
            dark:text-red-400  dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}
