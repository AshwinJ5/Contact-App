import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <> 
    <MDBFooter   className=' text-center bg-white text-lg-center'>
      <MDBContainer className='p-4'>
        <MDBRow className='d-flex justify-content-around align-items-center'>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase '>About</h5>

            <p  style={{textAlign:'justify'}} className='text-dark' >
              
                  We provide a digital or physical compilation of names, phone numbers, and email addresses  for individuals or entities with whom one maintains communication or connection. It serves as a convenient reference for reaching out to specific individuals quickly and efficiently.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase '>Features</h5>

            <ul className='list-unstyled mb-0' >
              <li>
                <a href='#!' className='text-dark'>
                Contact Details
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Categorize
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Contact Organization
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Groups 
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase  mb-0'>Fields</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Name
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Phone Number
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Email Address
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Address
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text' style={{textDecoration:'none',color:'#fe6601'}} href='/'>
          Contact-List-App
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer