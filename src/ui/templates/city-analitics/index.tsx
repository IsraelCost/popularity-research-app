/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { City } from '../../../entities/city'
import { cityGateway } from '../../../infra/gateways/city'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import { Card, Thumb } from '../survey-carousel/styled'
import * as S from './styled'

const CityAnalitics = () => {
  const navigate = useNavigate()

  const { id: cityId } = useParams()

  const [city, setCity] = useState<City | null>(null)

  const loadCity = async () => {
    try {
      const cityData = await cityGateway.getOne(cityId!)
      setCity(cityData)
    } catch (error) {
      navigate('/admin/surveys')
    }
  }

  useEffect(() => {
    loadCity()
  }, [])

  if (!city) return null

  return (
    <S.Container>
      <S.Header>
        <Title text={city.name} />
        <Button text='Editar' onClick={() => { navigate(`/admin/cities/${city.id}/edit`) }} />
      </S.Header>
      <Card style={{ width: '30rem' }}>
        <Thumb style={{ backgroundImage: `url(${city.picture}?${new Date().getTime()})`, borderRadius: 'inherit' }} />
      </Card>
    </S.Container>
  )
}

export default CityAnalitics
