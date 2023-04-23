import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsights from "./EditorInsights/EditorInsights";

const News = () => {
  const newsDetails = useLoaderData();
  const {title,details,image_url,category_id} = newsDetails;
  console.log(newsDetails);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
     
     <Link to={'/category/${category_id}'}>
     <Button variant="primary">All news in this category <FaArrowAltCircleRight/> </Button>
     </Link>
        </Card.Body>
      </Card>
      <EditorInsights />
    </div>
  );
};

export default News;
