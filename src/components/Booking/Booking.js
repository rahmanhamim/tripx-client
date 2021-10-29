import React from "react";
import { useParams } from "react-router";
import "./Booking.css";
const Booking = () => {
 const { bookingId } = useParams();
 return (
  <div className="container booking-container">
   <h1>This is booking: {bookingId} </h1>
  </div>
 );
};

export default Booking;
