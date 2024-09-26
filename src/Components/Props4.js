


import React, { useContext } from 'react'
import { contexts } from '../App'
import { arrayData } from '../App'

function Props4() {


  const data =  useContext(contexts)
     const array =useContext(arrayData)

  console.log(data)


  return (
    <div>
      {array.map((data)=>{
        return <div>{data}</div>
      })}
      <h1>{data.id}</h1>
      <h1>{data.age}</h1>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Props4
