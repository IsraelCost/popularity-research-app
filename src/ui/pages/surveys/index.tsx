import CitiesList from '../../templates/cities-list'
import SurveysList from '../../templates/surveys-list'
import * as S from './styled'

const SurveysPage = () => {
  return (
    <S.Container>
      <SurveysList />
      <CitiesList />
    </S.Container>
  )
}

export default SurveysPage
