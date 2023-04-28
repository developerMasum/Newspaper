import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
 const password = form.password.value;
    console.log(email, password); 

    // jekhne jaite nisilo
const from = location.state?.from?.pathname || '/'

    signIn(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        navigate(from,{replace: true})
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container className="w-25 mx-auto mt-3">
      <h2> Please Log in </h2>
      <Form onSubmit={handleSignIn}>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />

        <Form.Text className="text-danger">
          Don't have an account?
          <Link to={"/register"}> register </Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Form.Text className="text-success"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
