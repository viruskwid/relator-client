import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import lap from '../assets/laptop.png'
function DashBoard() {
 const navigate = useNavigate()
  const tologin =()=>{
    navigate('/home')
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
  <div class="container">
  <Link to={'/'} className='text-decoration-none text-light fs-4 navbar-brand'> <i class="fa-solid fa-house-laptop me-2 fs-2"></i>R<span className='text-success fw-semibold '>E</span>LATOR</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link  class="nav-link fw-bolder   text-success " aria-current="page" href="#"></Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link text-light " href="#"></Link>
        </li>
        <li class="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>
<div style={{height:'100vh',width:'auto' ,}} className='bg-dark d-flex  justify-content-center  mt-5'>
        <div style={{height:'530px', width:'1300px'}} className='bg-dark shadow container-fluid '>
           <h1 className='text-white p-5'>Welcome <span className='text-success'>User</span></h1>
           <div className='row d-flex align-align-items-center  justify-content-center '>
               <div className="col-lg-6 ">
                <h4 className='text-white'>Welcome  to the <span><span className='text-success'>Kerala's No1</span> Property selling platform</span></h4>
                <div className=' text-end'>
                  <button onClick={tologin} className='btn btn-success text-center me-lg-5 mt-2'>Explore<i class="fa-solid fa-arrow-right ms-2"></i></button>
                </div>
               </div>
               <div className="col-lg-6  ">
                 <div > <img className='img-fluid '  style={{height:'560px', width:'auto',marginTop:'-200px'}}  src={lap} alt="" /></div>
               </div>
           </div>
        </div>
</div>
</>
  )
}

export default DashBoard