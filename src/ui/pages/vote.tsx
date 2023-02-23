import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { City } from '../../entities/city'
import { cityGateway } from '../../infra/gateways/city'
import { SurveyGatewayDTO } from '../../infra/gateways/contracts/survey'
import { surveyGateway } from '../../infra/gateways/survey'
import SurveyVote from '../templates/survey-vote'

const VotePage = () => {
  const { id: surveyId } = useParams()

  const [city, setCity] = useState<City | null>(null)

  const [survey, setSurvey] = useState<SurveyGatewayDTO.Safe | null>(null)

  const loadSurvey = async () => {
    try {
      const surveyData = await surveyGateway.getOne(surveyId!)
      setSurvey(surveyData)
      if (surveyData?.cityId) {
        const cityData = await cityGateway.getOne(surveyData?.cityId)
        setCity(cityData)
      }
    } catch (error) { }
  }

  useEffect(() => {
    loadSurvey()
  }, [])

  return (
    <>
      <Helmet>
        <meta property="og:title" content={survey?.label} />
        <meta property="og:image" content={city?.picture} />
      </Helmet>
      <SurveyVote />
    </>
  )
}

export default VotePage
