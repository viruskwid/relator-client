import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Card, Col, Row} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllPostAPI } from '../../Service/allAPIs'
import { SERVER_URL } from '../../Service/ServerUrl'

import Form from 'react-bootstrap/Form';
function Home() {
  const [searchKey , setSearchKey] = useState('')
  const [allPosts,setAllPosts]= useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const  navigate = useNavigate()
 const handleView= (pId)=>{
     navigate(`/view/${pId}`)
 }
 const getAllPosts = async ()=>{
  const result = await getAllPostAPI(searchKey)
  if (result.status==200) {
    setAllPosts(result.data)
  }else{
    console.log(result);
  }

 }
 



 const toPost=()=>{
  if(!JSON.parse(sessionStorage.getItem('userDetails')).location || !JSON.parse(sessionStorage.getItem('userDetails')).phone){
    toast.info("Please Update Your Profile")
    setTimeout(() => {
      navigate('/profile')
    }, 2000);
  }else{
    navigate('/post')
  }
 }
 const [selectedValue, setSelectedValue] = useState("");
 const [selectedLocation, setSelectedLocation] = useState("");
 console.log(selectedLocation);
 // Function to handle click on dropdown items
 const handleSelect = (value) => {
   setSelectedValue(value);
 };
 console.log(selectedValue);
 console.log(allPosts);
 useEffect(()=>{
  getAllPosts()
},[searchKey,selectedLocation])
  return (
    <div>
      <Header setSearchKey={setSearchKey} insidehome/>
      <div  style={{height:'auto',width:'auto',backgroundColor:'#0E0F0F'}} className=' w-auto  '  data-bs-theme="dark">
        <div style={{height:'25%'}} className='w-100 bg-black d-flex  justify-content-center  align-content-center  '>
        <div className="dropdown me-5 mb-2">
      <button
        className="btn btn-outline-success text-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter Price
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li><a className={`dropdown-item ${selectedValue === "100000-1000000" ? "active" : ""}`} onClick={() => handleSelect("100000-1000000")} href="#">1 Lakh  - 10 Lakh</a></li>
        <li><a className={`dropdown-item ${selectedValue === "2000000-5000000" ? "active" : ""}`} onClick={() => handleSelect("2000000-5000000")} href="#">20 Lakh - 50 Lakh</a></li>
        <li><a className={`dropdown-item ${selectedValue === "6000000-20000000" ? "active" : ""}`} onClick={() => handleSelect("6000000-20000000")} href="#">60 Lakh - 2 core</a></li>
        <li><a className={`dropdown-item ${selectedValue === "30000000-500000000" ? "active" : ""}`} onClick={() => handleSelect("30000000-500000000")} href="#">3 core - 5 core</a></li>
        <li><a className={`dropdown-item ${selectedValue === "50000000" ? "active" : ""}`} onClick={() => handleSelect("50000000")} href="#">5 core above</a></li>
      </ul>
    </div>
    <div>
    <Form.Select onChange={e=>setSelectedLocation(e.target.value)} style={{width:'125px'}} className='btn btn-outline-success  text-light  bg-black' aria-label="Default select example">
    <option value="" selected>Location</option>
                          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                          <option value="Kollam">Kollam</option>
                          <option value="Alappuzha">Alappuzha</option>
                          <option value="Pathanamthitta">Pathanamthitta</option>
                          <option value="Kottayam">Kottayam</option>
                          <option value="Idukki">Idukki</option>
                          <option value="Ernakulam">Ernakulam</option>
                          <option value="Thrissur">Thrissur</option>
                          <option value="Palakkad">Palakkad</option>
                          <option value="Malappuram">Malappuram</option>
                          <option value="Kozhikode">Kozhikode</option>
                          <option value="Wayanad">Wayanad</option>
                          <option value="Kannur">Kannur</option>
                          <option value="Kasaragod">Kasaragod</option>
    </Form.Select>
    </div>


 

        </div>


          <div style={{backgroundColor:'#0E0F0F'}} className='  w-auto  d-flex justify-content-center   align-align-items-center'>
            <Row  className='container mt-5'>
            <div  onClick={toPost} class="float">
            <i class="fa fa-plus my-float"></i>
             </div>
            {allPosts?.filter((post)=>(
              selectedLocation==""?post:post.location==selectedLocation 
              
            ))
            .map((post)=>(
               <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>

                <Card className='bg-black shadow' style={{ width: '18rem' , height:'436px' }}>
                <Link> <Card.Img style={{height:'230px'}} className='w-100'  variant="top" src={`${SERVER_URL}/uploads/${post?.postImage[0].filename}`} /></Link >
                 <Card.Body>
                   <Card.Title className='text-white'>{post?.title}</Card.Title>
                   <Card.Text className='text-warning '>
                    {post.price} <span>	&#8377;</span>
                   </Card.Text>
                   <p className='text-warning '>
                   <i class="fa-solid fa-location-dot me-2"></i> {post.location}
                   </p>
                   <Button onClick={()=>handleView(post?._id)} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
                 </Card.Body>
               </Card>
               </Col>
            )) }
               
            </Row>
          </div>
          
      </div>
      <Footer/>
      <ToastContainer
            autoClose={2000}
            theme="dark"
            position="top-center"
          />
    </div>
  )
}

export default Home