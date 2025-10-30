import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addEmployeeAPI } from './AllApi';

function Add() {
    const [empDetails,setempDetails] = useState({name:"",email:"",dept:"",task:""})
    console.log(empDetails);
    
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addEmployee=async()=>{
    const {name,email,dept,task} = empDetails
    if(name&&email&&dept&&task){
     try{
      const result = await addEmployeeAPI(empDetails)
      console.log("result=",result);
      if(result.status==200){
        setempDetails({name:"",email:"",dept:"",task:""})
        handleClose()
        alert("Added succesfully")
      }
      else{
        alert(result.response.data)
      }
      
     }
     catch(err){
        console.log(err);
        
     }
    }
    else{
        alert("Enter the fields")
    }
  }
  return (
    
    <div>
        <button onClick={handleShow} style={{backgroundColor:"#578"}} className='btn'>Add the employee</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input onChange={(e)=>setempDetails({...empDetails,name:e.target.value})}className='form-control' placeholder='Enter the name' type="text" name="" id="" /> <br />
         <input  onChange={(e)=>setempDetails({...empDetails,email:e.target.value})}className='form-control' placeholder='Enter the email' type="text" name="" id="" /> <br />
          <input  onChange={(e)=>setempDetails({...empDetails,task:e.target.value})} className='form-control' placeholder='Enter the task' type="text" name="" id="" />
          <br />
           <input  onChange={(e)=>setempDetails({...empDetails,dept:e.target.value})}className='form-control' placeholder='Enter the department' type="text" name="" id="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addEmployee} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Add