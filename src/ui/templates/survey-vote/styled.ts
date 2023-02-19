import styled from '@emotion/styled'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 0;
  }
`

export const Container = styled.div`
  width: 70%;
  margin: auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  h1 {
    color: rgba(0,0,0,.7);
  }
`
