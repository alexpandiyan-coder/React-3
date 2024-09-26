


import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
function NaveBar() {
 
   const navigate=  useNavigate()

  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href='/about' eventKey="link-1">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href='/list'>List</Nav.Link>
    </Nav.Item>
    <Button variant="light" onClick={()=>{navigate("/login")}}>Login</Button>
  </Nav>
  )
}

export default NaveBar
