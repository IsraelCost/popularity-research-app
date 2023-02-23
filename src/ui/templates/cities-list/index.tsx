import { DeleteIcon } from '@chakra-ui/icons'
import { Spinner, Alert, AlertIcon, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { City } from '../../../entities/city'
import { cityGateway } from '../../../infra/gateways/city'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import * as S from './styled'

const CitiesList = () => {
  const { push } = useRouter()

  const [cities, setCities] = useState<City[]>([])

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const loadCities = async () => {
    setLoading(true)
    try {
      const citiesData = await cityGateway.get()
      setCities(citiesData)
    } catch (error) {
      setError(JSON.stringify(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCities()
  }, [])

  const [selectedCityId, setSelectedCityId] = useState<string>('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const deleteCity = async () => {
    setLoading(true)
    try {
      await cityGateway.delete(selectedCityId)
      setLoading(false)
      onClose()
      loadCities()
    } catch (error) {
      setError(JSON.stringify(error))
    }
  }

  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
    <S.Container>
      {loading && !isOpen && <Spinner size='lg' alignSelf='center' />}
      {error && !isOpen && (
        <Alert status='error' size='lg'>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <S.Header>
        <Title text='Cidades' />
        <Button text='Criar cidade' onClick={() => { push('/admin/cities/create') }} />
      </S.Header>
      {cities.map(city => (
        <S.Item key={city.id} onClick={() => { push(`/admin/cities/${city.id}`) }}>
          <span>{city.name}</span>
          <S.Icons>
            <Tooltip hasArrow label='Deletar' size='lg' fontSize='1.3rem' placement='top'>
              <DeleteIcon onClick={(evt) => {
                evt.stopPropagation()
                onOpen()
                setSelectedCityId(city.id)
              }} />
            </Tooltip>
          </S.Icons>
        </S.Item>
      ))}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent borderRadius='20px' padding='3rem' maxWidth='40rem' gap='1rem' alignSelf='center' fontSize='1.6rem'>
            <AlertDialogHeader fontWeight='bold' alignSelf='center' fontSize='1.8rem'>
              Deletar cidade
            </AlertDialogHeader>
            <AlertDialogBody>
              Tem certeza que você quer deletar essa cidade? Assim você todas as enquetes que estão anexadas a ela perderão a logo dela no topo.
            </AlertDialogBody>
            {loading && <Spinner size='lg' alignSelf='center' />}
            {error && (
              <Alert status='error' size='lg'>
                <AlertIcon />
                {error}
              </Alert>
            )}
            <AlertDialogFooter justifyContent='space-between'>
              <Button text='Cancelar' ref={cancelRef} onClick={onClose} color='#e5e5e5' textColor='#000' />
              <Button text='Desativar' onClick={deleteCity} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </S.Container>
  )
}

export default CitiesList
