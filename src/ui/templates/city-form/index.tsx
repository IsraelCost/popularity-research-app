/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { ArrowUpIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, FormLabel, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { City } from '../../../entities/city'
import { cityGateway } from '../../../infra/gateways/city'
import { base64Converter } from '../../../infra/utils/blob-base64-converter'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import Title from '../../atoms/title'
import * as S from './styled'

interface Props {
  mode: 'create' | 'edit'
  city: City
  updateCity: (data: City) => void
}

const CityForm = ({ mode, city, updateCity }: Props) => {
  const uploadPicture = async (entity: City, files: FileList) => {
    const [file] = files

    const pictureBase64 = await base64Converter.convert(file)

    entity.picture = pictureBase64 as string

    updateCity(city)
  }

  const updateName = async (entity: City, evt: any) => {
    const { value } = evt.target

    entity.name = value

    updateCity(city)
  }

  const sendText = mode === 'create' ? 'Criar cidade' : 'Salvar'

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { push } = useRouter()

  const send = async () => {
    setLoading(true)
    try {
      if (mode === 'create') {
        await cityGateway.create(city)
      } else {
        await cityGateway.update(city.id, city)
      }
      push('/admin/surveys')
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(JSON.stringify(error))
    }
  }

  const picture = city.picture.includes('base64') ? city.picture : `${city.picture}?${new Date().getTime()}`

  return (
    <S.Container>
      <Title text={city.name} />
      <Input
        label='Título'
        type='text'
        name='label'
        initial={city.name}
        onChange={(evt: any) => { updateName(city, evt) }}
      />
      <FormLabel fontSize='1.6rem'>
        Foto:
        <label htmlFor={'city-picture'}>
          <ArrowUpIcon />
          <input type="file" name={'city-picture'} id={'city-picture'} onChange={evt => { uploadPicture(city, evt.target.files!) }} />
        </label>
      </FormLabel>
      <S.Thumb style={{ backgroundImage: `url(${picture})` }} />
      {loading && <Spinner size='lg' alignSelf='center' />}
      {error && (
        <Alert status='error' size='lg'>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Button text={sendText} onClick={send} />
    </S.Container>
  )
}

export default CityForm
