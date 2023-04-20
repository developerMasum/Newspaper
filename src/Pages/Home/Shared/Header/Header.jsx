import React from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-8 mb-4 ">
        <img src={logo} alt="" />
        <p>
          {" "}
          <small> Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("LL")} </p>
      </div>
      <div className="d-flex">
        <Button variant="warning">Latest </Button>
        <Marquee className="text-info">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

{/* nav  */}

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="warning">Warning</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Container>
  );
};

export default Header;