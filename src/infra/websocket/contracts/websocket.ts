/* eslint-disable @typescript-eslint/ban-types */
export interface IWebSocket {
  init: (socketUri: string, callback: Function) => void
  emit: (eventName: string, data: any) => void
  on: (eventName: string, callback: (data: any) => any) => void
  disconnect: () => void
}
