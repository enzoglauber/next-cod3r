'use client'
import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { Warning } from '../components/icons'
import useAuth from '../data/hook/useAuth'

type Mode = 'login' | 'register'

export default function Auth() {
  const { user, loginGoogle } = useAuth()
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const submit = () => {
    if (mode === 'login') {
      console.log('login')
      showError('Login error!')
    } else {
      showError('Login register!')
      console.log('register')
    }
  }

  const showError = (message: string, duration: number = 5) => {
    setError(message)
    setTimeout(() => setError(null), duration * 1000)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className={`hidden w-1/2 md:block lg:w-2/3`}>
        <img
          src="https://picsum.photos/1200/"
          alt="Auth Image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className={`w-full md:w-1/2 m-10 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login' ? 'Login with your account' : 'Register on the Platform'}
        </h1>

        {error ? (
          <div
            className={`flex items-center gap-3 bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}
          >
            {Warning()}
            <span>{error}</span>
          </div>
        ) : (
          false
        )}

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
          onClick={loginGoogle}
          className={`
            w-full bg-red-500 hover:bg-red-400
            text-white rounded-lg px-4 py-3
          `}
        >
          Login with Google
        </button>
        {mode === 'login' ? (
          <p className="mt-8">
            New around here
            <a
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
              `}
              onClick={() => setMode(`register`)}
            >
              {' '}
              Create an account
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Already part of our community?
            <a
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
              `}
              onClick={() => setMode(`login`)}
            >
              {' '}
              Login with your credentials
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
