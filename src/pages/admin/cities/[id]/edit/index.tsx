import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { City } from '../../../../../entities/city'
import { cityGateway } from '../../../../../infra/gateways/city'
import SecureRoute from '../../../../../ui/routes/secure'
import CityForm from '../../../../../ui/templates/city-form'
import * as S from '../../../../../ui/pages/admin/cities/[id]/edit/styled'

const CityEditPage = () => {
  const { push, query: { id: cityId } } = useRouter()

  const [_city, setCity] = useState<City | null>(null)

  const getCity = async () => {
    const city = await cityGateway.getOne(cityId as any)

    if (!city) {
      push('/admin/surveys')
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
    <SecureRoute>
      <S.Container>
        <CityForm mode='edit' city={_city} updateCity={updateCity} />
      </S.Container>
    </SecureRoute>
  )
}

export default CityEditPage
