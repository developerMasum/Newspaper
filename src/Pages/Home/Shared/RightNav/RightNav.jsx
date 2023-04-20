import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../Qzone/QZone";
import bg1 from '../../../../assets/bg.png'

const RightNav = () => {
  return (
    <div className="bg-light">
      <div>
        <h4 className="mb-3">Login </h4>
        <Button className="mb-2" variant="outline-danger">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-danger">
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </div>

      {/* find us  */}
<div>
    <h4 className="mt-3">Find Us On :</h4>
    <ListGroup>
      <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram/> Instagram </ListGroup.Item>
     
    </ListGroup>

</div>
<QZone > </QZone>
{/* floating img  */}


<Card className="bg-dark text-white text-center">
      <Card.Img src={bg1}alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="fs-2 mb-5">Create an Amazing Newspaper</Card.Title>
        <Card.Text  className=" mt-5 mb-5 fs-5">
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </Card.Text>

       <div className="mt-5"> <Button variant="danger" className="px-5 py-3 " size="lg">
         Learn More
        </Button></div>
      
      </Card.ImgOverlay>
    </Card>


{/* <div>
    <img src={bg1} alt="" />
</div> */}


    </div>
  );
};

export default RightNav;
