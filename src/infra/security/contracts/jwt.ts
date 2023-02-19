import { UserProfile } from '../../../entities/user'

export interface IJwt {
  decode: (token: string) => JwtPayload
}

export type JwtPayload = {
  id: string
  email: string
  name: string
  verified: boolean
  profile: UserProfile
}
