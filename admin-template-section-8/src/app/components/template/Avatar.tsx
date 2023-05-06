'use client'

import useAuth from '@/app/data/hook/useAuth'
import Link from 'next/link'

interface AvatarProps {
  className?: string
}
export default function Avatar({ className = '' }: AvatarProps) {
  const { user } = useAuth()
  return (
    <Link href="/profile">
      <img
        src={user?.photoURL ?? '/images/avatar.svg'}
        referrerPolicy="no-referrer"
        alt="User avatar"
        className={`
          h-10 w-10 rounded-full cursor-pointer ${className}
        `}
      />
    </Link>
  )
}
