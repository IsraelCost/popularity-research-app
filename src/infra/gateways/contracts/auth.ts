export interface IAuthGateway {
  signIn: (input: AuthGatewayDTO.SignInInput) => Promise<AuthGatewayDTO.SignInOutput>
}

export namespace AuthGatewayDTO {
  export type SignInInput = {
    email: string
    password: string
  }

  export type SignInOutput = {
    id: string
    name: string
    email: string
    verified: boolean
    profile: string
    jwt: string
  }
}
