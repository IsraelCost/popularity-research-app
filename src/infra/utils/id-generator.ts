import * as uuid from 'uuid'
import { IIdGenerator } from './contracts/id-generator'

export class IdGenerator implements IIdGenerator {
  generate (): string {
    return uuid.v4()
  }
}

export const idGenerator = new IdGenerator()
