import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import addphotos from '../assets/addphotos.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './post.css'
import { Link, useNavigate } from 'react-router-dom'
import { addPostAPI } from '../../Service/allAPIs'
function Post() {
  const navigate = useNavigate()
  const [postData,setPostData] = useState({
    postImage:[],title:"",location:"",price:"",username:sessionStorage.getItem("username"),phone:JSON.parse(sessionStorage.getItem("userDetails")).phone  ,profilePhoto:JSON.parse(sessionStorage.getItem("userDetails")).profileImage

  })
  console.log(postData);
  const [preview,setPreview]=useState([])
  const [userDetails,setUserDetails] = useState([])

  useEffect(()=>{
    postData.postImage.length > 0 && 
    postData.postImage?.map((images)=>{
      setPreview([...preview, URL.createObjectURL(images)])
    })
  },[postData.postImage])

   const handleAddPost = async()=>{
    const { postImage,title,location,price,username,phone,profilePhoto}=postData
    if (!postImage || !title || !location || !price) {
      toast.warning("Add all the essential fields")
    }else{
      //api call - body
      const reqBody = new FormData()
     for(let i=0;i<=postImage.length;i++){
      reqBody.append('postImage',postImage[i])
     }
      reqBody.append('title',title)
      reqBody.append('location',location)
      reqBody.append('price',price)
      reqBody.append('username',username)
      reqBody.append('phone',phone)
      reqBody.append('profilePhoto',profilePhoto)
      setUserDetails(sessionStorage.getItem('userDetails'))
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        //api call
        try{
          const result = await addPostAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status===200){
             
            console.log(result.data);
            toast.success("post Added")
            setTimeout(() => {
              navigate('/home')
            }, 2000);
           
            
          } else{
            toast.warning(result.response.data)
            setTimeout(() => {
             
              navigate('/home')
            }, 2000);
          }
        }catch(err){
          console.log(err);
        }
      }
    

    }
   }
   console.log(userDetails);
   useEffect(()=>{

   },[])
  return (
    <>
  

    <Header/>
    <div  style={{backgroundColor:'#0E0F0F',height:'100vh'}} >
      <div className='mt-5'><h2 className='text-white fw-bolder  text-center'>Add your Property</h2></div>
      
      <div style={{height:'auto'}} className="row m-5  mb-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 bg-black rounded shadow ">
        <label className='text-center  m-4'> 
         <input name='postImage'  onChange={e=>setPostData({...postData,postImage:[...postData.postImage,e.target.files[0]]})} style={{display:'none'}} type='file' />
        {preview.length>0?<img className='img-fluid ' width={'50px'} height={'50px'} src={preview[0]} alt="" />: <img className='img-fluid ' width={'50px'} height={'50px'} src={addphotos} alt="" />}
         </label>
         <label className='text-center m-4'> 
         <input name='postImage'  onChange={e=>setPostData({...postData,postImage:[...postData.postImage,e.target.files[0]]})}  style={{display:'none'}} type='file' />
         {preview.length>1?<img className='img-fluid ' width={'50px'} height={'50px'} src={preview[1]} alt="" />: <img className='img-fluid ' width={'50px'} height={'50px'} src={addphotos} alt="" />}
         </label>
         <label className='text-center m-4'> 
         <input name='postImage'  onChange={e=>setPostData({...postData,postImage:[...postData.postImage,e.target.files[0]]})}  style={{display:'none'}} type='file' />
         {preview.length>2?<img className='img-fluid ' width={'50px'} height={'50px'} src={preview[2]} alt="" />:<img className='img-fluid ' width={'50px'} height={'50px'} src={addphotos} alt="" />}
         </label>
         <label className='text-center m-4'> 
         <input name='postImage'  onChange={e=>setPostData({...postData,postImage:[...postData.postImage,e.target.files[0]]})}  style={{display:'none'}} type='file' />
         {preview.length>3?<img className='img-fluid ' width={'50px'} height={'50px'} src={preview[3]} alt="" />:<img className='img-fluid ' width={'50px'} height={'50px'} src={addphotos} alt="" />}
         </label>
         <div className='ms-5'>        <h6 className='text-start text-danger ms-5'>Add minimum 3 photos*</h6>
</div>
        </div>
        <div className="col-lg-4 bg-black rounded  shadow ">
        <div className='ms-5 me-5  mt-2 mb-2'>
                            <div class="mb-3">
                           <label for="first" class="form-label text-white">Title</label>
                            <input onChange={e=>setPostData({...postData ,title:e.target.value})}  type="rext" class="form-control"  placeholder="Enter Title" />
                          </div>
                          <div class="mb-3">
                           <label for="last" class="form-label text-white">Price</label>
                            <input onChange={e=>setPostData({...postData,price:e.target.value})} type="text" class="form-control"  placeholder="Enter Price"/>
                          </div>
                          <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label text-white">Location</label>
                          <select onChange={e=>setPostData({...postData,location:e.target.value})} class="form-select" aria-label="Default select example">
                          <option selected>Select Location</option>
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
                          </select>
                          </div>
                           <button onClick={handleAddPost} className='btn btn-success  m-auto '>Post</button>
                            </div>
        </div>
        <div className="col-lg-2"></div>
      </div>  
    </div>
    
    <ToastContainer
            autoClose={4000}
            theme="dark"
            position="top-center"
          />
          <Footer/>
    </>
  )
}

export default Post