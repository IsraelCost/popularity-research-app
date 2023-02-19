import { httpClient } from '../http/axios'
import { IHttpClient } from '../http/contracts/http-client'
import { AuthGatewayDTO, IAuthGateway } from './contracts/auth'

export class AuthGateway implements IAuthGateway {
  constructor (
    private readonly httpClient: IHttpClient
  ) { }

  async signIn (input: AuthGatewayDTO.SignInInput): Promise<AuthGatewayDTO.SignInOutput> {
    const result = await this.httpClient.post({
      url: 'http://localhost:4040/auth/sign-in',
      data: input
    })
    return result
  }
}

export const authGateway = new AuthGateway(httpClient)
