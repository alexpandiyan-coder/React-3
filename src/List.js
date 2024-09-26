


import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
function List() {
  return (
    <div>
      <ul>
        <Link to={"page-1"} className='h1'>List-1</Link> 
        <br/>  
        <Link to={"page-2"} className='h1'>List-2</Link>   
        <br/>
        <Link className='h1'>List-3</Link>   
      </ul>
      <Outlet/>
    </div>
  )
}

export default List
