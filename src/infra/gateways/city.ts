import { City } from '../../entities/city'
import { httpClient } from '../http/axios'
import { IHttpClient } from '../http/contracts/http-client'
import { IStorage, StorageKeys } from '../storage/contracts/storage'
import { storage } from '../storage/cookies'
import { ICityGateway } from './contracts/city'

const { NEXT_PUBLIC_API_URI: API_URI } = process.env

export class CityGateway implements ICityGateway {
  constructor (
    private readonly httpClient: IHttpClient,
    private readonly storage: IStorage
  ) { }

  get headers () {
    const token = this.storage.get(StorageKeys.AUTH_TOKEN)

    return { Authorization: `Bearer ${token}` }
  }

  async get (): Promise<City[]> {
    const cities = await this.httpClient.get({
      url: `${API_URI}/city`
    })

    return cities
  }

  async getOne (id: string): Promise<City> {
    const city = await this.httpClient.get({
      url: `${API_URI}/city/${id}`
    })

    return city
  }

  async create (_data: City): Promise<City> {
    const { id, ...data } = _data

    const city = await this.httpClient.post({
      url: `${API_URI}/city`,
      data,
      headers: this.headers
    })

    return city
  }

  async update (id: string, _data: City): Promise<City> {
    const { id: _id, ...data } = _data

    const city = await this.httpClient.patch({
      url: `${API_URI}/city/${id}`,
      data,
      headers: this.headers
    })

    return city
  }

  async delete (id: string): Promise<void> {
    await this.httpClient.delete({
      url: `${API_URI}/city/${id}`,
      headers: this.headers
    })
  }
}

export const cityGateway = new CityGateway(httpClient, storage)
