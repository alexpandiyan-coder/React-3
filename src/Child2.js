

import React from 'react'
 import { context } from './App'
function Child2({name}) {


  return (
    <div>
      {/* {name} */}
      {/* <context.Consumer>
        {(name)=> <p>{name}</p>}
      </context.Consumer> */}
     <h1>Child</h1>
    </div>
  )
}


Child2.defaultProps={
  name:"user"
}


export default Child2
