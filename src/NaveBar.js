


import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import { useNavigate, } from 'react-router-dom';
=======
import { Link, useNavigate} from 'react-router-dom';
>>>>>>> e0651c7b2c250707ab364a9f440695c9b804e9a5
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
      <Link to={'/list'}><Nav.Link eventKey="link-2" href='/list'>List</Nav.Link></Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href='/admin'>Admin</Nav.Link>
    </Nav.Item>
    <Button variant="light" onClick={()=>{navigate("/login")}}>Login</Button>
    <Button variant="light" onClick={()=>{navigate("/singup")}}>Singup</Button>
  </Nav>
  )
}

export default NaveBar
