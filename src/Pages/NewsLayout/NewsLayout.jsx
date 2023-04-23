import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Home/Shared/Header/Header";
import LeftMav from "../Home/Shared/Header/LeftNav/LeftMav";
import RightNav from "../Home/Shared/RightNav/RightNav";
import Footer from "../Home/Shared/Header/Footer/Footer";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      {/* header sec */}
      <Header />

      {/* main body's grid  */}

      <Container>
        <Row>
         

          <Col lg={9}>
            <Outlet> </Outlet>
          </Col>

          <Col lg={3}>
            {" "}
            <RightNav></RightNav>{" "}
          </Col>
        </Row>
      </Container>

      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default NewsLayout;
