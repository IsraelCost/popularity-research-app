import { httpClient } from '../http/axios'
import { IHttpClient } from '../http/contracts/http-client'
import { AuthGatewayDTO, IAuthGateway } from './contracts/auth'

const { VITE_API_URI: API_URI } = import.meta.env

export class AuthGateway implements IAuthGateway {
  constructor (
    private readonly httpClient: IHttpClient
  ) { }

  async signIn (input: AuthGatewayDTO.SignInInput): Promise<AuthGatewayDTO.SignInOutput> {
    const result = await this.httpClient.post({
      url: `${API_URI}/auth/sign-in`,
      data: input
    })
    return result
  }
}

export const authGateway = new AuthGateway(httpClient)
