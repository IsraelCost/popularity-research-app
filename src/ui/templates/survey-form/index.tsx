/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { ArrowUpIcon, DeleteIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, FormLabel, Select, Spinner, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { Award } from '../../../entities/award'
import { City } from '../../../entities/city'
import { Option } from '../../../entities/option'
import { Question } from '../../../entities/question'
import { Survey } from '../../../entities/survey'
import { cityGateway } from '../../../infra/gateways/city'
import { surveyGateway } from '../../../infra/gateways/survey'
import { base64Converter } from '../../../infra/utils/blob-base64-converter'
import { idGenerator } from '../../../infra/utils/id-generator'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import Title from '../../atoms/title'
import * as S from './styled'

interface Props {
  mode: 'create' | 'edit'
  survey: Survey
  updateSurvey: (data: Survey) => void
}

const SurveyForm = ({ mode, survey, updateSurvey }: Props) => {
  const createQuestion = () => {
    const question = new Question()

    question.id = idGenerator.generate()
    question.label = 'Título da questão'
    question.options = []

    survey.addQuestion(question)

    updateSurvey(survey)
  }

  const createOption = (question: Question) => {
    const option: Option = {
      id: idGenerator.generate(),
      label: 'Título da opção',
      picture: '',
      votes: []
    }

    question.addOption(option)

    updateSurvey(survey)
  }

  const removeQuestion = (questionId: string) => {
    survey.removeQuestion(questionId)

    updateSurvey(survey)
  }

  const removeOption = (question: Question, optionId: string) => {
    question.removeOption(optionId)

    updateSurvey(survey)
  }

  const uploadPicture = async (entity: Option | Award, files: FileList) => {
    const [file] = files

    const pictureBase64 = await base64Converter.convert(file)

    entity.picture = pictureBase64 as string

    updateSurvey(survey)
  }

  const updateLabel = async (entity: Option | Question | Survey, evt: any) => {
    const { value } = evt.target
    entity.label = value
    updateSurvey(survey)
  }

  const updateName = async (entity: Award, evt: any) => {
    const { value } = evt.target
    entity.name = value
    updateSurvey(survey)
  }

  const updateTerm = async (entity: Survey, evt: any) => {
    const { value } = evt.target
    entity.term = value
    updateSurvey(survey)
  }

  const updateVotes = async (entity: Option, value: any) => {
    const votes = [...entity.votes]

    let qtdOfNewVotesVotes = +value - entity.votes.length

    if (qtdOfNewVotesVotes > 0) {
      while (qtdOfNewVotesVotes !== 0) {
        votes.push({ deviceIp: 'root-device', phoneNumber: 'root-phone-number' })
        qtdOfNewVotesVotes--
      }
    }

    entity.votes = votes

    updateSurvey(survey)
  }

  const sendText = mode === 'create' ? 'Criar enquete' : 'Salvar'

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { push } = useRouter()

  const send = async () => {
    setLoading(true)
    try {
      if (mode === 'create') {
        await surveyGateway.create(survey)
      } else {
        await surveyGateway.update(survey.id, survey)
      }
      push('/admin/surveys')
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(JSON.stringify(error))
    }
  }

  const olderSurvey = useMemo(() => survey, [])

  const getMinVotes = (questionId: string, optionId: string) => {
    try {
      const question = olderSurvey.getQuestion(questionId)
      const option = question.getOption(optionId)
      return option.votes.length
    } catch (error) {
      return 0
    }
  }

  const [cities, setCities] = useState<City[]>([])

  const loadCities = async () => {
    setLoading(true)
    try {
      const citiesData = await cityGateway.get()
      setCities(citiesData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(JSON.stringify(error))
    }
  }

  useEffect(() => {
    loadCities()
  }, [])

  const updateCity = async (entity: Survey, evt: any) => {
    const { value } = evt.target
    const city = cities.find(city => city.id === value)
    entity.cityId = city ? value : ''
    updateSurvey(survey)
  }

  console.log(survey)

  return (
    <S.Container>
      <Title text={survey.label} />
      <Input
        label='Título'
        type='text'
        name='label'
        initial={survey.label}
        onChange={(evt: any) => { updateLabel(survey, evt) }}
      />
      <div
        style={{ width: '100%' }}
      >
        <FormLabel
          fontSize='1.6rem'
        >Termo (aparece no poup-up no início da votação):</FormLabel>
        <Textarea
          name='survey-term'
          width='100%'
          fontSize='1.6rem'
          borderRadius='20px'
          defaultValue={survey.term}
          onChange={(evt: any) => { updateTerm(survey, evt) }}
        />
      </div>
      <Title text='Prêmio' size='medium' />
      <S.QuestionForm>
        <Input
          label='Nome do prêmio'
          type='text'
          name='survey-award-name'
          initial={survey.award.name}
          onChange={(evt: any) => { updateName(survey.award, evt) }}
        />
        <FormLabel fontSize='1.6rem'>
          Foto:
          <label htmlFor={'award-picture'}>
            <ArrowUpIcon />
            <input type="file" name={'award-picture'} id={'award-picture'} onChange={evt => { uploadPicture(survey.award, evt.target.files!) }} />
          </label>
        </FormLabel>
        <S.Thumb style={{ backgroundImage: `url(${survey.award.picture})` }} />
      </S.QuestionForm>
      <Title text='Cidade' size='medium' />
      <Select
        borderRadius='20px'
        fontSize='1.6rem'
        height='5rem'
        onChange={(evt) => { updateCity(survey, evt) }}
        value={survey.cityId}
      >
        <option key='none' value='none'>Selecione uma cidade</option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </Select>
      <S.Header>
        <Title text='Questões:' size='medium' />
        <Button text='Criar questão' onClick={createQuestion} />
      </S.Header>
      {survey.questions.map(question => (
        <S.ItemWrapper key={question.id}>
          <S.Item>
            <span>{question.label}</span>
            <DeleteIcon onClick={() => { removeQuestion(question.id) }} />
          </S.Item>
          <S.QuestionForm>
            <Input
              label='Texto da questão'
              type='text'
              name='question-label'
              initial={question.label}
              onChange={(evt: any) => { updateLabel(question, evt) }}
            />
            <S.Header>
              <Title text='Opções:' size='medium' />
              <Button text='Criar opção' onClick={() => { createOption(question) }} />
            </S.Header>
            {question.options.map(option => (
              <S.ItemWrapper key={option.id}>
                <S.Item>
                  <span>{option.label}</span>
                  <S.ItemIcons>
                    <label htmlFor={'picture' + option.id}>
                      <ArrowUpIcon />
                      <input type="file" name={'picture' + option.id} id={'picture' + option.id} onChange={evt => { uploadPicture(option, evt.target.files!) }} />
                    </label>
                    <DeleteIcon color='red' onClick={() => { removeOption(question, option.id) }} />
                  </S.ItemIcons>
                </S.Item>
                <S.QuestionForm>
                  <Input
                    label='Texto da opção'
                    type='text'
                    name='option-label'
                    initial={option.label}
                    onChange={(evt: any) => { updateLabel(option, evt) }}
                  />
                  <Input
                    label='Número de votos'
                    type='number'
                    name='option-votes'
                    initial={option.votes.length}
                    min={getMinVotes(question.id, option.id)}
                    onChange={(evt: any) => { updateVotes(option, evt) }}
                  />
                  <FormLabel fontSize='1.6rem'>Foto:</FormLabel>
                  <S.Thumb style={{ backgroundImage: `url(${option.picture})` }} />
                </S.QuestionForm>
              </S.ItemWrapper>
            ))}
          </S.QuestionForm>
        </S.ItemWrapper>
      ))}
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

export default SurveyForm
