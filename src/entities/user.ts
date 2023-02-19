export enum UserProfile {
  ACCESS = 'access',
  ROOT = 'root'
}

export class User {
  public id!: string
  public email!: string
  public name!: string
  public verified!: boolean
  public profile!: UserProfile
}
