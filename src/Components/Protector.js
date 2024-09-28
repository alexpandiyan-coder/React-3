

// import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Admin from './Admin'

const Protector = ({share}) => {
console.log(share)
  return (
    <div>
        {share?<Outlet/>:<Admin/>}

    </div>
  )
}

export default Protector