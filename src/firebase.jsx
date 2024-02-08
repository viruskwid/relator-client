// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGQHuY3D5v0nsv_L4FOQoXB7g6y0h3_bA",
  authDomain: "relator-94ed9.firebaseapp.com",
  databaseURL: "https://relator-94ed9-default-rtdb.firebaseio.com",
  projectId: "relator-94ed9",
  storageBucket: "relator-94ed9.appspot.com",
  messagingSenderId: "36815765809",
  appId: "1:36815765809:web:95a4a90e0160aafc927010",
  measurementId: "G-KMEGV35REC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
