'use client'

import firebase from '@/firebase/config'
import User from '@/model/User'
import { useRouter } from 'next/navigation'
import React, { createContext, useState } from 'react'

firebase.SDK_VERSION

async function parseUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    image: firebaseUser.photoURL
  }
}

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
}
interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props: AuthProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | undefined>(undefined)

  async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const response = await firebase.auth().signInWithPopup(provider)

    console.log(response, `response`)
    if (response.user?.email) {
      const user = await parseUser(response.user)
      setUser(user)
      router.push('/')
    }
  }

  return <AuthContext.Provider value={{ user, loginGoogle }}>{props.children}</AuthContext.Provider>
}

export default AuthContext
