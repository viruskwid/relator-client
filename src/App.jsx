
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import DashBoard from './pages/DashBoard'
import Profile from './pages/Profile'
import View from './pages/View'
import Register from './pages/Register'
function App() {

  return (
    <div className='bg-dark'>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Auth/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/view' element={<View/>}/>        
        <Route path='/*' element={<Navigate to={'/home'}/>}/>
        </Routes> 
    </div>
  )
}

export default App
