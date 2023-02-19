/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-useless-escape */
import validator from 'validator'
import { FieldValidatorProps, ValidationType } from '../hooks/use-field-validator'

export default class FormValidator {
  readonly CAMPO_VAZIO = 'Campo vazio.'
  readonly EMAIL_INVALIDO = 'Email inválido.'

  readonly SENHA_INVALIDA = 'Senha fraca.'
  readonly PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@_!#$^&*()<>?/}{\[\]\\\|~:]).{8,}$/

  readonly NOME_INVALIDO = 'Nome inválido.'
  readonly NAME_REGEX = /^([a-zA-ZÀ-ú']{1,40}(\s+|$)){2,}$/

  readonly PHONE_INVALIDO = 'Telefone inválido.'
  readonly PHONE_REGEX = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3,4})-?(\d{4}))$/

  readonly POSTAL_CODE_INVALID = 'CEP inválido'
  readonly POSTAL_CODE_REGEX = /^[0-9]{5}-[0-9]{3}$/

  readonly SITE_INVALID = 'Site inválido. (Ex: https://www.meusite.com ou meusite.com)'
  readonly SITE_REGEX = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9=]*)$/

  private _counterErrors: number = 0

  constructor (private readonly formFields: Array<FieldValidatorProps<any>>) { }

  set counterErrors (value: number) {
    this._counterErrors = value
  }

  get counterErrors (): number {
    return this._counterErrors
  }

  execute () {
    this.resetErrors()
    this.checkNullableValues()

    this.formFields.forEach(field => {
      const validationTypes = field.validationTypes

      for (const validationType of validationTypes) {
        switch (validationType) {
          case ValidationType.EMAIL:
            this.validateEmailField(field)
            break
          case ValidationType.PASSWORD:
            this.validatePasswordField(field)
            break
          case ValidationType.NAME:
            this.validateNameField(field)
            break
          case ValidationType.PHONE:
            this.validatePhoneField(field)
            break
          case ValidationType.POSTAL_CODE:
            this.validatePostalCodeField(field)
            break
          case ValidationType.SITE:
            this.validadeSiteField(field)
            break
          default:
            break
        }

        if (field.errorConfig.state) continue
      }
    })
    return this.counterErrors
  }

  cleanFields (additionalFields: Array<FieldValidatorProps<any>> = []) {
    const fieldsToClean: Array<FieldValidatorProps<any>> = [
      ...additionalFields,
      ...this.formFields
    ]

    fieldsToClean.forEach(field => {
      field.ref.current.value = ''
    })
  }

  private resetErrors () {
    this.formFields.forEach(field => { field.errorConfig?.setState(null) })
  }

  private checkNullableValues (): void {
    this.formFields.forEach(field => {
      const currentField = field.ref?.current
      const errorConfig = field.errorConfig
      if (this.isFile(currentField?.type) && !currentField?.files?.length) {
        errorConfig?.setState({ message: this.CAMPO_VAZIO })
        this.counterErrors++
        return
      }
      const defaultValue = currentField?.getAttribute('data-defaultvalue')
      const inputValue = defaultValue ? currentField.value.replace(defaultValue, '') : currentField?.value
      if (validator.isEmpty(inputValue ?? '')) {
        errorConfig?.setState({ message: this.CAMPO_VAZIO })
        this.counterErrors++
      }
    })
  }

  private isFile (type: string | undefined): boolean {
    return type === 'file'
  }

  private validateEmailField (
    field: FieldValidatorProps<HTMLInputElement>
  ): void {
    const value = field.ref?.current?.value

    if (!value) return

    if (!validator.isEmail(value)) {
      field.errorConfig?.setState({ message: this.EMAIL_INVALIDO })
      this.counterErrors++
    }
  }

  private validatePasswordField (
    field: FieldValidatorProps<HTMLInputElement>
  ): void {
    const value = field.ref?.current?.value
    if (!value) return

    if (!this.PASSWORD_REGEX.test(value)) {
      field.errorConfig?.setState({ message: this.SENHA_INVALIDA })
      this.counterErrors++
    }
  }

  private validateNameField (
    field: FieldValidatorProps<HTMLInputElement>
  ): void {
    const value = field.ref?.current?.value
    if (!value) return

    if (!this.NAME_REGEX.test(value)) {
      field.errorConfig?.setState({ message: this.NOME_INVALIDO })
      this.counterErrors++
    }
  }

  private validatePhoneField (field: FieldValidatorProps<HTMLInputElement>) {
    const value = field?.ref?.current?.value
    if (!value) return
    if (!this.PHONE_REGEX.test(value)) {
      field.errorConfig?.setState({ message: this.PHONE_INVALIDO })
      this.counterErrors++
    }
  }

  private validatePostalCodeField (field: FieldValidatorProps<HTMLInputElement>) {
    // @ts-expect-error
    const { value } = field?.ref?.current
    if (!value) return

    if (!this.POSTAL_CODE_REGEX.test(value)) {
      field.errorConfig?.setState({ message: this.POSTAL_CODE_INVALID })
      this.counterErrors++
    }
  }

  private validadeSiteField (field: FieldValidatorProps<HTMLInputElement>): void {
    // @ts-expect-error
    const { value } = field?.ref?.current
    if (!value) return

    if (!this.SITE_REGEX.test(value)) {
      field.errorConfig?.setState({ message: this.SITE_INVALID })
      this.counterErrors++
    }
  }
}
