import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Survey } from '../../../../../entities/survey'
import { surveyGateway } from '../../../../../infra/gateways/survey'
import SecureRoute from '../../../../../ui/routes/secure'
import SurveyForm from '../../../../../ui/templates/survey-form'
import * as S from './styled'

const SurveyEditPage = () => {
  const { push, query: { id: surveyId } } = useRouter()

  const [_survey, setSurvey] = useState<Survey | null>(null)

  const getSurvey = async () => {
    const survey = await surveyGateway.getOneSecure(surveyId as any)

    if (!survey) {
      push('/admin/surveys')
      return
    }

    setSurvey(survey)
  }

  const updateSurvey = (data: Survey) => {
    const newSurvey = new Survey()

    newSurvey.id = data.id
    newSurvey.label = data.label
    newSurvey.questions = data.questions
    newSurvey.award = data.award
    newSurvey.cityId = data.cityId
    newSurvey.term = data.term

    setSurvey(newSurvey)
  }

  useEffect(() => {
    getSurvey()
  }, [])

  if (!_survey) return null

  return (
    <SecureRoute>
      <S.Container>
        <SurveyForm mode='edit' survey={_survey} updateSurvey={updateSurvey} />
      </S.Container>
    </SecureRoute>
  )
}

export default SurveyEditPage
