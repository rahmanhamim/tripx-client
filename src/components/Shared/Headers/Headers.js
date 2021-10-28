import React from "react";
import "./Headers.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/tripx-logo.png";
import { Link } from "react-router-dom";

const Headers = () => {
 return (
  <Navbar bg="light" expand="lg">
   <Container>
    <Navbar.Brand
     href="#home"
     className="d-flex justify-content-center align-items-center"
    >
     <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
     <h1 className="m-0">
      Trip<span className="tripx-span">X</span>
     </h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
      <Link to="" className="headers-link">
       Home
      </Link>
      <Link to="" className="headers-link">
       Order
      </Link>
      <Link to="">Login</Link>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Headers;
