'use client'
import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'

type Mode = 'login' | 'register'

export default function Auth() {
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    if (mode === 'login') {
      console.log('login')
    } else {
      console.log('register')
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div
        className={`
        w-1/2
      `}
      >
        <h1
          className={`
          text-xl font-bold mb-5 
        `}
        >
          {mode === 'login' ? 'Login with your account' : 'Register on the Platform'}
        </h1>
        <AuthInput
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={setEmail}
          className={`mt-4`}
          required
        />
        <AuthInput
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={setPassword}
          className={`mt-4`}
        />
        <button
          onClick={submit}
          className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={submit}
          className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
        `}
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}
