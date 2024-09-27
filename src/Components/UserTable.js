


import React, { useRef, useState } from 'react'

function UserTable({tableData}) {

     const [data,setdata]= useState()

     

         const RefValue  =useRef()
    
  
         console.log("useREf")

  return (
    <section>
     <table>
        <tr>
        <th>Name</th>
        <th>Password</th>
        </tr>      
    
     </table>

 <h1 ref={RefValue}>{tableData.name}</h1>
<button onClick={()=>{RefValue.current.style.color="green"}}>Click</button>
   </section>
  )
}

export default UserTable
