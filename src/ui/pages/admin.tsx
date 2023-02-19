import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { StorageKeys } from '../../infra/storage/contracts/storage'
import { storage } from '../../infra/storage/cookies'
import styled from '@emotion/styled'

const Logout = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: red;
  position: absolute;
  top: 1rem;
  right: 3rem;
  cursor: pointer;
`

const Admin = () => {
  const token = storage.get(StorageKeys.AUTH_TOKEN)

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/admin/surveys')
    }
  }, [])

  if (!token) return <Navigate to='/login' />

  return (
    <>
      <Logout onClick={() => {
        storage.delete(StorageKeys.AUTH_TOKEN)
        navigate('/login')
      }}>Sair</Logout>
      <Outlet />
    </>
  )
}

export default Admin
