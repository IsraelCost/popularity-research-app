import { Award } from './award'
import { ApplicationError } from './error'
import { Question } from './question'

export class Survey {
  id!: string
  label!: string
  award!: Award
  questions!: Question[]
  cityId?: string

  getQuestion (id: string) {
    const question = this.questions.find(searched => searched.id === id)
    if (!question) throw new ApplicationError(`Questão ${id} não encontrada`, 404)
    return question
  }

  addQuestion (question: Question) {
    this.questions.push(question)
  }

  removeQuestion (id: string) {
    this.questions = this.questions.filter(question => question.id !== id)
  }
}
