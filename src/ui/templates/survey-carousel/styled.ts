import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 4rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 30rem);
  justify-content: center;
`

export const Card = styled.div`
  width: 100%;
  background: #e5e5e5;
  height: max-content;
  border-radius: 20px;
  color: #000;
  position: relative;
  transition: transform .2s ease-in-out;
  :hover {
    * {
      visibility: visible;
    }
  }
  span {
    font-size: 1.6rem;
    width: 100%;
    height: 6rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Thumb = styled.div`
  height: 24rem;
  width: 100%;
  border-radius: 20px 20px 0 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Analitic = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: rgba(255, 255, 255, .7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  gap: 2rem;
`
