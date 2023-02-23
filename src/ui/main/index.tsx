import * as S from './styled'

const Main = ({ children }: any) => {
  return (
    <>
      <S.Header>
        <img src="/images/favicon.svg" alt="Outside" aria-label='Logo da empresa' />
      </S.Header>
      {children}
    </>
  )
}

export default Main
