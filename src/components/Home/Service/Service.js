import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
 const { name, img, price, rating, tourDays } = service;
 return (
  <Col>
   <Card className="service-card h-100">
    <Card.Img variant="top" src={img} />
    <Card.Body>
     <Card.Title>
      <div className="d-flex justify-content-between">
       <div>
        <p className="m-0">
         ${price}/<small className="card-small-text">per person</small>
        </p>
       </div>
       <div>
        <small className="card-small-text">
         <i className="fas fa-calendar-check"></i> {tourDays} days/
         {Number(tourDays) + 1} nights{" "}
        </small>
       </div>
      </div>
     </Card.Title>
     <div>
      <h4 className="card-name">
       <i className="fas fa-map-marker-alt text-muted"></i> {name}
      </h4>
     </div>
     <div className="d-flex justify-content-between">
      <div>
       <i className="fas fa-star rating-icon-card"></i> {rating}k+ rating
      </div>
      <div>
       <button className="btn-regular">Book Now</button>
      </div>
     </div>
    </Card.Body>
   </Card>
  </Col>
 );
};

export default Service;
