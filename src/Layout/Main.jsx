import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
// import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftMav from '../Pages/Home/Shared/Header/LeftNav/LeftMav';
import RightNav from '../Pages/Home/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            {/* header sec */}
           <Header />

           {/* main body's grid  */}

           <Container>
    
      <Row>
        <Col lg={3}> <LeftMav ></LeftMav>  </Col>


        <Col lg={6}>Main Container  </Col>


        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>


           {/* <Outlet /> */}
           <Footer />
        </div>
    );
};

export default Main;