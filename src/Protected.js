

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Components/Login'

function Protected() {

    function Output(){
        return true
    }
  return (
    <div>
     {Output() ? <Outlet/> : <Navigate to={"/"}/>}
    </div>
  )
}

export default Protected
