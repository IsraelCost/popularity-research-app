/* eslint-disable @typescript-eslint/array-type */
import { Award } from '../../../entities/award'
import { Survey } from '../../../entities/survey'

export interface ISurveyGateway {
  get: () => Promise<Survey[]>
  getOne: (id: string) => Promise<SurveyGatewayDTO.Safe | null>
  getOneSecure: (id: string) => Promise<Survey | null>
  create: (input: Survey) => Promise<Survey>
  update: (id: string, input: Survey) => Promise<Survey>
  delete: (id: string) => Promise<void>
  vote: (input: SurveyGatewayDTO.Vote) => Promise<void>
}

export namespace SurveyGatewayDTO {
  export type Safe = {
    id: string
    label: string
    award: Award
    questions: {
      id: string
      label: string
      options: {
        id: string
        label: string
        picture: string
        votes: number
      }[]
    }[]
    cityId?: string
  }

  export type Vote = {
    deviceIp: string
    phoneNumber: string
    questionId: string
    optionId: string
    surveyId: string
  }
}
