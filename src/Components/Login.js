import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import UserTable from "./UserTable";


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
    RefName.current.value=""
    RefPassword.current.value=""
  }
  return (
  <section>
    <Form  className="w-25 mt-5 justifyContent-center">
    <Form.Group className="mb-3 p-2"  controlId="formGroupEmail">
      <Form.Label className="">Name</Form.Label>
      <Form.Control type="email" placeholder="Name" ref={RefName} />
    </Form.Group>
    <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="pa
      ssword" placeholder="Password" ref={RefPassword } />
    </Form.Group>
    <br />
    <Button variant="success" size="lg" onClick={submit} >
          Submit
        </Button>
      </Form>

      <main style={{marginTop:10}}>
        <UserTable tableData={user} />
      </main>
    </section>
  );
}

export default Login;
