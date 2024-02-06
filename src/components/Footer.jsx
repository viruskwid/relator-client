import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: 'auto' }} className='container-fluid w-auto mt-4 bg-black shadow '>
    <div className="footer-content d-flex justify-content-between row ">
      <div className="title w-25 col-lg-3 mt-3">
      <Link to={'/home'} className='text-decoration-none text-light fs-4'> <i class="fa-solid fa-house-laptop me-2 fs-2"></i>RELATOR</Link>
      <br />
        <span style={{fontSize:'14px',pointerEvents:'none'}} className='mt-5 text-light '>
       <span className='text-success fw-bold fs-6'> Kerala's n</span> No 1 property selling app, revolutionizes real estate transactions with user-friendly features, 

        </span><br />
        <span className='text-success' style={{fontSize:'14px',pointerEvents:'none'}}>Currently v5.3.2</span>
      </div>
      <div className="links d-flex flex-column col-lg-3 mt-3">
        <h4 className='text-light' style={{pointerEvents:'none'}}>Links</h4>
        <Link className='text-success' to={'/home'} style={{   textDecoration:'none' }}>Home</Link>
        <Link className='text-light' to={'/dashboard'} style={{ color: 'Black', textDecoration:'none' }}>Dashboard</Link>
        <Link className='text-light' to={'/profile'} style={{ color: 'Black', textDecoration:'none' }}>Profile</Link>
      </div>

      <div className="guides d-flex flex-column col-lg-3 mt-3">
        <h4 className='text-light' style={{pointerEvents:'none'}}>Guides</h4>
        <a  className='text-decoration-none text-success' href="">React</a>
        <a  className='text-decoration-none text-success' href="">React Bootstrap</a>
        <a  className='text-decoration-none text-success' href="">React Routing</a>
      </div>
      <div className="contact d-flex flex-column col-lg-3 mt-3">
        <h4 className='text-light' style={{pointerEvents:'none'}}>Contact Us</h4>
        <div className='d-flex'> 
        <input type="text" placeholder='Enter your mail' className='form-control' />
        <button className='btn btn-success ms-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>          
        <div style={{ color: 'black' }} className="icons mt-3 d-flex justify-content-between ">
          <Link to={'/'} className='text-decoration-none text-success'> <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i></Link>
          <Link to={'/'} className='text-decoration-none text-light'><i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'/'} className='text-decoration-none text-light'><i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i></Link>
          <Link to={'/'} className='text-decoration-none text-light'><i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i></Link>
          <Link to={'/'} className='text-decoration-none text-light'><i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'/'} className='text-decoration-none text-light'><i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i></Link>

        </div>


      </div>



    </div> 
    <p style={{fontSize:'14px',pointerEvents:'none'}} className='text-center mt4 text-success '>Copyright &copy;2024 Relator App . Build with React.</p>
  </div>
  )
}

export default Footer