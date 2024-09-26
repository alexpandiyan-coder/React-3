

import React, { useEffect, useState } from 'react'

function FetchData() {

   const [ShowData,setShowData]=useState([])
   const [count,setCount]=useState(0)
     let data ="https://jsonplaceholder.typicode.com/users"

     useEffect(()=>{
        
   function loop(){
    for(var i=10;i<100;i++){
        console.log(i)
    }

   }
   loop()
     },[count,ShowData])
     
    // useEffect(()=>{
    //     fetch(data)
    //     .then(res=>res.json())
    //     .then(data=>setShowData(data))
    //     .catch(error=>console.log(error))   
   
    //     console.log(count)
    // },[count])
 return (
    <div>
        {count}
        <button onClick={()=>{setCount(count+1)}}>+</button>
      {/* {ShowData.map((data,index)=>{
    return <p key={data.id}>{data.name}</p>
      })} */}
      
    </div>
  )
}

export default FetchData
