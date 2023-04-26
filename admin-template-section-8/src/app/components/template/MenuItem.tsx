import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  url: string
  text: string
  icon: React.ReactNode
}

export default function MenuItem({ text, icon, url }: MenuItemProps) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link
        href={url}
        className={`flex flex-col justify-center items-center
                    h-20 w-20`}
      >
        {icon}
        <span className={`text-xs font-light text-gray-600`}>{text}</span>
      </Link>
    </li>
  )
}
