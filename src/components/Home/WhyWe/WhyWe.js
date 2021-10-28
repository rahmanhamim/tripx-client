import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./WhyWe.css";

const WhyWe = () => {
 return (
  <section className="container-fluid why-we-section">
   <div className="text-center">
    <p className="section-subtitle pt-4">Why TripX</p>
    <h2 className="sectoion-title">
     Why You Are Travel With <br /> TripX
    </h2>
   </div>

   <div className="container mt-4">
    <Row xs={1} md={4} className="g-4">
     <Col>
      <Card className="why-we-card p-2">
       <Card.Body className="text-center">
        <div>
         <i class="far fa-6x fa-user-circle"></i>
        </div>
        <h4 className="my-2">2000+ Our worldwide guide</h4>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className="why-we-card p-2">
       <Card.Body className="text-center">
        <div>
         <i class="far fa-6x fa-handshake"></i>
        </div>
        <h4 className="my-2">100% trusted travel agency</h4>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className="why-we-card p-2">
       <Card.Body className="text-center">
        <div>
         <i class="fas fa-6x fa-globe-asia"></i>
        </div>
        <h4 className="my-2">10+ year of travel experience</h4>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className="why-we-card p-2">
       <Card.Body className="text-center">
        <div>
         <i class="far fa-6x fa-laugh-beam"></i>
        </div>
        <h4 className="my-2">90% of our traveller happy</h4>
       </Card.Body>
      </Card>
     </Col>
    </Row>
   </div>
  </section>
 );
};

export default WhyWe;
