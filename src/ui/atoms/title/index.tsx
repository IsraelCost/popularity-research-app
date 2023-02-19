import * as S from './styled'

interface Props {
  text: string
  size?: 'medium' | 'high'
}

const Title = ({ text, size = 'high' }: Props) => {
  return <S.Element style={{ fontSize: size === 'high' ? '2.5rem' : '2rem' }}>{text}</S.Element>
}

export default Title
