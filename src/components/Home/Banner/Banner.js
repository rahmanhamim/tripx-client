import React from "react";
import "./Banner.css";

const Banner = () => {
 return (
  <section className="banner-container container-fluid d-flex justify-content-center align-items-center">
   <div className="container">
    <div className="row">
     <div className="col-12 col-md-4">
      <p className="display-3 text-light ">
       Amazing Tour <br /> on Earth
      </p>
      <p className="banner-subtitle">Exlpore like never before!</p>
      <button className="btn-regular">Book Now</button>
     </div>
     <div className="col-12 col-md-8"></div>
    </div>
   </div>
  </section>
 );
};

export default Banner;
