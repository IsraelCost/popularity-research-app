/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Alert, AlertIcon, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApplicationError } from '../../../entities/error'
import { User, UserProfile } from '../../../entities/user'
import { authGateway } from '../../../infra/gateways/auth'
import { StorageKeys } from '../../../infra/storage/contracts/storage'
import { storage } from '../../../infra/storage/cookies'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import { useAuthContext } from '../../context/auth'
import useFieldValidator, { ValidationType } from '../../hooks/use-field-validator'
import FormValidator from '../../utils/form-validator'
import * as S from './styled'

const LoginForm = () => {
  const emailFieldValidator = useFieldValidator([])
  const passwordFieldValidator = useFieldValidator([ValidationType.PASSWORD])

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { setData } = useAuthContext()

  const navigate = useNavigate()

  const handler = async () => {
    // validation
    const formValidator = new FormValidator([
      emailFieldValidator, passwordFieldValidator
    ])
    if (formValidator.execute()) return
    const { ref: emailRef } = emailFieldValidator
    const { ref: passwordRef } = passwordFieldValidator
    const email = emailRef.current?.value!
    const password = passwordRef.current?.value!
    try {
      setLoading(true)
      const { jwt, ...userData } = await authGateway.signIn({ email, password })
      if (userData.profile !== UserProfile.ROOT) throw new ApplicationError('Usuário não tem permissões suficientes', 403)
      const user = new User()
      Object.assign(user, userData)
      storage.set(StorageKeys.AUTH_TOKEN, jwt)
      setData(user, jwt)
      navigate('/admin/surveys')
    } catch (error) {
      setLoading(false)
      setError(JSON.stringify(error))
    }
  }

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Form>
        <Input
          ref={emailFieldValidator.ref}
          error={emailFieldValidator.errorConfig}
          type='email'
          name='email'
          label='Email'
        />
        <Input
          ref={passwordFieldValidator.ref}
          error={passwordFieldValidator.errorConfig}
          type='password'
          name='password'
          label='Senha'
        />
      </S.Form>
      {loading && <Spinner size='lg' alignSelf='center' />}
      {error && (
        <Alert status='error' size='lg'>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Button text='Continuar' onClick={handler} />
    </S.Container>
  )
}

export default LoginForm
