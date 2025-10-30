import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteEmployeeAPI } from './AllApi';
function View({getData,setdeletedata,getAllEmployee}) {

  const deleteEmp=async(id)=>{
    const result = await deleteEmployeeAPI(id)
    console.log("deleted",result);
    if(result.status==200){
      setdeletedata(result)
      getAllEmployee()
    }
    
  }
  return (
    <div>

         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Task</th>
             <th>...</th>
        </tr>
      </thead>
     {getData.length>0 ? getData.map((Item,index)=>(

<tbody>
        <tr>
          <td>{index+1}</td>
          <td>{Item.name}</td>
          <td>{Item.email}</td>
          <td>{Item.dept}</td>
           <td>{Item.dept}</td>
            <td><button onClick={()=>deleteEmp(Item._id)} className='btn btn-danger' >Delete</button></td>
        </tr>
      
      
      </tbody>
     )) :
      <h3>No Employees to display</h3> 
      }
    </Table>
  
    </div>
  )
}

export default View