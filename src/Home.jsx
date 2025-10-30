import React, { useEffect, useState } from 'react'
import Add from './Add'

import View from './View'
import { getEmployeeAPI } from './AllApi'
function Home() {
    const [getData , setgetData] = useState([])
    const [deleteData , setdeletedata] = useState([])
      const [searchkey , setsearchkey] = useState("")
   
    useEffect(() => {
      getAllEmployee()
    }, [searchkey])
    

    const getAllEmployee=async()=>{
        try{
     const result = await getEmployeeAPI(searchkey)
     console.log("get details", result);
     if(result.status==200){
        setgetData(result.data)
     }
     
        }
        catch(err){
            console.log(err);
            
        }
    }
  return (

    <div>
        
        <Add/>

        
      <input onChange={(e)=>setsearchkey(e.target.value)} type="search" placeholder='Search'  name="" id="" />

     <div className='mt-5'>
           <View getData = {getData} getAllEmployee = {getAllEmployee} setdeletedata ={setdeletedata}/>
     </div>
    </div>
  )
}

export default Home