import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Survey } from '../../../entities/survey'
import { surveyGateway } from '../../../infra/gateways/survey'
import SurveyForm from '../../templates/survey-form'
import * as S from './styled'

const SurveyEditPage = () => {
  const { id: surveyId } = useParams()

  const navigate = useNavigate()

  const [_survey, setSurvey] = useState<Survey | null>(null)

  const getSurvey = async () => {
    const survey = await surveyGateway.getOneSecure(surveyId!)

    if (!survey) {
      navigate('/admin/surveys')
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

    setSurvey(newSurvey)
  }

  useEffect(() => {
    getSurvey()
  }, [])

  if (!_survey) return null

  return (
    <S.Container>
      <SurveyForm mode='edit' survey={_survey} updateSurvey={updateSurvey} />
    </S.Container>
  )
}

export default SurveyEditPage
