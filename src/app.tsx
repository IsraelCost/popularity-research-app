import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Global from './global'
import { AuthStore } from './ui/context/auth'
import Admin from './ui/pages/admin'
import CityPage from './ui/pages/city'
import CityCreatePage from './ui/pages/city-create'
import CityEditPage from './ui/pages/city-edit'
import LoginPage from './ui/pages/login'
import Main from './ui/pages/main'
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
            <Route path='/' element={<Main />}>
              <Route path='/vote/:id' element={<VotePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/admin' element={<Admin />}>
                <Route path='/admin/surveys' element={<SurveysPage />} />
                <Route path='/admin/surveys/create' element={<SurveyCreatePage />} />
                <Route path='/admin/surveys/:id' element={<SurveyPage />} />
                <Route path='/admin/surveys/:id/edit' element={<SurveyEditPage />} />
                <Route path='/admin/cities/create' element={<CityCreatePage />} />
                <Route path='/admin/cities/:id' element={<CityPage />} />
                <Route path='/admin/cities/:id/edit' element={<CityEditPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthStore>
    </ChakraProvider>
  )
}

export default App
