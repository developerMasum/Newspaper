import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const[accept,setAccept] = useState(false);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const url = form.url.value;
    const password = form.password.value;
    console.log(name, url, email, password);

createUser(email,password)
.then(result =>{
  const createUser=  result.user;
  console.log(createUser);
  navigate('login')

})
.catch(error=>{
  console.log(error.message);
});




  };
  const handleAccept=(event)=>{
    setAccept(event.target.checked)
  
  }

  return (
    <Container className="w-25 mx-auto mt-3">
      <h2> Please Log in </h2>
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="url"
            required
            placeholder="Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccept}
            type="checkbox"
            name="accept"
            label={ <> Accept <Link to={'/terms'}> term and condition</Link></>}
          />
        </Form.Group>

        <Button disabled={!accept} variant="primary" type="submit">
          Register
        </Button>
        <br />

        <Form.Text className="text-danger">
          Already have an account?
          <Link to={"/login"}> login </Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-success"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
