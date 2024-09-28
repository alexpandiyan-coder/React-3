import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useRef} from "react";


// import "./login.css";

function Admin({fun}) {

  const navigate = useNavigate();

  const RefName=useRef()
  const RefPass=useRef()
  
  function submit() {

    const Name= RefName.current.value;
    const password=RefPass.current.value;

    if (Name=== "admin" && password === "admin") {
      navigate('/list')
      fun(true)
    
    }
    else{
      console.log("Invalid")
     fun(false)
 
    }
  }

  return (
    <>
      <section>
        <Form className="w-25 mt-5 justifyContent-center">

          <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
            <Form.Label className="">Name</Form.Label>
            <Form.Control type="email" placeholder="Name" ref={RefName} />
          </Form.Group>
          <Form.Group className="mb-3 p-2" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={RefPass}/>
          </Form.Group>
          <br />
          <Button variant="success" size="lg" onClick={submit}>
            Submit
          </Button>
        </Form>
      </section>

    </>
  );
}

export default Admin;
