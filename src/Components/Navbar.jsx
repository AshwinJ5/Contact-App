import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         <Navbar>
        <Container>
          <Navbar.Brand className='p-2 rounded navbarMain'  href="/" style={{fontWeight:'900'}}>
          <i class="fa-solid fa-address-book me-2"></i> CONTACT APP
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header