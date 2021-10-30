import React from "react";
import "./Headers.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/tripx-logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";

const Headers = () => {
 const { user, logOut } = useAuth();
 // console.log(logOut);
 // console.log(user);

 const [cartItems, setCartItems] = useState([]);
 useEffect(() => {
  fetch(`https://stark-tor-04030.herokuapp.com/bookings/${user.email}`)
   .then((res) => res.json())
   .then((data) => setCartItems(data));
 }, [user]);

 // console.log(cartItems);

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
     <Nav className="ms-auto d-flex align-items-center">
      <Link to="/" className="headers-link">
       Home
      </Link>
      <Link to="/allbookings" className="headers-link">
       Manage All Bookings
      </Link>
      <Link to="/addservice" className="headers-link">
       Add Service
      </Link>

      {!user.email ? (
       <Link className="login-link" to="/login">
        <i className="far fa-user icon"></i> Login
       </Link>
      ) : (
       <>
        <img
         style={{ width: "40px", height: "40px", borderRadius: "50%" }}
         className="ms-3 me-2"
         src={user.photoURL}
         alt=""
        />{" "}
        <small>{user.displayName}</small>
        <Link to="/manageorder">
         <button type="button" className="cart-btn position-relative">
          My Cart <i className="fas fa-cart-plus"></i>
         </button>
        </Link>
        <Link onClick={logOut} className="login-link" to="/">
         <i className="far fa-user icon"></i> Logout
        </Link>
       </>
      )}
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Headers;
