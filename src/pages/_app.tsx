import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Global from '../global'
import { AuthStore } from '../ui/context/auth'
import Main from '../ui/main'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider>
        <AuthStore>
          <Global />
          <Main>
            <Component {...pageProps} />
          </Main>
        </AuthStore>
      </ChakraProvider>
    </>
  )
}

export default App
