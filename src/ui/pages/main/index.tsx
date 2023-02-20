import { Outlet } from 'react-router-dom'
import * as S from './styled'

const Main = () => {
  return (
    <>
      <S.Header>
        <img src="/images/favicon.svg" alt="Outside" aria-label='Logo da empresa' />
      </S.Header>
      <Outlet />
    </>
  )
}

export default Main
