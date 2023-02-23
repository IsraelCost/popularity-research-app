import SecureRoute from '../../../../ui/routes/secure'
import CityAnalitics from '../../../../ui/templates/city-analitics'
import * as S from './styled'

const CityPage = () => {
  return (
    <SecureRoute>
      <S.Container>
        <CityAnalitics />
      </S.Container>
    </SecureRoute>
  )
}

export default CityPage
