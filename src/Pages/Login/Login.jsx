import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-25 mx-auto mt-3">
      <h2> Please Log in </h2>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email"  required placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"  label="Check me out" />
        </Form.Group>
     

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
      
        <Form.Text className="text-danger">
            Don't have an account?
            <Link to={'/register'}> register </Link>
          
          </Form.Text>
        <Form.Text className="text-danger">
          
          </Form.Text>
        <Form.Text className="text-success">
            
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
