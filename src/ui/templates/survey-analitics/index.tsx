/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SurveyGatewayDTO } from '../../../infra/gateways/contracts/survey'
import { surveyGateway } from '../../../infra/gateways/survey'
import { websocket } from '../../../infra/websocket/socketio'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import SurveyCarousel from '../survey-carousel'
import { Card, Thumb } from '../survey-carousel/styled'
import * as S from './styled'

const SurveyAnalitics = () => {
  const navigate = useNavigate()

  const { id: surveyId } = useParams()

  const [survey, setSurvey] = useState<SurveyGatewayDTO.Safe | null>(null)

  const loadSurvey = async () => {
    try {
      const surveyData = await surveyGateway.getOne(surveyId!)
      setSurvey(surveyData)
    } catch (error) {
      navigate('/admin/surveys')
    }
  }

  useEffect(() => {
    loadSurvey()
    websocket.on('vote', loadSurvey)
  }, [])

  if (!survey) return null

  return (
    <S.Container>
      <S.Header>
        <Title text={survey.label} />
        <Button text='Editar' onClick={() => { navigate(`/admin/surveys/${surveyId}/edit`) }} />
      </S.Header>
      <Title text='Prêmio:' size='medium' />
      <Card style={{ width: '30rem' }}>
        <Thumb style={{ backgroundImage: `url(${survey.award.picture}?${new Date().getTime()})` }} />
        <span>{survey.award.name}</span>
      </Card>
      {survey.questions.map(question => (
        <S.CarouselContainer key={question.id}>
          <Title text={question.label + ':'} size='medium' />
          <SurveyCarousel questionId={question.id} options={question.options} />
        </S.CarouselContainer>
      ))}
    </S.Container>
  )
}

export default SurveyAnalitics