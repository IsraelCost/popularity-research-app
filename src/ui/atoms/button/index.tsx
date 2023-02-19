/* eslint-disable @typescript-eslint/ban-types */
import { Button as ChButton } from '@chakra-ui/react'
import { ForwardedRef, forwardRef } from 'react'

interface Props {
  text: string
  color?: string
  textColor?: string
  onClick?: Function
}

const Button = ({ text, onClick, color, textColor }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <ChButton
      ref={ref}
      background={color ?? '#E36565'}
      color={textColor ?? '#fff'}
      height='3.6rem'
      width='max-content'
      fontSize='1.4rem'
      margin='auto'
      padding='2.5rem 3.5rem'
      borderRadius='20px'
      _hover={{ background: color ?? '#e36565dd' }}
      onClick={onClick as any}
    >
      {text}
    </ChButton>
  )
}

export default forwardRef(Button)
