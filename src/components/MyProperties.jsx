import React, { useState } from "react";
import { SERVER_URL } from "../../Service/ServerUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deletePostAPI } from "../../Service/allAPIs";

function MyProperties({post}) {
  console.log(post);

const handleDelete =async (id)=>{
  try {
    const result = await deletePostAPI(id) 
    if (result.status===200) {
      toast.success("Post Deleted")
      console.log(result)
     }else{
     toast.warning(result.response.data)
     }
  } catch (error) {
    console.log(error)
  }

}

  
  return (
    <>
     { /* {post?.map((item,key)=(  */ }
     <div
        style={{ width: "auto" ,backgroundColor:'#0E0F0F'}} 
        class="card d-flex flex-row   shadow m-2"
      >
       <div>
            <img
              style={{ width: "90px", height: "90px" }}
              src={`${SERVER_URL}/uploads/${post?.postImage[0].filename}`} 
              class="card-img-top"
              alt="..."
            />
       </div>
        <div class="card-body d-flex justify-content-between ">
          <h5 class="card-title text-light ">{post.title}</h5>
          <div>
              <button onClick={()=>handleDelete(post._id)} className="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
          </div>
        </div>
      </div>
      {/* ))} */}
      <ToastContainer
            autoClose={4000}
            theme="dark"
            position="top-center"
          />
    </>
  );
}

export default MyProperties;
