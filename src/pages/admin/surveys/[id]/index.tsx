import SecureRoute from '../../../../ui/routes/secure'
import SurveyAnalitics from '../../../../ui/templates/survey-analitics'
import * as S from '../../../../ui/pages/admin/surveys/[id]/styled'

const SurveyPage = () => {
  return (
    <SecureRoute>
      <S.Container>
        <SurveyAnalitics />
      </S.Container>
    </SecureRoute>
  )
}

export default SurveyPage
