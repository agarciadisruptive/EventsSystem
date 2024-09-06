import { CategoriesProvider } from './context/CategoriesContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import ProtectedRoute from './pages/ProtectedRoute'
import CategoriesPage from './pages/CategoriesPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<h1><HomePage/></h1>}/>
              <Route path='/categories' element={<CategoriesPage/>}/>
              <Route path='/create_category' element={<h1>Create Category</h1>}/>
              <Route path='/categories/:id' element={<h1>Category</h1>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoriesProvider>
    </AuthProvider>
  )
}

export default App
