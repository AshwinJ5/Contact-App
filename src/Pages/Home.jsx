import React, { useRef } from 'react'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from '../Components/Footer';
import Header from '../Components/Navbar';
import '../Components/banner.css'
import Form from 'react-bootstrap/Form';
import {addDoc, collection} from 'firebase/firestore';
import dataBase from '../config/firebase';
import { useEffect } from 'react'
import { getDocs ,updateDoc } from 'firebase/firestore';
import {  doc, deleteDoc, getDoc } from 'firebase/firestore';
import './addcontact.css'



function Home() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const[contactResponse,setContactResponse]=useState({})

  const[contactList,setContactList]=useState([])
  //  const[groupList,setGroupList]=useState({})

   const[contactsName,setContactsName]=useState("")
   const[phNumber,setPhNumber]=useState("")
   const[emailId,setEmailId]=useState("")

  //  const fName=useRef('')

   const postContact=async()=>{
     if(!contactsName||!phNumber){
       alert('Please Fill Missing Fields')
     }else if(phNumber.length<10){
       alert('Please give valid Phone Number')
     }
     else{

       const result= await addDoc(contactListReference,{
       contactname:contactsName,
       phonenumber:phNumber,
       email:emailId})
       // console.log(result);
       setContactResponse(result);
       setContactsName("");
       setEmailId("");
       setPhNumber("")
     }
   
   
   }
   const contactListReference=collection(dataBase,"contactlist")
   const getContactList= async()=>{
       const data= await getDocs(contactListReference)
       const newContactFile= data.docs.map((document)=>(
         {...document.data(),
         id:document.id}
       ))
      setContactList(newContactFile)
       console.log(newContactFile);
   }
   const[delContact,setDelContact]=useState(false)
   const[update,setUpdate]=useState(false)
 

   const deleteContact= async(id)=>{
       const contactDoc= doc(dataBase,"contactlist",id)
       await deleteDoc(contactDoc)
       setDelContact(true)
     }
const[docId,setDocId]=useState("")
// const[update,setUpdate]=useState(false)


     const updateContact = async ()=>{
       const contactDoc= doc(dataBase,"contactlist",docId)

       await updateDoc(contactDoc,{
        contactname:contactsName,
        phonenumber:phNumber,
        email:emailId});
               setContactsName("");
               setEmailId("");
               setPhNumber("");
               setUpdate(true)


     }
     const editContact= async (id)=>{
       const contactDoc= doc(dataBase,"contactlist",id)
       const contact=  await getDoc(contactDoc);
      //  console.log(contact.id);
       console.log(contact.data());
       setContactsName(contact.data().contactname);
       setEmailId(contact.data().email);
       setPhNumber(contact.data().phonenumber);
       setDocId(contact.id)
     }
     useEffect(()=>{
      getContactList()
      setDelContact(false)
      setUpdate(false)

    },[contactResponse,delContact,update])

  return (
    <>
    <Header/>

    <div className='py-5 text-center h1 w-100'> 
          <span style={{color:'#fe6601'}} className='py-5  fw-bolder'> Add Your Contact Details</span>
        </div>



      <div className=' container w-50 pb-5' >
        {/* <input type="text"  value={contactsName} onChange={(e)=>setContactsName(e.target.value)} placeholder=''/>
        <input type="number" value={phNumber} onChange={(e)=>setPhNumber(e.target.value)} placeholder=""  />
        <input type="email"  value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder=""/> */}
        <FloatingLabel
        controlId="floatingInput"
        label="Name"
        id='floatingInput'
        className="mb-3 "
      >
        <Form.Control  type="name" placeholder="" value={contactsName} onChange={(e)=>setContactsName(e.target.value)} />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control  type="number" className='onetwo' value={phNumber} onChange={(e)=>setPhNumber(e.target.value)} placeholder="" />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput"
        label="E-mail (Optional)"
        className="mb-3"
      >
        <Form.Control type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder="" />
      </FloatingLabel>

      <br />
        <div className='text-center '>
          <button onClick={postContact} id='bannerBtn' className="btn me-3  rounded-pill w-25">
            ADD
          </button>
          <button onClick={updateContact} id='bannerBtn' className="btn ms-3 rounded-pill w-25">
            UPDATE
          </button>
        </div>
      </div>       <br />
<br /><br /> 

<div style={{width:'85%',border:'2px solid #fe6601',margin:'auto'}}></div>
      <div className='row w-100'>
        <div className='col-lg-12'>
        <div style={{color:'#11009e'}} className="h4 fw-bolder text-center my-5">
            Your Contact List
        </div>
        <div className="px-3">
        <table style={{margin:'auto'}}  className='w-100  mb-5 '>
            <thead style={{margin:'auto'}} className='text-center'>
                <tr style={{border: '2px solid black'}} >
                    <th style={{color:"#fe6601"}} className='py-3'>Name</th>
                    <th  style={{color:"#fe6601"}} className='py-3'>Phone Number</th>
                    <th  style={{color:"#fe6601"}} className='py-3'>Email Address</th>
                    <th  style={{color:"#fe6601"}} className='py-3 '>Actions</th>
                </tr>
            </thead>
            <tbody className=' text-center'>

            {contactList?.length>0?
            contactList.map((contactApp)=>(
                <tr style={{ border: '1px solid #fe6601'}} key={contactApp.id}>
                    <td className='py-3'>{contactApp.contactname}</td>
                    <td className='py-3'>{contactApp.phonenumber}</td>
                    <td className='py-3'>{contactApp.email}</td>
                    <td className='py-2'><button onClick={()=>editContact(contactApp.id)} className='btn btn-success btn-sm m-1'><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick={()=>deleteContact(contactApp.id)} className='btn btn-danger btn-sm m-1'><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            )):<p style={{margin:'auto'}} className='text-danger fw-bolder'>No Contacts Added!!!!!</p>
            }
                

            </tbody>
        </table>
        </div>        </div>
        {/* <div className="col-lg-4 text-center">
        <div style={{color:'#11009e'}} className="h4 fw-bolder text-center mt-5">
            Groups
            
        </div>
        <div  onClick={handleShow} id='bannerBtn' className='mt-3 w-50 btn  rounded-pill '>Add new Group</div>
            <Groups setGroupList={setGroupList} groupList={groupList} />
        </div> */}
      </div>


<Footer/>

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#11009e'}}>ADD NEW GROUP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingInput" label="Group Name">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'#fe6601'}}>Add Group</Button>
        </Modal.Footer>
      </Modal> */}


    </>
  )
}

export default Home