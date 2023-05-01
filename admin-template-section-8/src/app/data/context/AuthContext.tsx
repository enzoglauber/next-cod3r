import firebase from '@/firebase/config'
import User from '@/model/User'
import { createContext } from 'react'

firebase.SDK_VERSION

interface AuthContextProps {
  user: User
}
const AuthContext = createContext()
