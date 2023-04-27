'use client'
import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  url?: string
  text: string
  icon: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

export default function MenuItem({ text, icon, url, onClick, className = '' }: MenuItemProps) {
  return (
    <li className={`hover:bg-gray-100  dark:hover:bg-gray-800`}>
      {url ? (
        <Link
          href={url}
          className={`
            flex flex-col justify-center text-gray-600 items-center h-20 w-20
            dark:text-gray-200
          `}
        >
          {icon}
          <span className={`text-xs font-light`}>{text}</span>
        </Link>
      ) : (
        <button
          className={`
            flex flex-col justify-center  text-gray-600 items-center h-20 w-20 ${className}
            dark:text-gray-200
          `}
          onClick={onClick}
        >
          {icon}
          <span className={`text-xs font-light`}>{text}</span>
        </button>
      )}
    </li>
  )
}
