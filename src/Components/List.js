


import React from 'react'

function List() {
    let data =[1,2,3,4,5,6,7]

  

  return (
    <div>
    <ol>   
       { data.map((value,index)=>{
        return <li key={index}>{ value}</li>
    
  })
}
</ol>
 
    </div>
  )
}

export default List
