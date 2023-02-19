/* eslint-disable @typescript-eslint/ban-types */
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, Spinner, Alert, AlertIcon, AlertDialogFooter, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { Vote } from '../../../entities/vote'
import { SurveyGatewayDTO } from '../../../infra/gateways/contracts/survey'
import { surveyGateway } from '../../../infra/gateways/survey'
import Button from '../../atoms/button'
import * as S from './styled'

interface Props {
  options: SurveyGatewayDTO.Safe['questions'][0]['options']
  questionId: string
  vote?: Vote & { questionId: string, surveyId: string }
  align?: 'center' | 'left'
  onSend?: (questionId: string) => void
}

const SurveyCarousel = ({ options, vote, align = 'left', onSend, questionId }: Props) => {
  const votesSum = options.map(option => option.votes).reduce((previous, current) => previous + current)

  const getPercentage = (votes: number) => {
    return ((votes / votesSum) * 100) || 0
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [optionId, setOptionId] = useState<string>('')

  const sendVote = async () => {
    if (!vote) return
    setLoading(true)
    try {
      await surveyGateway.vote({
        ...vote,
        optionId
      })
      onClose()
      if (onSend) {
        onSend(questionId)
      }
    } catch (error) {
      setError(JSON.stringify(error))
    } finally {
      setLoading(false)
    }
  }

  const cancelRef = useRef(null)

  const mostVoted = options.sort((previous, current) => current.votes - previous.votes)[0]

  const notHaveAMostVoted = options.every(option => option.votes === options[0].votes)

  return (
    <S.Container style={{ justifyContent: align }}>
      {options.map(option => (
        <div key={option.id} style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
          <S.Card style={mostVoted.id === option.id && !notHaveAMostVoted ? { transform: 'scale(1.08)' } : {}}>
            {option.picture && <S.Thumb style={{ backgroundImage: `url(${option.picture}?${new Date().getTime()})` }} />}
            <span>{option.label}</span>
            <S.Analitic>
              <p>{getPercentage(option.votes).toFixed(1)}% dos votos</p>
              <p>{option.votes} votos</p>
            </S.Analitic>
          </S.Card>
          {vote && <Button text='Votar' onClick={() => {
            setOptionId(option.id)
            onOpen()
          }} />}
        </div>
      ))}
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent textAlign='center' borderRadius='20px' padding='4rem 3rem' maxWidth='40rem' gap='1rem' alignSelf='center' fontSize='1.6rem'>
            <AlertDialogHeader fontWeight='bold' alignSelf='center' fontSize='1.8rem'>
              Tem certeza que quer continuar?
            </AlertDialogHeader>
            <AlertDialogBody>
              Cada usuário só pode votar uma única vez
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
              <Button text='Continuar' onClick={sendVote} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </S.Container>
  )
}

export default SurveyCarousel
