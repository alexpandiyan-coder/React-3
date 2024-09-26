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
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Name" ref={RefName} />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={RefPassword}
          />
        </Form.Group>
        <Button variant="primary" onClick={submit}>
          submit
        </Button>
      </Form>

      <main style={{marginTop:10}}>
        <UserTable tableData={user} />
      </main>
    </section>
  );
}

export default Login;
