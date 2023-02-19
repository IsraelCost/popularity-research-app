export class Base64Converter {
  convert (data: Blob | File): PromiseLike<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
      if (!data) reject(new Error('Failed to solve'))
      const reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result as any)
      }
      reader.onerror = () => { reject(new Error('Não foi possível converter o arquivo')) }
      reader.readAsDataURL(data)
    })
  }
}

export const base64Converter = new Base64Converter()
