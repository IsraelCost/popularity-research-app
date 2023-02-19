export interface IStorage {
  get: (key: StorageKeys) => any
  set: (key: StorageKeys, value: any, expires?: number, path?: string) => void
  delete: (key: StorageKeys) => void
}

export enum StorageKeys {
  AUTH_TOKEN = 'auth-token',
  DEVICE_CODE = 'device-code',
  VOTED_QUESTIONS = 'voted-questions'
}
