

// import "./page.css"
import React from 'react'
import { Outlet } from 'react-router-dom'


function Page1() {

  //  let colors= "page-color"

  return (
    <div>
      <h1>page-1</h1>
       <Outlet/>
      
    </div>
  )
}

export default Page1
