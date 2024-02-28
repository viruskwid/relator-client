
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import DashBoard from './pages/DashBoard'
import Profile from './pages/Profile'
import View from './pages/View'
import Register from './pages/Register'
import Post from './pages/Post'
import { useContext, useState } from 'react'
import { tokenAuthenticationContext } from './Context API/TokenAuth'
import Header from './components/Header'
import Footer from './components/Footer'
import Admin from './pages/Admin'
function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthenticationContext)
 
  return (
    <div style={{backgroundColor:'#0E0F0F'}}>
      
      <Routes>
        <Route path='/home' element={isAuthorised?<Home />:<Auth/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={isAuthorised?<DashBoard/>:<Auth/>}/>
        <Route path='/profile' element={isAuthorised?<Profile/>:<Auth/>}/>
        <Route path='/view/:pId' element={isAuthorised?<View/>:<Auth/>}/>        
        <Route path='/post' element={isAuthorised?<Post/>:<Auth/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
        <Route path='/adhome' element={isAuthorised?<Admin/>:<Auth/>}/>  
        </Routes> 
        
    </div>
  )
}

export default App
