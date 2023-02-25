import { ApplicationError } from './error'
import { Option } from './option'
import { Vote } from './vote'

export class Question {
  id!: string
  label!: string
  private _options!: Option[]

  set options (data: Option[]) {
    this._options = data
  }

  get options (): Option[] {
    return this._options
  }

  getWinner (): Option | null {
    if (this.options.length === 1) return this.options[0]
    const winnerNotExists = this.options.every(option => option.votes === this.options[0].votes)
    if (winnerNotExists) return null
    const sortedOptions = this.options.sort((previous, current) => {
      if (previous.votes > current.votes) return 1
      if (previous.votes < current.votes) return -1
      return 0
    })
    return sortedOptions.pop()!
  }

  getOption (id: string): Option {
    const option = this.options.find(searched => searched.id === id)
    if (!option) throw new ApplicationError(`Alternativa ${id} não encontrada`, 404)
    return option
  }

  addOption (option: Option) {
    this.options.push(option)
  }

  removeOption (id: string) {
    const option = this.options.find(searched => searched.id === id)
    if (!option) throw new ApplicationError(`Alternativa ${id} não encontrada`, 404)
    this.options = this.options.filter(filtered => filtered.id !== id)
  }

  vote (optionId: string, data: Vote) {
    const option = this.options.find(searched => searched.id === optionId)
    if (!option) throw new ApplicationError(`Alternativa ${optionId} não encontrada`, 404)
    option.votes.push(data)
  }

  getVotesQuantity (): number {
    return this.options.map(option => option.votes.length).reduce((previous, current) => previous + current)
  }

  getVotesPercentage (optionId: string) {
    const total = this.getVotesQuantity()
    const option = this.getOption(optionId)
    return (option.votes.length / total) * 100
  }

  getMultiple (): number {
    return 100 / this.getVotesQuantity()
  }
}
