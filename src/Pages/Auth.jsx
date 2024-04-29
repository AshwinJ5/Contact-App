import React, { useState }  from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../Components/banner.css'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../config/firebaseAuth'

function Auth() {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const navigate=useNavigate()
  const  signIn= async(e)=>{
  e.preventDefault();
  try {
    const userCredential=await signInWithEmailAndPassword(auth,email,password);
    console.log(userCredential);
    userCredential.user
    navigate("/home")
  } catch (error) {
    console.log(error);
  }}

  return (
    <>
      <div className="col-lg-3"></div>
      <div style={{marginTop:'20vh'}} className="container border mb-5 p-5 rounded border-dark  text-center col-lg-6">
        <h1 className='p-3' style={{color:'#11009e',fontWeight:'900'}}>SIGN IN</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email"  placeholder="" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword"  label="Password">
        <Form.Control type="password"  placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </FloatingLabel>
      <button  id='bannerBtn' onClick={signIn}  className="btn my-3 mx-auto">Sign-In</button>
      </div>  
      <div className="col-lg-3"></div>
 
    </>
  )
}

export default Auth