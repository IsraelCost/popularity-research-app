import SecureRoute from '../../../ui/routes/secure'
import CitiesList from '../../../ui/templates/cities-list'
import SurveysList from '../../../ui/templates/surveys-list'
import * as S from './styled'

const SurveysPage = () => {
  return (
    <SecureRoute>
      <S.Container>
        <SurveysList />
        <CitiesList />
      </S.Container>
    </SecureRoute>
  )
}

export default SurveysPage
