import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { City } from '../../../entities/city'
import { cityGateway } from '../../../infra/gateways/city'
import CityForm from '../../templates/city-form'
import * as S from './styled'

const CityEditPage = () => {
  const { id: cityId } = useParams()

  const navigate = useNavigate()

  const [_city, setCity] = useState<City | null>(null)

  const getCity = async () => {
    const city = await cityGateway.getOne(cityId!)

    if (!city) {
      navigate('/admin/surveys')
      return
    }

    setCity(city)
  }

  const updateCity = (data: City) => {
    const newCity: City = {} as any

    newCity.id = data.id
    newCity.name = data.name
    newCity.picture = data.picture

    setCity(newCity)
  }

  useEffect(() => {
    getCity()
  }, [])

  if (!_city) return null

  return (
    <S.Container>
      <CityForm mode='edit' city={_city} updateCity={updateCity} />
    </S.Container>
  )
}

export default CityEditPage
