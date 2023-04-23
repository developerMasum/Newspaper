import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';



const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
              <Link to={'/category/0'}>Home</Link>
            
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
           { user && 
              <FaUserCircle
               style={{fontSize:'2rem'}}/>
               }

            <Nav.Link eventKey={2} href="#memes">
           {
            user ? 
            <Link to={'/register'}><Button variant="warning">Log out</Button> </Link>
            :
            <Link to={'/login'}> <Button variant="warning">Log in</Button></Link>
           }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </Container>
    );
};

export default NavigationBar;