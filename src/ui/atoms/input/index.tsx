/* eslint-disable multiline-ternary */
import { FormControl, FormLabel, Input as ChInput, InputGroup, FormErrorMessage, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import { ForwardedRef, forwardRef } from 'react'
import { ErrorConfig } from '../../hooks/use-field-validator'
import InputMasks, { Masks } from '../../utils/masks'

interface Props {
  type: 'email' | 'password' | 'text' | 'number'
  name: string
  error?: ErrorConfig
  label?: string
  onChange?: any
  placeholder?: string
  mask?: Masks
  initial?: any
  min?: number
}

const Input = ({ label, type, name, error, onChange, placeholder, mask, initial, min }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <FormControl isInvalid={!!error?.state}>
      {label && <FormLabel fontSize='1.6rem'>{label}:</FormLabel>}
      <InputGroup size={'md'}>
        {type === 'number' ? (
          <NumberInput
            defaultValue={initial}
            clampValueOnBlur={false}
            min={min}
            onChange={onChange}
          >
            <NumberInputField
              fontSize='1.6rem'
              height='5rem'
              borderRadius='20px'
            />
            <NumberInputStepper width='3rem'>
              <NumberIncrementStepper fontSize='1.2rem' />
              <NumberDecrementStepper fontSize='1.2rem' />
            </NumberInputStepper>
          </NumberInput>
        ) : (
          <ChInput
            fontSize='1.6rem'
            type={type}
            name={name}
            ref={ref}
            height='5rem'
            borderRadius='20px'
            onChange={(evt) => {
              if (mask) {
                evt.target.value = InputMasks.execute(evt.target.value, mask)
              }
              if (onChange) {
                onChange(evt)
              }
            }}
            placeholder={placeholder}
            defaultValue={initial}
          />
        )}
      </InputGroup>
      {error?.state && <FormErrorMessage fontSize='1.4rem'>{error?.state.message}</FormErrorMessage>}
    </FormControl>
  )
}

export default forwardRef(Input)
