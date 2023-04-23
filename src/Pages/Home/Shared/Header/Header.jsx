import React, { useContext } from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

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
          text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique est assumenda sed numquam itaque natus nostrum officia illum
          modi magnam culpa consectetur quidem pariatur delectus ipsa, minima
          dolores blanditiis. Nesciunt?
        </Marquee>
      </div>

      {/* nav  */}
    </Container>
  );
};

export default Header;
