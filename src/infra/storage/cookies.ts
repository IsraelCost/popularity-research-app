import Cookies from 'js-cookie'
import { IStorage, StorageKeys } from './contracts/storage'

const ONE_DAY = 60 * 60 * 24

export class CookiesStorage implements IStorage {
  private readonly cookies: typeof Cookies = Cookies

  set (key: StorageKeys, value: any, expires: number = ONE_DAY, path: string = '/'): void {
    this.cookies.set(key, value, { expires, path })
  }

  get (key: StorageKeys): any {
    return this.cookies.get()[key]
  }

  delete (key: StorageKeys): void {
    this.cookies.remove(key)
  }
}

export const storage = new CookiesStorage()
