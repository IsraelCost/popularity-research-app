import { useState } from 'react'
import { City } from '../../../../entities/city'
import SecureRoute from '../../../../ui/routes/secure'
import CityForm from '../../../../ui/templates/city-form'
import * as S from '../../../../ui/pages/admin/cities/create/styled'

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
    <SecureRoute>
      <S.Container>
        <CityForm mode='create' city={city} updateCity={updateCity} />
      </S.Container>
    </SecureRoute>
  )
}

export default CityCreatePage
