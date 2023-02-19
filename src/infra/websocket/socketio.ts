/* eslint-disable @typescript-eslint/ban-types */
import { io, Socket } from 'socket.io-client'
import { IWebSocket } from './contracts/websocket'

export class SocketIoAdapter implements IWebSocket {
  private socket!: Socket

  init (socketUri: string, callback: Function): void {
    this.socket = io(socketUri, {
      transports: ['websocket']
    })
    this.socket.on('connect', () => {
      console.log('Connected to socket')
      callback()
    })
  }

  emit (eventName: string, data: any): void {
    if (!this.socket) throw new Error('Erro ao inicializar o websocket')
    this.socket.emit(eventName, data)
  }

  on (eventName: string, callback: Function): void {
    if (!this.socket) throw new Error('Erro ao inicializar o websocket')
    this.socket.on(eventName, async (data: any) => {
      await callback(data)
    })
  }

  disconnect (): void {
    this.socket.disconnect()
  }
}

export const websocket = new SocketIoAdapter()

websocket.init('http://localhost:4040', () => {})
