import { Question } from '../../entities/question'
import { Survey } from '../../entities/survey'
import { httpClient } from '../http/axios'
import { IHttpClient } from '../http/contracts/http-client'
import { IStorage, StorageKeys } from '../storage/contracts/storage'
import { storage } from '../storage/cookies'
import { ISurveyGateway, SurveyGatewayDTO } from './contracts/survey'

const { VITE_API_URI: API_URI } = import.meta.env

export class SurveyGateway implements ISurveyGateway {
  constructor (
    private readonly httpClient: IHttpClient,
    private readonly storage: IStorage
  ) { }

  private toModel ({ questions: questionsData, ...data }: any) {
    const model = new Survey()

    const questions = questionsData.map((questionData: any) => {
      const question = new Question()

      Object.assign(question, questionData)

      return question
    })

    Object.assign(model, data)

    model.questions = questions

    return model
  }

  get headers () {
    const token = this.storage.get(StorageKeys.AUTH_TOKEN)

    return { Authorization: `Bearer ${token}` }
  }

  async get (): Promise<Survey[]> {
    const surveyData = await this.httpClient.get({
      url: `${API_URI}/survey`,
      headers: this.headers
    })

    return surveyData.map(this.toModel)
  }

  async getOne (id: string): Promise<SurveyGatewayDTO.Safe | null> {
    try {
      const surveyData = await this.httpClient.get({
        url: `${API_URI}/survey/${id}`
      })

      return surveyData
    } catch (error) {
      return null
    }
  }

  async getOneSecure (id: string): Promise<Survey | null> {
    try {
      const surveyData = await this.httpClient.get({
        url: `${API_URI}/survey/${id}/secure`,
        headers: this.headers
      })

      return this.toModel(surveyData)
    } catch (error) {
      return null
    }
  }

  async create (data: Survey): Promise<Survey> {
    const surveyData = await this.httpClient.post({
      url: `${API_URI}/survey`,
      headers: this.headers,
      data: {
        label: data.label,
        award: data.award,
        questions: data.questions.map(question => ({
          id: question.id,
          label: question.label,
          options: question.options
        }))
      }
    })

    return this.toModel(surveyData)
  }

  async update (id: string, data: Survey): Promise<Survey> {
    const surveyData = await this.httpClient.patch({
      url: `${API_URI}/survey/${id}`,
      headers: this.headers,
      data: {
        label: data.label,
        award: data.award,
        questions: data.questions?.map(question => ({
          id: question.id,
          label: question.label,
          options: question.options
        }))
      }
    })

    return this.toModel(surveyData)
  }

  async delete (id: string): Promise<void> {
    await this.httpClient.delete({
      url: `${API_URI}/survey/${id}`,
      headers: this.headers
    })
  }

  async vote ({ surveyId, questionId, optionId, ...data }: SurveyGatewayDTO.Vote): Promise<void> {
    await this.httpClient.post({
      url: `${API_URI}/survey/${surveyId}/question/${questionId}/option/${optionId}/vote`,
      data,
      headers: this.headers
    })
  }
}

export const surveyGateway = new SurveyGateway(httpClient, storage)
