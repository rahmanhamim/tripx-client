import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Review.css";
import reviewer1 from "../../../images/reviewer-1.png";
import reviewer2 from "../../../images/reviewer-2.png";
import reviewer3 from "../../../images/reviewer-3.png";

const Review = () => {
 return (
  <section className="container review-section my-5 py-2">
   <div className="text-center">
    <p className="section-subtitle">Our Traveller Say</p>
    <h2>
     What Our Traveller Say <br /> About Us
    </h2>
   </div>

   <Row xs={1} md={3} className="g-4 my-4">
    <Col>
     <Card className="h-100 review-card py-4 text-center ">
      <Card.Img variant="top" src={reviewer1} />
      <Card.Body>
       <Card.Title>
        Dina James <br /> <small className="card-small-text">Traveller</small>{" "}
       </Card.Title>
       <Card.Text className="review-card-text fw-lighter p-3">
        <i class="fas fa-3x fa-angle-double-right"></i> <br /> I love the way
        you guys are always very helpful and accomodating. Your service is
        excellent and I am more than happy to use your organisation for all
        future holidays.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col>
     <Card className="h-100 review-card py-4 text-center ">
      <Card.Img variant="top" src={reviewer2} />
      <Card.Body>
       <Card.Title>
        Devil Kyle
        <br /> <small className="card-small-text">Traveller</small>{" "}
       </Card.Title>
       <Card.Text className="review-card-text fw-lighter p-3">
        <i class="fas fa-3x fa-angle-double-right"></i> <br /> Yes, we would use
        you again and recommend you to others. Little fuss and reassured us with
        our booking in these challenging times.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col>
     <Card className="h-100 review-card py-4 text-center ">
      <Card.Img variant="top" src={reviewer3} />
      <Card.Body>
       <Card.Title>
        Jack Hoston
        <br /> <small className="card-small-text">Traveller</small>{" "}
       </Card.Title>
       <Card.Text className="review-card-text fw-lighter p-3">
        <i class="fas fa-3x fa-angle-double-right"></i> <br />
        Easy to book, second time we have used and will continue to book through
        travel online. No hassle, everything was sorted for arrival
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
   </Row>
  </section>
 );
};

export default Review;
