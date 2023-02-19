/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext, useContext, useState } from 'react'
import { User } from '../../entities/user'

interface Contract {
  user: User | null
  token: string
  setData: (user: User, token: string) => void
}

export const AuthContext = createContext<Contract>({} as Contract)

export const AuthStore = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string>('')

  const setData = (user: User, token: string) => {
    setUser(user)
    setToken(token)
  }

  return (
    <AuthContext.Provider
      value={{ setData, user, token }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
