import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 0;
  }
`

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

export const Item = styled.div`
  background: #e5e5e5;
  color: #000;
  width: 100%;
  border-radius: 20px;
  padding: 2rem;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    text-decoration: underline;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`
