import { DeleteIcon, LinkIcon } from '@chakra-ui/icons'
import { Spinner, Alert, AlertIcon, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure, Tooltip } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Survey } from '../../../entities/survey'
import { surveyGateway } from '../../../infra/gateways/survey'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import { useCopyToClipboard } from '../../hooks/use-copy-to-clipboard'
import * as S from './styled'

const SurveysList = () => {
  const navigate = useNavigate()

  const [surveys, setSurveys] = useState<Survey[]>([])

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const loadSurveys = async () => {
    setLoading(true)
    try {
      const surveysData = await surveyGateway.get()
      setSurveys(surveysData)
    } catch (error) {
      setError(JSON.stringify(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSurveys()
  }, [])

  const [selectedSurveyId, setSelectedSurveyId] = useState<string>('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const deleteSurvey = async () => {
    setLoading(true)
    try {
      await surveyGateway.delete(selectedSurveyId)
      setLoading(false)
      onClose()
      loadSurveys()
    } catch (error) {
      setError(JSON.stringify(error))
    }
  }

  const cancelRef = useRef<HTMLButtonElement>(null)

  const copy = useCopyToClipboard()

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
        <Title text='Enquetes' />
        <Button text='Criar enquete' onClick={() => { navigate('/admin/surveys/create') }} />
      </S.Header>
      {surveys.map(survey => (
        <S.Item key={survey.id} onClick={() => { navigate(`/admin/surveys/${survey.id}`, { state: survey }) }}>
          <span>{survey.label}</span>
          <S.Icons>
            <Tooltip hasArrow label='Copiar link' size='lg' fontSize='1.3rem' placement='top'>
              <LinkIcon onClick={(evt) => {
                evt.stopPropagation()
                copy(`${window.location.host}/vote/${survey.id}`)
              }} />
            </Tooltip>
            <Tooltip hasArrow label='Desativar enquete' size='lg' fontSize='1.3rem' placement='top'>
              <DeleteIcon onClick={(evt) => {
                evt.stopPropagation()
                onOpen()
                setSelectedSurveyId(survey.id)
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
              Desativar enquete
            </AlertDialogHeader>
            <AlertDialogBody>
              Tem certeza que você quer deletar essa enquete? Assim você perderá todos os dados de votação dela.
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
              <Button text='Desativar' onClick={deleteSurvey} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </S.Container>
  )
}

export default SurveysList
