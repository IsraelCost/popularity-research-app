/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { City } from '../../../entities/city'
import { cityGateway } from '../../../infra/gateways/city'
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
  const [city, setCity] = useState<City | null>(null)

  const loadSurvey = async () => {
    try {
      const surveyData = await surveyGateway.getOne(surveyId!)
      console.log(surveyData)
      setSurvey(surveyData)
      if (surveyData?.cityId) {
        const cityData = await cityGateway.getOne(surveyData.cityId)
        setCity(cityData)
      }
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
      {survey.term && (
        <>
          <Title text='Termo:' size='medium' />
          <p
            style={{ fontSize: '1.6rem' }}
          >
            {survey.term}
          </p>
        </>
      )}
      {city && (
        <>
          <Title text='Cidade:' size='medium' />
          <Card style={{ width: '30rem' }}>
            <Thumb style={{ backgroundImage: `url(${city.picture}?${new Date().getTime()})`, borderRadius: 'inherit' }} />
          </Card>
        </>
      )}
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
