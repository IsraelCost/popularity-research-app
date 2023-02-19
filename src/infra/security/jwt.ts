import { IJwt, JwtPayload } from './contracts/jwt'

export class Jwt implements IJwt {
  decode (token: string): JwtPayload {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    const payloadObj = JSON.parse(window.atob(base64))
    return {
      id: payloadObj.id,
      email: payloadObj.email,
      name: payloadObj.name,
      verified: payloadObj.verified,
      profile: payloadObj.profile
    }
  }
}

export const jwt = new Jwt()
