import React from "react";
import "./Headers.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/tripx-logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Headers = () => {
 const { user, logOut } = useAuth();
 // console.log(logOut);

 return (
  <Navbar bg="light" expand="lg">
   <Container>
    <Link
     to="/"
     className="navbar-branding d-flex justify-content-center align-items-center"
    >
     <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
     <h1 className="m-0">
      Trip<span className="tripx-span">X</span>
     </h1>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
      <Link to="/" className="headers-link">
       Home
      </Link>
      <Link to="/booking" className="headers-link">
       Booking
      </Link>
      {!user.email ? (
       <Link className="login-link" to="/login">
        <i className="far fa-user icon"></i> Login
       </Link>
      ) : (
       <Link onClick={logOut} className="login-link" to="/">
        <i className="far fa-user icon"></i> Logout
       </Link>
      )}
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Headers;
