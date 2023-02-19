/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios'
import { HttpClientDTO, IHttpClient } from './contracts/http-client'

export class AxiosHttpClient implements IHttpClient {
  private async thrower (callback: Function) {
    try {
      return (await callback())
    } catch (error: any) {
      throw error.response?.data
    }
  }

  async get ({ url, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await this.thrower(async () => {
      return await axios.request({
        url,
        headers,
        params,
        method: 'get'
      })
    })
    return result.data
  }

  async post ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await this.thrower(async () => {
      return await axios.request({
        url,
        data,
        headers,
        params,
        method: 'post'
      })
    })
    return result.data
  }

  async put ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await this.thrower(async () => {
      return await axios.request({
        url,
        data,
        headers,
        params,
        method: 'put'
      })
    })
    return result.data
  }

  async patch ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await this.thrower(async () => {
      return await axios.request({
        url,
        data,
        headers,
        params,
        method: 'patch'
      })
    })
    return result.data
  }

  async delete ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await this.thrower(async () => {
      return await axios.request({
        url,
        data,
        headers,
        params,
        method: 'delete'
      })
    })
    return result.data
  }
}

export const httpClient = new AxiosHttpClient()
