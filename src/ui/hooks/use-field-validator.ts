import {
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useState
} from 'react'
interface Error {
  message: string
}

export interface ErrorConfig {
  state: Error | null
  setState: Dispatch<SetStateAction<Error | null>>
}

export enum ValidationType {
  PASSWORD,
  EMAIL,
  NAME,
  PHONE,
  POSTAL_CODE,
  SITE,
}

export interface FieldValidatorProps<FieldRefType> {
  ref: RefObject<FieldRefType>
  errorConfig: ErrorConfig
  validationTypes: ValidationType[]
}

function useFieldValidator<FieldRefType = HTMLInputElement> (
  validationTypes: ValidationType[] = []
): FieldValidatorProps<FieldRefType> {
  const [state, setState] = useState<Error | null>(null)

  return {
    ref: createRef<FieldRefType>(),
    errorConfig: { state, setState },
    validationTypes
  }
}

export default useFieldValidator
