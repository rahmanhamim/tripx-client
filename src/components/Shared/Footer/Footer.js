import React from "react";
import "./Footer.css";
import logo from "../../../images/tripx-logo.png";
import payLogo1 from "../../../images/payment-card-1.png";
import payLogo2 from "../../../images/payment-card-2.png";
import payLogo3 from "../../../images/payment-card-3.png";
import payLogo4 from "../../../images/payment-card-4.png";
import payLogo5 from "../../../images/payment-card-5.png";

const Footer = () => {
 return (
  <footer className="container-fluid py-5">
   <div className="container">
    <div className="row">
     <div className="col-12 col-md-3">
      <div className="d-flex align-items-center">
       <img src={logo} style={{ width: "50px" }} alt="" />{" "}
       <h2 className="m-0">
        Trip<span className="tripx-span">X</span>{" "}
       </h2>
      </div>
      <div>
       <p className="fw-light my-2">
        As one of the world’s leading travel content providers, TripX
        specialises in two distinct services for brands and tourists.
       </p>
      </div>
      <div>
       <h4>Follow Us:</h4>
       <div className="icon">
        <i className="fab fa-2x fa-facebook mx-2"></i>
        <i className="fab fa-2x fa-instagram mx-2"></i>
        <i className="fab fa-2x fa-twitter mx-2"></i>
        <i className="fab fa-2x fa-linkedin-in mx-2"></i>
       </div>
      </div>
     </div>
     <div className="col-12 col-md-3 fw-light">
      <h4 className="mb-4">Contact Us</h4>
      <div>
       <p>
        <i className="fas icon fa-phone-volume"></i>{" "}
        <span>+880 1712-089306</span>
       </p>
       <p>
        <i className="fas icon fa-envelope-open-text"></i>{" "}
        <span>write@tripX.com</span>
       </p>
       <p>
        <i className="fas icon fa-map-marker-alt"></i>{" "}
        <span>
         37 Hawapara, Sylhet -3100 <br /> Bangladesh.
        </span>
       </p>
      </div>
     </div>
     <div className="col-12 col-md-3">
      <h4 className="mb-4">Support</h4>
      <div className="footer-text-small">
       <p>Contact us</p>
       <p>About us</p>
       <p>Services</p>
       <p>Our Blogs</p>
       <p>Terms And Conditions</p>
      </div>
     </div>
     <div className="col-12 col-md-3">
      <h4 className="mb-4">We Accept: </h4>
      <div className="footer-text-small">
       <img
        src={payLogo1}
        className="m-2"
        style={{ maxWidth: "100px" }}
        alt=""
       />
       <img
        src={payLogo2}
        className="m-2"
        style={{ maxWidth: "100px" }}
        alt=""
       />
       <img
        src={payLogo3}
        className="m-2"
        style={{ maxWidth: "100px" }}
        alt=""
       />
       <img
        src={payLogo4}
        className="m-2"
        style={{ maxWidth: "100px" }}
        alt=""
       />
       <img
        src={payLogo5}
        className="m-2"
        style={{ maxWidth: "100px" }}
        alt=""
       />
      </div>
     </div>
    </div>
    <hr />
    <div className="text-center">
     <p>All rights reserved &copy; TripX</p>
     <small>
      Developed by |{" "}
      <a
       rel="noreferrer"
       target="_blank"
       href="https://www.facebook.com/rahmanhamim.info"
      >
       Rahman Hamim
      </a>
     </small>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
