
import { SERVER_URL } from "./ServerUrl"
import { commonAPI } from "./commonAPI"

//register
//register API
export const registerAPI = async (user)=>{

    return await commonAPI("POST",`${SERVER_URL}/register`,user , "")
}

//login api

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

//add post 
export const addPostAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addpost`,reqBody,reqHeader)
}
//get posts
export const getAllPostAPI = async (searchKey)=>{
    return await commonAPI("GET", `${SERVER_URL}/getpost?search=${searchKey}`,"","")
}

//update user profile
export const UpdateUserProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/update`,reqBody,reqHeader)
 }

 //show a post 
 export const getAPostAPI = async(pId)=>{
   return await commonAPI("GET",`${SERVER_URL}/getAPost/${pId}`,"","")
 }

 //show user post

 export const getUserPostAPI = async(phone)=>{
    return await commonAPI("GET",`${SERVER_URL}/getUserPost/${phone}`,"","")
 }

 //delete post
export const deletePostAPI = async (pId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/post/remove/${pId}`,{},"")
}
//get alll counts

export const getAllCountsAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/getAllCounts`,"","")
}
 