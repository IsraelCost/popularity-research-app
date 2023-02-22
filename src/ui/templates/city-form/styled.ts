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
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  input[type=file] {
    height: 0;
    width: 0;
  }
`

export const ItemWrapper = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`

export const ItemIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const QuestionForm = styled.form`
  padding: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  label {
    cursor: pointer;
  }
  input[type="file"] {
    height: 0;
    width: 0;
  }
`

export const Thumb = styled.div`
  height: 20rem;
  width: 30rem;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
