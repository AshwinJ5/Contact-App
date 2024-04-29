import React from 'react'
import bannerVid from '../Images/abc1.mp4'
import './banner.css'
import { Link } from 'react-router-dom'




function Banner() {
  return (
    <>
        <video width={'100%'} src={bannerVid} autoPlay muted loop></video>
        <div className='col-lg-9 mx-auto  landing-container  rounded text-center ' style={{position:'relative'}}>
        <h1 style={{color:'#11009e',fontWeight:"900"}} className='text-center'>Add & Edit Your  Contacts</h1>
      <p style={{textAlign:'justify'}} className='text-white contacts'>
        A digital tool designed to store, organize, and manage contacts efficiently. It serves as a centralized repository for storing various types of contact information such as phone numbers, email addresses,and physical addresses. Contact list apps are widely used across personal, professional, and organizational settings to streamline communication and maintain a network of connections.
        

        </p>
        <Link to={'/register'}><button id='bannerBtn' type="button" class="btn">ADD CONTACTS</button>              
        </Link>
        </div>
    </>
  )
}

export default Banner