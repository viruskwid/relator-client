import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import MyProperties from '../components/MyProperties'
import Header from '../components/Header'
import { UpdateUserProfileAPI, getUserPostAPI } from '../../Service/allAPIs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadProfile from '../assets/user.jpg'
import { SERVER_URL } from '../../Service/ServerUrl'

function Profile() {
  const navigate = useNavigate()
  const [myProperty,setMyProperty]=useState()
  const [editData,setEditData]=useState(false)
  const [userName , setUserName]=useState("")
  const [existingImage,setExistingImage]=useState("")
  const [userData,setUserData]=useState({
   username:JSON.parse(sessionStorage.getItem("userDetails")).username , email:JSON.parse(sessionStorage.getItem("userDetails")).email , password:JSON.parse(sessionStorage.getItem("userDetails")).password ,  phone:JSON.parse(sessionStorage.getItem("userDetails")).phone, location:JSON.parse(sessionStorage.getItem("userDetails")).location , profileImage:JSON.parse(sessionStorage.getItem("userDetails")).profileImage
  })
  console.log(userData);
   const [preview,setPreview]=useState() 
   useEffect(()=>{
    if (sessionStorage.getItem("userDetails")) {
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
      setUserData({username:userDetails.username,email:userDetails.email,password:userDetails.password,phone:userDetails.phone,location:userDetails.location,profileImage:""})
      setExistingImage(userDetails.profileImage)
      console.log(userDetails);
   }
   },[sessionStorage.getItem("userDetails")])  
   useEffect(()=>{
    if(userData.profileImage.type=="image/png" || userData.profileImage.type=="image/jpg" || userData.profileImage.type=="image/jpeg" ){
          console.log("generate image url");
          setPreview(URL.createObjectURL(userData.profileImage))

    }else{
      console.log("invalid fromat");
      setUserData({...userData,profileImage:""})
      setPreview("")
    }

  },[userData.profileImage])
  console.log(existingImage);
 const edit =()=>{
  setEditData(true)
 }

 const handleProfileUpdate = async()=>{
  const {username,email,password,phone,location,profileImage} = userData
  if (!username ||!location ||!profileImage) {
   toast.warn("please fill the fields Completely")
   
  }else{
   //proceed to api call
   const reqBody = new FormData()
   reqBody.append("username",username)
   reqBody.append("email",email)
   reqBody.append("password",password)
   reqBody.append("phone",phone)
   reqBody.append("location",location)
   preview?reqBody.append("profileImage",profileImage):reqBody.append("profileImage",existingImage)
 const token = sessionStorage.getItem("token")
 if (token) {
   const reqHeader={
     "Content-Type":preview?"multipart/form-data":"application/json",
     "Authorization":`Bearer ${token}`
   }
   //api call
   try{
     const result = await UpdateUserProfileAPI(reqBody,reqHeader)
     if (result.status==200) {
      console.log(result.data);
       sessionStorage.setItem("userDetails" ,JSON.stringify(result.data))
       toast.success("Your Profile Successfully updated")
    setTimeout(() => {
      navigate('/home')
    }, 2000);
     }else{
       console.log(result);
     }
   }catch(err){
        console.log(err);
   }
 }

  }
 }
 const myPost = async()=>{
      const result = await getUserPostAPI(JSON.parse(sessionStorage.getItem("userDetails")).phone)
      if (result.status==200) {
        console.log(result.data);
        setMyProperty(result.data)
      }else{
        console.log(result.response);
      }
 }
 useEffect(()=>{
    myPost()
 },[])
  return (
    <>
    <Header/>
    <div  style={{backgroundColor:'#0E0F0F',height:'80vh'}} className=' w-100'>
     
      <div  className="row d-flex align-items-center  justify-content-center ">

        <div className="col-lg-5">
          <div  style={{height:'auto'}}  className='bg-black w-100 mt-5 rounded  shadow '>
             <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4 d-flex  justify-content-center  align-items-center ">
              <label className='text-center me-5'> 
         <input style={{display:'none'}} type='file' onChange={e=>setUserData({...userData,profileImage:e.target.files[0]})} />
         {existingImage==""?<img className='rounded-circle' width={'200px'} height={'200px'} src={preview?preview:uploadProfile} alt="upload image" />:<img className='rounded-circle' width={'200px'} height={'200px'} src={preview?preview: `${SERVER_URL}/uploads/${existingImage}`} alt="upload image" />}
         <h6 className='text-center text-white mt-1'>Change Profile Photo</h6>
         </label>
              </div>
              <div className="col-lg-6">
                <div style={{height:'320px'}} className='bg- shadow rounded w-100 mt-5 me-5 text-light'>
                <div className='d-flex justify-content-end '><button  onClick={edit} className='btn btn-light ms-5'><i class="fa-solid fa-pen-to-square"></i>Edit</button></div>

                 <div style={{height:'50px'}} className=''>
                    <label htmlFor="username">
                     Username<span className='ms-1'> :</span>
                    </label>
                    <input
                       style={{ pointerEvents: editData ? 'visible' : 'none', height: '40px' }}
                          onChange={e => setUserData({ ...userData, username: e.target.value })}
                         className='ms-1 rounded bg-black border-success border-0 text-light'
                        type="text"  
                       value={userData.username}
                        />
              
                 </div>
                 
                 <hr className='mt-3' style={{color:'white',width:'40%'}}/>
                  <div className='mt-3'>
                    
                    <label htmlFor="phone">
                     Phone   <span className='ms-1'> :</span>
                    </label>
                    <input style={{ pointerEvents: editData ? 'visible' : 'none', height: '40px' }}  onChange={e=>setUserData({...userData,phone:e.target.value})} className='ms-1  rounded bg-black border-black  border-0  text-light  ' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={userData.phone} />
                  </div>
                  <hr className='mt-3' style={{color:'white',width:'40%'}}/>

                  <div className='mt-3'>
                    <label htmlFor="Address">
                     Address   <span className='ms-1'> :</span>
                    </label>
                    <input style={{ pointerEvents: editData ? 'visible' : 'none', height: '40px' }}  onChange={e=>setUserData({...userData,location:e.target.value})} className='ms-1  rounded bg-black border-black  border-0  text-light ' type="text"  value={userData.location} />
                  </div>
                  <div className='mt-3'>
                    <button onClick={handleProfileUpdate} className='btn btn-success '>Update</button>
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
          <div style={{backgroundColor:'#0E0F0F'}}  className=' w-auto h-auto me-5'>

              {myProperty?.map((post)=>(<MyProperties post={post}/>))}
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
     
    </div>
    <ToastContainer
            autoClose={1000}
            theme="dark"
            position="top-center"
          />
    <Footer/>
    </>
  )
}

export default Profile