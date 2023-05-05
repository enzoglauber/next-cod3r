'use client'

import firebase from '@/firebase/config'
import User from '@/model/User'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { createContext, useEffect, useState } from 'react'

async function parseUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName ?? '',
    email: firebaseUser.email ?? '',
    token,
    provider: firebaseUser.providerData[0]?.providerId ?? '',
    photoURL: firebaseUser.photoURL ?? ''
  }
}

const cookie = 'token'
function managerCookie(loggeed: boolean) {
  if (loggeed) {
    Cookies.set(cookie, `${loggeed}`, { expires: 7 })
  } else {
    Cookies.remove(cookie)
  }
}

interface AuthContextProps {
  user?: User | null
  loginGoogle?: () => Promise<void>
  signOut?: () => Promise<void>
  loading?: boolean
}
interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props: AuthProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | null | undefined>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const sessionConfig = async (firebaseUser: firebase.User | null) => {
    const logged = !!firebaseUser?.email

    setLoading(false)
    managerCookie(logged)

    if (logged) {
      const user = await parseUser(firebaseUser)
      setUser(user)
      return user.email
    } else {
      setUser(null)
      return false
    }
  }

  const loginGoogle = async () => {
    setLoading(true)
    const provider = new firebase.auth.GoogleAuthProvider()
    const response = await firebase.auth().signInWithPopup(provider)

    sessionConfig(response.user)
    router.push('/')
  }

  const signOut = async () => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await sessionConfig(null)
      managerCookie(false)
      router.push('/auth')
    } catch (error) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get(cookie)) {
      const cancel = firebase.auth().onIdTokenChanged(sessionConfig)
      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loginGoogle, signOut, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
