import { useEffect } from 'react'
import { StorageKeys } from '../../infra/storage/contracts/storage'
import { storage } from '../../infra/storage/cookies'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Logout = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: red;
  position: absolute;
  top: 1rem;
  right: 3rem;
  cursor: pointer;
`

const SecureRoute = ({ children }: any) => {
  const { push } = useRouter()

  useEffect(() => {
    const token = storage.get(StorageKeys.AUTH_TOKEN)

    if (!token) {
      push('/login')
    }
  }, [])

  return (
    <>
      <Logout onClick={() => {
        storage.delete(StorageKeys.AUTH_TOKEN)
        push('/login')
      }}>Sair</Logout>
      {children}
    </>
  )
}

export default SecureRoute
