import React from 'react'
import Page1 from './Page1'

function Conditional() {

    let name="user" ;
    // let password;
    let gmail;
   function print(){
       
  switch (true) {
    case "a":
      return   <Page1/>
    
    default:
       return <h1>error</h1>
        
  }

   }
  return (
    <div>
      {print()}
    </div>
  )
}

export default Conditional;
