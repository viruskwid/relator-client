import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Card, Col, Row} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const  navigate = useNavigate()
 const handleView= ()=>{
     navigate('/view')
 }
  return (
    <div>
      <Header/>
      <div  style={{height:'auto',width:'auto'}} className='bg-dark  w-auto  '  data-bs-theme="dark">
        <div style={{height:'25%'}} className='w-100 bg-black d-flex  justify-content-center  align-content-center  '>
        <div class="dropdown me-5 mb-2">
  <button class="btn btn-outline-success  text-light  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter Price
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">1 Lakh  - 10 Lakh </a></li>
    <li><a class="dropdown-item" href="#">20 Lakh - 50 Lakh</a></li>
    <li><a class="dropdown-item" href="#">60 Lakh - 2 core</a></li>
    <li><a class="dropdown-item" href="#">3 core - 5 core</a></li>
    <li><a class="dropdown-item" href="#">5 core above</a></li>
  </ul>
</div>

<div class="dropdown ms-5 mb-2">
  <button class="btn btn-outline-success  text-light  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Location
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Thiruvananthapuram</a></li>
    <li><a class="dropdown-item" href="#">Kollam</a></li>
    <li><a class="dropdown-item" href="#">Alappuzha</a></li>
    <li><a class="dropdown-item" href="#">Pathanamthitta</a></li>
    <li><a class="dropdown-item" href="#">Kottayam</a></li>
    <li><a class="dropdown-item" href="#">Idukki</a></li>
    <li><a class="dropdown-item" href="#">Ernakulam</a></li>
    <li><a class="dropdown-item" href="#">Thrissur</a></li>
    <li><a class="dropdown-item" href="#">Palakkad</a></li>
    <li><a class="dropdown-item" href="#">Malappuram</a></li>
    <li><a class="dropdown-item" href="#">Kozhikode</a></li>
    <li><a class="dropdown-item" href="#">Wayanad</a></li>
    <li><a class="dropdown-item" href="#">Kannur</a></li>
    <li><a class="dropdown-item" href="#">Kasaragod</a></li>
  </ul>
</div> 
   <div className='ms-5 mb-2'>
   <button onClick={handleShow} class="btn btn-outline-success  text-light ms-5" type="button">
    Sell <i class="fa-regular fa-square-plus text-success ms-3 "></i>
  </button>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton  className='bg-black'>
          <Modal.Title className='text-light fw-semibold '>Sell your property</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='bg-black'>
           <div className="row">
            <div className="col-lg-6">
            <label className='text-center me-5'> 
         <input style={{display:'none'}} type='file' />
         <img className='rounded bg-white ' width={'200px'} height={'200px'} src='https://cdn-icons-png.flaticon.com/512/4211/4211763.png' alt="upload image" />
         <h6 className='text-center text-white mt-2'>Add photos</h6>
         </label>
            </div>
            <div className="col-lg-6">
            <div  className="flex-column">
        <label className='text-light fw-normal '>Title </label>
      </div>
      <div className="inputForm">
        <input type="text" className="input bg-black text-white" placeholder="Enter Title" />
      </div>
      <div  className="flex-column">
        <label className='text-light fw-normal ' >Location </label>
      </div>
      <div className="inputForm bg-black">
      <select style={{width:'260px'}} class="form-control bg-black border-0 text-light " id="exampleFormControlSelect1">
      <option><a class="dropdown-item active" href="#">Thiruvananthapuram</a></option>
    <option><a class="dropdown-item" href="#">Kollam</a></option>
    <option><a class="dropdown-item" href="#">Alappuzha</a></option>
    <option><a class="dropdown-item" href="#">Pathanamthitta</a></option>
    <option><a class="dropdown-item" href="#">Kottayam</a></option>
    <option><a class="dropdown-item" href="#">Idukki</a></option>
    <option><a class="dropdown-item" href="#">Ernakulam</a></option>
    <option><a class="dropdown-item" href="#">Thrissur</a></option>
    <option><a class="dropdown-item" href="#">Palakkad</a></option>
    <option><a class="dropdown-item" href="#">Malappuram</a></option>
    <option><a class="dropdown-item" href="#">Kozhikode</a></option>
    <option><a class="dropdown-item" href="#">Wayanad</a></option>
    <option><a class="dropdown-item" href="#">Kannur</a></option>
    <option><a class="dropdown-item" href="#">Kasaragod</a></option>
    </select>      </div>
      <div  className="flex-column">
        <label className='text-light fw-normal '>Price </label>
      </div>
      <div className="inputForm">
        <input type="text" className="input bg-black text-light" placeholder="Enter price" />
      </div>
            </div>
           </div>
        </Modal.Body>
        <Modal.Footer  className='bg-black'>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>
   </div>

        </div>


          <div className='bg-dark  w-auto  d-flex justify-content-center   align-align-items-center'>
            <Row  className='container mt-5 '>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
         <Link to={'/view'}> <Card.Img style={{height:'230px'}} className='w-100'  variant="top" src="https://www.keralarealestate.com/image/sm/property/property/2024/02/02/055851226/images/bf4e7abe-2f8b-4aa4-9339-80110350ff3b.jpg" /></Link >
          <Card.Body>
            <Card.Title>Villa for sale in Kizhkabalam, 1500 sqft</Card.Title>
            <Card.Text className='text-warning '>
             76 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
         <Link to={'/view'}> <Card.Img style={{height:'230px'}} className='w-100'  variant="top" src="https://imagecdn.99acres.com/media1/23096/2/461922866M-1702723767929.jpg" /></Link >
          <Card.Body>
            <Card.Title>House for sale in Kottayi, 1900 sqft</Card.Title>
            <Card.Text className='text-warning '>
             43 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
         <Link to={'/view'}> <Card.Img className='w-100' style={{height:'230px'}}  variant="top" src="https://is1-3.housingcdn.com/01c16c28/914945361506a18647dc0e4970165313/v0/fs/4_bhk_independent_house-for-sale-angamaly-Kochi-others.jpg" /></Link>
          <Card.Body>
            <Card.Title>House for sale in Athani, Nedumbassery, 2600 sqft</Card.Title>
            <Card.Text className='text-warning '>
             1.3 Cores
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
          <Link to={'/view'}><Card.Img className='w-100' style={{height:'230px'}}  variant="top" src="https://www.buykerala.properties/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-15-at-9.48.03-AM-680x510.jpeg" /></Link>
          <Card.Body>
            <Card.Title>House for sale in Thalore, Thrissur, 3500 sqft</Card.Title>
            <Card.Text className='text-warning'>
             2.4 Cores
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '1r8em' , height:'406px' }}>
          <Link to={'/view'}><Card.Img className='w-100'  style={{height:'230px'}}  variant="top" src="https://2.bp.blogspot.com/-TcPtN6yOAO8/WIslcgduiJI/AAAAAAAA-9k/gopvzMPemGIefkBrMUVUuC5D8F0LmE3fQCLcB/s1920/2017-house-for-sale-thodupuzha.jpg" /></Link>
          <Card.Body>
            <Card.Title>Villa for sale in Kizhkabalam, 1500 sqft</Card.Title>
            <Card.Text className='text-warning '>
             75 Lakhs
            </Card.Text>
            <Button onClick={handleView}   style={{backgroundColor:'black',}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
               <Link to={'/view'}><Card.Img className='w-100' style={{height:'230px'}}  variant="top" src="https://www.kannurproperty.com/img_property/awx47yjvnks2ea.JPG" /></Link>
          <Card.Body>
            <Card.Title>House for sale in Chittattukara,1850 sqft</Card.Title>
            <Card.Text className='text-warning '>
             57 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
          <Link to={'/view'}><Card.Img className='w-100' style={{height:'230px'}}  variant="top" src="https://realestateworld.in/images/kerala_real_estate_ad54260923IM.jpg" /></Link>
          <Card.Body>
            <Card.Title>Villa for sale in Kizhkabalam, 1500 sqft</Card.Title>
            <Card.Text className='text-warning '>
             75 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
          <Link to={'/view'}><Card.Img className='w-100' style={{height:'230px'}}  variant="top" src="https://www.track2realty.track2media.com/wp-content/uploads/2011/02/overvew.jpg" /></Link>
          <Card.Body>
            <Card.Title>Plot with old house for sale in Angamaly, 5 cents</Card.Title>
            <Card.Text className='text-warning '>
             67 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
          <Link to={'/view'}><Card.Img className='w-100' style={{height:'230px'}}  variant="top" src="https://www.keralarealestate.com/image/sm/property/property/2023/07/28/122855106/images/a67373c1-77af-433c-a17c-9213720c5cce.jpg" /></Link>
          <Card.Body>
            <Card.Title>House for sale in Karikode, Mulanthuruthy</Card.Title>
            <Card.Text className='text-warning '>
             70 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
               <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
               <Card className='bg-black shadow' style={{ width: '18rem' , height:'406px' }}>
         <Link to={'/view'}> <Card.Img className='w-100'  style={{height:'230px'}}  variant="top" src="https://www.thithithara.com/storage/property/images/1497_image_1695373616.jpg" /></Link>
          <Card.Body>
            <Card.Title>New premium home for sale in Kunnamangalam, Calicut</Card.Title>
            <Card.Text className='text-warning '>
             75 Lakhs
            </Card.Text>
            <Button onClick={handleView} style={{backgroundColor:'black'}} className='btn text-success border-success  mt-3'>More Details<i class="fa-solid fa-arrow-right ms-2"></i></Button>
          </Card.Body>
        </Card>
               </Col>
  
  
            </Row>
          </div>
          
      </div>
      <Footer/>
    </div>
  )
}

export default Home