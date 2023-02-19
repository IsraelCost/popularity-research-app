import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Global from './global'
import { AuthStore } from './ui/context/auth'
import Admin from './ui/pages/admin'
import LoginPage from './ui/pages/login'
import SurveyPage from './ui/pages/survey'
import SurveyCreatePage from './ui/pages/survey-create'
import SurveyEditPage from './ui/pages/survey-edit'
import SurveysPage from './ui/pages/surveys'
import VotePage from './ui/pages/vote'

const App = () => {
  return (
    <ChakraProvider>
      <Global />
      <AuthStore>
        <BrowserRouter>
          <Routes>
            <Route path='/vote/:id' element={<VotePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin' element={<Admin />}>
              <Route path='/admin/surveys' element={<SurveysPage />} />
              <Route path='/admin/surveys/create' element={<SurveyCreatePage />} />
              <Route path='/admin/surveys/:id' element={<SurveyPage />} />
              <Route path='/admin/surveys/:id/edit' element={<SurveyEditPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthStore>
    </ChakraProvider>
  )
}

export default App
