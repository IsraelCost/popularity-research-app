import { useState } from 'react'
import { Survey } from '../../../../entities/survey'
import { idGenerator } from '../../../../infra/utils/id-generator'
import SecureRoute from '../../../../ui/routes/secure'
import SurveyForm from '../../../../ui/templates/survey-form'
import * as S from '../../../../ui/pages/admin/surveys/create/styled'

const SurveyCreatePage = () => {
  const getSurvey = () => {
    const survey = new Survey()

    survey.id = ''
    survey.label = 'Nome da enquete'
    survey.award = {
      id: idGenerator.generate(),
      name: 'Nome do prêmio',
      picture: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
    survey.questions = []
    survey.cityId = ''
    survey.term = ''

    return survey
  }

  const [survey, setSurvey] = useState<Survey>(getSurvey())

  const updateSurvey = (data: Survey) => {
    const newSurvey = new Survey()

    newSurvey.id = data.id
    newSurvey.label = data.label
    newSurvey.award = data.award
    newSurvey.questions = data.questions
    newSurvey.cityId = data.cityId
    newSurvey.term = data.term

    setSurvey(newSurvey)
  }

  return (
    <SecureRoute>
      <S.Container>
        <SurveyForm mode='create' survey={survey} updateSurvey={updateSurvey} />
      </S.Container>
    </SecureRoute>
  )
}

export default SurveyCreatePage
