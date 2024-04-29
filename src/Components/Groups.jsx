import { collection,  getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import dataBase from '../config/firebase';
import "./banner.css"

function Groups({groupList,setGroupList}) {
  // const[groupList,setGroupList]=useState({})

  const groupCollectionRef=collection(dataBase,"grouplist")

  const getGroupList = async ()=>{
    const datas = await getDocs(groupCollectionRef)
    const newData= datas.docs.map((docum)=>(
      {...docum.data(),
      id:docum.id
    }
    ))
    console.log(newData);
    setGroupList(newData)
  }
  useEffect(()=>{
    getGroupList()
  },[])

  return (
    <>

        <div className="row w-100 my-5">
            <div className="col-lg">
            

        
          {groupList?.length>0?
            groupList.map((group)=>(
              <Card className='mb-3 cardDIVone bg-light m-auto'  style={{ width: '85%' ,border:"2px solid #11009e" }}>
      <Card.Body > 
        <Card.Title style={{color:'#fe6601'}} className='text-center my-3 fw-bolder '>
          <div key={group.id} className="row">
            <h3 >Friends</h3>
            <div className='text-end'><button className='btn text-danger btn-tertiary btn-lg '><i class="fa-solid fa-trash"></i></button></div>
          </div>
           </Card.Title>
        <Card.Text>
          <div className="row w-100 text-center text-dark">
            <div className="col-2">
              1
            </div>
            <div className="col-8">
              Abi
            </div>
            <div className="col-2">
              <button className='btn btn-danger btn-sm m-1'><i class="fa-solid fa-trash-can"></i></button>
            </div>         
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
            )):<p className='text-danger'> No Groups</p>
          }
                 </div>
        </div>  
    </>
  )
}

export default Groups