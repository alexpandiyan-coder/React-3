import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {  useRef, useState } from "react";


const Singup = ({fun}) => {

    const [singup,Setsingup]=useState([])

    const RefName=useRef()
    const RefPass=useRef()
    const RefEmail=useRef()
    const RefPhone=useRef()
    const RefAdd=useRef()

    function submit(){

    
        const addSingup={
          Name:RefName.current.value,
          Password:RefPass.current.value,
          Email:RefEmail.current.value,
          Phone:RefPhone.current.value,
          Address:RefAdd.current.value
      }

     
      const updatedSignup = [...singup, addSingup];
      Setsingup(updatedSignup); 
      fun(updatedSignup)

 }

  

  return (
    <>
    <div>
      <Form className="w-25 mt-5 justifyContent-center">

        <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
          <Form.Label className="">Name</Form.Label>
          <Form.Control type="email"  ref={RefName}placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  ref={RefPass}placeholder="Password"/>
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"  ref={RefEmail}placeholder="Password"/>
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone"  ref={RefPhone}placeholder="Password"/>
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="address"  ref={RefAdd}placeholder="Password"/>
        </Form.Group>

      
        <Button variant="success" size="lg" onClick={submit} >
          Submit
        </Button>
      </Form>
      </div>


      </>
  );
};

export default Singup;
