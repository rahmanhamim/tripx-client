import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
 const [services, setServices] = useState([]);
 useEffect(() => {
  fetch("./services.json")
   .then((res) => res.json())
   .then((data) => setServices(data));
 }, []);

 return (
  <section className="services-container container my-5">
   <div className="services-title text-center mb-5">
    <p className="section-subtitle mb-1">Choose your package</p>
    <h2 className="section-title">
     Select Your Best Package <br /> For Your Travel
    </h2>
   </div>
   <div>
    <Row xs={1} md={3} className="g-4">
     {services?.map((service) => (
      <Service key={service.id} service={service}></Service>
     ))}
    </Row>
   </div>
  </section>
 );
};

export default Services;