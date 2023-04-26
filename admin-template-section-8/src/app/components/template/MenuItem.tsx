import React from 'react'

interface MenuItemProps {
  url: string
  text: string
  icon: React.ReactNode
}

export default function MenuItem({ text, icon }: MenuItemProps) {
  return (
    <li className={``}>
      {icon}
      {text}
    </li>
  )
}
