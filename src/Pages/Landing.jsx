import React from 'react'
// import {Row,Col} from 'react-bootstrap'
// import img1 from '../Images/land1.gif'
// import img3 from '../Images/row1.gif'
// import img4 from '../Images/row2.gif'
// import img5 from '../Images/row3.gif'
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Footer from '../Components/Footer'


function Landing() {
  return (
    <>
      
      <Navbar/>
        <Banner/>
        <About/>
        <Footer/>
      {/* <Row className='w-100  landing-img'>
        <Col lg={6} className='d-flex justify-content-around align-items-center p-5'>       
         <img src={img1} style={{borderRadius:"10px"}}  width={"100%"} alt="" />
        </Col>

        <Col lg={6}   className=' p-5 my-auto'>
          <div className='h2 text-center text-warning'>Contacts</div>
          
        <p style={{textAlign:'justify'}} className='text-white  contacts'>
        A digital tool designed to store, organize, and manage contacts efficiently. It serves as a centralized repository for storing various types of contact information such as phone numbers, email addresses,and physical addresses. Contact list apps are widely used across personal, professional, and organizational settings to streamline communication and maintain a network of connections.
        

        </p>
        <div className='text-center mt-5'>
          <Link to={'/home'}><div className="btn btn-warning">ADD CONTACTS</div>
          </Link>
        </div>
        </Col>
      </Row>

      <Row  className='w-100'>
        <Col lg={4}  className='d-flex justify-content-around align-items-center p-5'> 
        <Card className='border-light p-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3}  />
      <Card.Body>
        <Card.Title className='text-warning fw-bolder'>Add Your Contacts</Card.Title>
        <Card.Text  style={{textAlign:'justify'}} >
        This feature allows users to manually input into their contact list. It typically involves creating a new contact entry by entering the person's name, phone number, and email address.
        </Card.Text>
      </Card.Body>
    </Card>   
        </Col>

        <Col lg={4}  className='d-flex justify-content-around align-items-center p-5'>
        <Card  className='border-light p-2'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title className='text-warning fw-bolder'>Manage Your Contacts</Card.Title>
        <Card.Text  style={{textAlign:'justify'}} >
        Managing contacts involves organizing, deleting and maintaining a database of individuals' contact information for easy access and communication.
        </Card.Text>
      </Card.Body>
    </Card>        </Col>

        <Col lg={4}  className='d-flex justify-content-around align-items-center p-5'>
        <Card className='border-light p-2'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title className='text-warning fw-bolder'>Categorise Your Contacts</Card.Title>
        <Card.Text  style={{textAlign:'justify'}} >
          
            Categorizing your contacts allows you to organize and manage them efficiently. By grouping contacts into categories you can quickly find specific groups of people. 
        </Card.Text>
      </Card.Body>
    </Card>        </Col>
      </Row> */}

    </>
  )
}

export default Landing