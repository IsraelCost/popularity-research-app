import { useState } from 'react'
import { City } from '../../../entities/city'
import CityForm from '../../templates/city-form'
import * as S from './styled'

const CityCreatePage = () => {
  const getCity = () => {
    const city: City = {} as any

    city.id = ''
    city.name = 'Nome da cidade'
    city.picture = ''

    return city
  }

  const [city, setCity] = useState<City>(getCity())

  const updateCity = (data: City) => {
    const newCity: City = {} as any

    newCity.id = data.id
    newCity.name = data.name
    newCity.picture = data.picture

    setCity(newCity)
  }

  return (
    <S.Container>
      <CityForm mode='create' city={city} updateCity={updateCity} />
    </S.Container>
  )
}

export default CityCreatePage
