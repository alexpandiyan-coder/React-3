


import React, { useContext } from 'react'
import Props3 from './Props3'
import { contexts } from '../App'
function Props2() {


    
 const data=  useContext(contexts)
  return (
    <div>
      

      <div>
        {data.id}
      </div>
      <Props3/>
    </div>
  )
}

export default Props2
