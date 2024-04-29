import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './banner.css'


function About() {
  return (
    <>
        <Row className='w-100'>
        <Col lg={4}  className='d-flex justify-content-around align-items-center p-5'>
            <Card className=' p-2 cardDiv'  style={{ width: '18rem',border:"2px solid #fe6601" }}>
            <i style={{fontSize:'150px',color:'#11009e'}} class="fa-solid fa-mobile-screen text-center px-5"></i>                <Card.Body>
                    <Card.Title style={{color:'#fe6601',textAlign:'justify'}} className='text-center fw-bolder'>Add Your Contacts</Card.Title>
                    <Card.Text  style={{textAlign:'justify',color:'#000000'}} >
                    This feature allows users to manually input into their contact list. It typically involves creating a new contact entry by entering the person's name, phone number, and email address.
                    </Card.Text>
                </Card.Body>
            </Card>        
        </Col>
        <Col lg={4}  className='d-flex justify-content-around align-items-center p-5'>
            <Card className='p-2 cardDiv '  style={{ width: '18rem' ,border:"2px solid #fe6601" }}>
            <i style={{fontSize:'150px',color:'#11009e'}} class="fa-solid fa-phone text-center px-5"></i>
                <Card.Body>
                    <Card.Title style={{color:'#fe6601',textAlign:'justify'}}  className='text-center  fw-bolder'>Manage Your Contacts</Card.Title>
                    <Card.Text  style={{textAlign:'justify',color:'#000000'}} >
                    Managing contacts involves organizing, deleting and maintaining a database of individuals' contact information for easy access and communication. 
                    </Card.Text>
                </Card.Body>
            </Card>        
        </Col>
        <Col lg={4}  className='d-flex justify-content-around align-items-center p-5'>
            <Card className='p-2 cardDiv '  style={{ width: '18rem',border:"2px solid #fe6601"  }}>
            <i style={{fontSize:'150px',color:'#11009e'}} class="fa-solid fa-list text-center px-5"></i>                <Card.Body>
                    <Card.Title style={{color:'#fe6601',textAlign:'justify'}}  className='text-center fw-bolder'>Categorize Your Contacts</Card.Title>
                    <Card.Text  style={{textAlign:'justify',color:'#000000'}} >
                        Categorizing your contacts allows you to organize and manage them efficiently. By grouping contacts into categories you can quickly find specific groups of people. 
                    </Card.Text>
                </Card.Body>
            </Card>        
        </Col>
        </Row>
    </>
  )
}

export default About