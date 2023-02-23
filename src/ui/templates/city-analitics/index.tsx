/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { City } from '../../../entities/city'
import { cityGateway } from '../../../infra/gateways/city'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import { Card, Thumb } from '../survey-carousel/styled'
import * as S from './styled'

const CityAnalitics = () => {
  const { push, query: { id: cityId } } = useRouter()

  const [city, setCity] = useState<City | null>(null)

  const loadCity = async () => {
    try {
      const cityData = await cityGateway.getOne(cityId as any)
      setCity(cityData)
    } catch (error) {
      push('/admin/surveys')
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
        <Button text='Editar' onClick={() => { push(`/admin/cities/${city.id}/edit`) }} />
      </S.Header>
      <Card style={{ width: '30rem' }}>
        <Thumb style={{ backgroundImage: `url(${city.picture}?${new Date().getTime()})`, borderRadius: 'inherit' }} />
      </Card>
    </S.Container>
  )
}

export default CityAnalitics
