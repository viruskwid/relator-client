import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addPostResponseContext } from '../Context API/Context'

function Header({insidehome,setSearchKey}) {
  const {addPostResponse,setPostResponse}=useContext(addPostResponseContext)
  const  navigate = useNavigate()
  const handleLogOut= ()=>{
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("email")
    
      navigate('/')
  }
  

  return (
    <div className='w-auto bg-black shadow '>
      <nav class="navbar navbar-expand-lg bg-body-dark" data-bs-theme="dark">
  <div class="container">
  <Link to={'/home'} className='text-decoration-none text-light fs-4 navbar-brand'> <i class="fa-solid fa-house-laptop me-2 fs-2"></i>R<span className='text-success fw-semibold '>E</span>LATOR</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/home'} class="nav-link fw-bolder   text-success " aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/dashboard'} class="nav-link text-light " href="#">Dashboard</Link>
        </li>
       <li class="nav-item">
          <Link to={'/profile'} class="nav-link text-light " href="#">Profile</Link>
        </li>
      </ul>
      {insidehome&&<form class="d-flex me-5" role="search">
      <input
  className="form-control me-2"
  type="search"
  placeholder="Search"
  aria-label="Search"
  onChange={(e)=>setSearchKey(e.target.value)}
/>
        {/* <button onClick={} class="btn btn-outline-success" type="submit">Search</button> */}
      </form>}
      <div className='ms-3 mt-lg-0  mt-md-2  mt-sm-2'>
        <button onClick={handleLogOut} className='btn  btn-danger text-light'>Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2"></i></button>
        </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header