import { City } from '../../../entities/city'

export interface ICityGateway {
  create: (data: City) => Promise<City>
  update: (id: string, data: City) => Promise<City>
  getOne: (id: string) => Promise<City>
  get: () => Promise<City[]>
  delete: (id: string) => Promise<void>
}
