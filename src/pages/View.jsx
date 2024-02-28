import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Link, useParams } from "react-router-dom";
import { getAPostAPI } from "../../Service/allAPIs";
import { SERVER_URL } from "../../Service/ServerUrl";

function View() {
  const {pId}=useParams()
  const [post,setPost] =useState([])
  const [open, setOpen] = useState(false);
  const getApost=async()=>{
   const result = await getAPostAPI(pId) 
   if (result.status==200) {
     console.log(result.data);
     setPost(result.data[0])
   }else{
    console.log(result.response.data);
   }
  }
  useEffect(()=>{
   getApost()
  },[pId])
  console.log(post);
  return (
    <>
    <Header/>
      <div style={{ height: "auto" }} className="w-auto">
        <div className="row mt-5 w-auto ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
          <div id="carouselExampleInterval" class="carousel slide ms-3" data-bs-ride="carousel">
  <div class="carousel-inner">
   {post.postImage?.map((items)=>( <div class="carousel-item active" data-bs-interval="1000">
      <img  style={{ height: "400px" }} src={`${SERVER_URL}/uploads/${items.filename}`} class="d-block w-100" alt="..."/>
    </div>))
    }
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <div className="mt-4 ms-5">
              <div class="card bg-success me-5 shadow rounded" style={{ width: "auto" }}>
                <div class="card-body">
                  <h5 class="card-title text-light fw-semibold text-center">
                    {post.title}
                  </h5>
                  <p class="card-text text-light text-center">{post.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1  "></div>
          <div className="col-lg-4 d-flex flex-column  justify-content-center">
            <div
              class="card bg-dark text-center shadow "
              style={{ width: "16rem", height: "260x" }}
            >
              <img
                style={{ height: "150px", width: "155px" }}
                src={`${SERVER_URL}/uploads/${post.profilePhoto}`}
                class="card-img-top rounded-circle img-fluid ms-5 mt5"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-light">{post.username}</h5>
                <p class="card-text text-light ">{post.location}</p>
                <button onClick={() => setOpen(!open)} class="btn btn-outline-success text-light">
                  Contact<i class="fa-solid fa-phone ms-2"></i>
                </button>
                <Collapse in={open}>
        <div id="example-collapse-text">
        <div className="d-flex flex-column shadow card p-3 justify-content-center mt-3 bg-black border-success  " id='example-collapse-text'>
           <div className="">
            <Link target="_blank" to={"tel:9497862197"}  className="text-light btn btn-black"><i class="fa-solid fa-phone  me-2"></i>{post.phone}</Link>
            <hr className='mt-1 ms-5' style={{color:'white',width:'40%'}}/>
            <Link target="_blank" to={`https://api.whatsapp.com/send?phone=+91(${post.phone})&text=Is+your+property+still+available`} className="btn-outline-success bg-black text-light  btn ">Contact on whatsapp<i class="fa-brands fa-whatsapp text-success ms-1"></i></Link>
           </div>
        </div>
        </div>
      </Collapse>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default View;
