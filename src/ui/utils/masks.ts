/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable no-case-declarations */
export enum Masks {
  PHONE = 'PHONE',
  WHATSAPP = 'WHATSAPP',
  POSTAL_CODE = 'POSTAL_CODE',
}

export default class InputMasks {
  static execute (inputValue: string, typeOfMask: Masks): string {
    let value = inputValue
    switch (typeOfMask) {
      case Masks.PHONE:
        if (/^\(\d{2}(\))?$/.test(value)) return value
        value = value.replace(/\D/g, '')
        value = value.substring(0, 11)
        const dashRegex = value.length === 11 ? /(\d{5})(\d)/g : /(\d{4})(\d)/g
        value = value.replace(/^(\d{1})(\d)/g, '($1$2')
        value = value.replace(/(\d{2})(\d*)/g, '$1) $2')
        value = value.replace(dashRegex, '$1-$2')
        return value
      case Masks.WHATSAPP:
        if (/^\(\d{2}(\))?$/.test(value)) return value
        value = value.replace(/\D/g, '')
        value = value.substring(0, 11)
        value = value.replace(/^(\d{1})(\d)/g, '($1$2')
        value = value.replace(/(\d{2})(\d*)/g, '$1) $2')
        value = value.replace(/(\d{5})(\d)/g, '$1-$2')
        return value
      case Masks.POSTAL_CODE:
        value = value.replace(/\D/g, '')
        value = value.replace(/^(\d{5})(\d)/g, '$1-$2')
        return value
      default:
        return value
    }
  }
}
