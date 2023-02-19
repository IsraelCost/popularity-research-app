/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Vote } from '../../../entities/vote'
import { SurveyGatewayDTO } from '../../../infra/gateways/contracts/survey'
import { surveyGateway } from '../../../infra/gateways/survey'
import { StorageKeys } from '../../../infra/storage/contracts/storage'
import { storage } from '../../../infra/storage/cookies'
import { idGenerator } from '../../../infra/utils/id-generator'
import { websocket } from '../../../infra/websocket/socketio'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import Title from '../../atoms/title'
import useFieldValidator, { ValidationType } from '../../hooks/use-field-validator'
import FormValidator from '../../utils/form-validator'
import { Masks } from '../../utils/masks'
import SurveyCarousel from '../survey-carousel'
import { Card, Thumb } from '../survey-carousel/styled'
import * as S from './styled'

const SurveyVote = () => {
  const navigate = useNavigate()

  const { id: surveyId } = useParams()

  const [survey, setSurvey] = useState<SurveyGatewayDTO.Safe | null>(null)

  const [vote, setVote] = useState<Vote | null>(null)

  const loadSurvey = async () => {
    try {
      const surveyData = await surveyGateway.getOne(surveyId!)
      setSurvey(surveyData)
    } catch (error) {
      navigate('/admin/surveys')
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const phoneField = useFieldValidator([ValidationType.PHONE])

  const [votedQuestions, setVotedQuestions] = useState<string[]>([])

  const onSendVote = (questionId: string) => {
    const newVotedQuestions = [...votedQuestions, questionId]
    setVotedQuestions(newVotedQuestions)
    storage.set(StorageKeys.VOTED_QUESTIONS, JSON.stringify(newVotedQuestions), 2 ** 31, `/vote/${survey?.id}`)
  }

  const createVote = () => {
    const formValidator = new FormValidator([phoneField])
    if (formValidator.execute()) return
    setVote({
      deviceIp: idGenerator.generate(),
      phoneNumber: phoneField.ref.current?.value!
    })
    onClose()
  }

  useEffect(() => {
    const votedQuestions = storage.get(StorageKeys.VOTED_QUESTIONS)
    if (!votedQuestions) {
      onOpen()
    }
    if (votedQuestions) {
      const parsed = JSON.parse(votedQuestions)
      if (parsed.length !== survey?.questions.length) {
        setVotedQuestions(parsed)
        if (!vote?.phoneNumber) {
          onOpen()
        }
      }
    }
    return () => {
      onClose()
    }
  }, [survey])

  useEffect(() => {
    loadSurvey()
    websocket.on('vote', loadSurvey)
  }, [])

  if (!survey) return null

  return (
    <S.Container>
      <Title text={`${survey.label} valendo:`} />
      <Card style={{ width: '30rem' }}>
        <Thumb style={{ backgroundImage: `url(${survey.award.picture}?${new Date().getTime()})` }} />
        <span>{survey.award.name}</span>
      </Card>
      {survey.questions.map(question => (
        <S.CarouselContainer key={question.id}>
          <Title text={question.label + ':'} size='medium' />
          <SurveyCarousel
            questionId={question.id}
            onSend={onSendVote}
            align='center'
            vote={vote && !votedQuestions.find(id => id === question.id) ? { ...vote, questionId: question.id, surveyId: survey.id } : undefined}
            options={question.options}
          />
        </S.CarouselContainer>
      ))}
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        leastDestructiveRef={null as any}
      >
        <AlertDialogOverlay>
          <AlertDialogContent textAlign='center' borderRadius='20px' padding='4rem 3rem' maxWidth='45rem' gap='1rem' alignSelf='center' fontSize='1.6rem'>
            <AlertDialogHeader fontWeight='bold' alignSelf='center' fontSize='1.8rem'>
              Bem vindo à enquete de popularidade
            </AlertDialogHeader>
            <AlertDialogBody>
              Para votar, insira seu número de telefone
            </AlertDialogBody>
            <AlertDialogBody>
              <Input
                type='text'
                name='phone'
                placeholder='(11) 99999-9999'
                mask={Masks.PHONE}
                ref={phoneField.ref}
                error={phoneField.errorConfig}
              />
            </AlertDialogBody>
            <AlertDialogFooter justifyContent='space-between'>
              <Button text='Votar' onClick={createVote} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </S.Container>
  )
}

export default SurveyVote
