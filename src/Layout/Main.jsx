import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
// import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftMav from '../Pages/Home/Shared/Header/LeftNav/LeftMav';
import RightNav from '../Pages/Home/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Home/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            {/* header sec */}
           <Header />
           <NavigationBar />

           {/* main body's grid  */}

           <Container>
    
      <Row>
        <Col lg={3}>
           <LeftMav ></LeftMav>
             </Col>


        <Col lg={6}>
         <Outlet> </Outlet>
            </Col>


        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>


           {/* <Outlet /> */}
           <Footer />
        </div>
    );
};

export default Main;