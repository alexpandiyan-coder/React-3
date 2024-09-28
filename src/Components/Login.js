import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import UserTable from "./UserTable";
import photo from '../Asset/image5.jpg'
import { Link } from "react-router-dom";

function Login() {

  const [user, setUser] = useState([]);
  const RefName = useRef();
  const RefPassword = useRef();

  function submit(e) {

    e.preventDefault();
      const newUser = {
        Name: RefName.current.value,
        password: RefPassword.current.value,
      };
  
      setUser([...user, newUser]);
  
      RefName.current.value = "";
      RefPassword.current.value = "";

  }

  const mystyle={
    background:`url(${photo})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    zIndex:'0',
   filter: 'blur(.2px)'

    
 
 
 

  }
  return (
  <section style={mystyle}>
  <Link to={'/Login'}>Login</Link>
  <Link to={'/signup'}>Signup</Link>
    <Form  className="w-25  justifyContent-center ">
    <h6 className="h3">Login</h6>

    <Form.Group className="mb-3 p-2"  controlId="formGroupName">
      <Form.Label className="">Name</Form.Label>
      <Form.Control className='input'type="name" placeholder="Enter Name" ref={RefName} />
    </Form.Group>
    <Form.Group className="mb-3 p-2 br-3 " controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  type="pa
      ssword" placeholder="Enter Password" ref={RefPassword } />
    </Form.Group>
    <br />
    <Button variant="success" size="lg" onClick={submit} >
          Submit
        </Button>
      </Form>

    </section>
  );
}

export default Login;
