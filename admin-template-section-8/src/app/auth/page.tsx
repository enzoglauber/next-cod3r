'use client'
import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'

type Mode = 'login' | 'register'

export default function Auth() {
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Auth</h1>
      <AuthInput
        type="email"
        label="Email"
        name="email"
        value={email}
        onChange={setEmail}
        required
      />
      <AuthInput
        type="password"
        label="Password"
        name="password"
        value={password}
        onChange={setPassword}
      />
    </div>
  )
}
