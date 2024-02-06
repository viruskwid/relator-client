import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import MyProperties from '../components/MyProperties'

function Profile() {
  const  navigate = useNavigate()
  const handleLogOut= ()=>{
      navigate('/')
  }
  return (
    <>
    <div style={{height:'auto'}} className='bg-dark w-100 '>
    <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
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
          
        </li>
      </ul>
      <div className='ms-3 mt-lg-0  mt-md-2  mt-sm-2'>
        <button onClick={handleLogOut} className='btn  btn-danger text-light'>Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2"></i></button>
        </div>
    </div>
  </div>
</nav>
      <div className="row">

        <div className="col-lg-6 ">
          <div  style={{height:'400px'}}  className='bg-black w-100 mt-5 ms-5 rounded  shadow '>
             <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 d-flex  justify-content-center  align-items-center ">
              <label className='text-center me-5'> 
         <input style={{display:'none'}} type='file' />
         <img className='rounded-circle' width={'150px'} height={'150px'} src='https://www.asterhospitals.in/sites/default/files/2023-05/dr-srinivas-kowshik-malluri-pediatrician-and-neonatologist-in-kerala.jpg' alt="upload image" />
         <h6 className='text-center text-white mt-1'>Change Profile Photo</h6>
         </label>
              </div>
              <div className="col-lg-6">
                <div style={{height:'320px'}} className='bg- shadow rounded w-100 mt-5 me-5 text-light'>
                 <div style={{height:'50px'}} className=''>
                    <label htmlFor="username">
                     Username<span className='ms-1'> :</span>
                    </label>
                    <input style={{pointerEvents:'none',height:'40px'}} className=' ms-1  rounded bg-black border-success  border-0  text-light fw-bold ' type="text"  placeholder='Vimal Kumar' />
                    <button className='btn btn-light ms-1'><i class="fa-solid fa-pen-to-square"></i></button>
              
                 </div>
                 
                 <hr className='mt-3' style={{color:'white',width:'40%'}}/>
                  <div className='mt-3'>
                    <label htmlFor="phone">
                     Phone   <span className='ms-1'> :</span>
                    </label>
                    <input style={{pointerEvents:'none'}} className='ms-1  rounded bg-black border-black  border-0  text-light fw-bold  ' type="text"  placeholder='+91 7483946555' />
                    <button className='btn btn-light ms-5'><i class="fa-solid fa-pen-to-square"></i></button>
                  </div>
                  <hr className='mt-3' style={{color:'white',width:'40%'}}/>

                  <div className='mt-3'>
                    <label htmlFor="Address">
                     Address   <span className='ms-1'> :</span>
                    </label>
                    <input style={{pointerEvents:'none'}} className='ms-1  rounded bg-black border-black  border-0  text-light fw-bold  ' type="text"  placeholder='Lisa House Mankunn PO Kochi Kerala' />
                    <button className='btn btn-light ms-4'><i class="fa-solid fa-pen-to-square"></i></button>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-1"></div>
             </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-3  ">
          <h5 className='text-light mt-3 ms-5'>My Properties</h5>
          <hr className='mt-3 ms-5' style={{color:'white',width:'30%'}}/>
          <div className='bg-black w-auto h-auto me-5'>

              <MyProperties/>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Profile