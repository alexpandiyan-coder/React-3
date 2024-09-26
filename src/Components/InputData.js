import React, { useState } from 'react'

function InputData() {

  const[data,setData] =useState(null)
   const [showData,setShowData]=useState()

 function submitData(){
    setShowData(data)
 }

 function Output(){

    console.log(showData)
    if (showData==="silver" ) {
           return <h1>silver user</h1>
    } else if(showData==="gold"){
            return <h1>Gold user</h1>
    }else{
        return <h1>user </h1>
    }

   }


  return (
    <div>
      <input value={data} onChange={(e)=>{setData(e.target.value)}}></input>
       <button onClick={submitData}>button</button>
    
      {Output()}
    {/* <Output   showData={showData}/> */}
    </div>
  )
}


// function Output({showData}){

//     console.log(showData)
//     if (showData==="silver" ) {
//            return <h1>silver user</h1>
//     } else if(showData==="gold"){
//             return <h1>Gold user</h1>
//     }else{
//         return <h1>user </h1>
//     }

//    }

export default InputData
