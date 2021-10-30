import React, { useEffect, useState } from "react";
import "./ManageAllBookings.css";

const ManageAllBookings = () => {
 const [bookings, setBookings] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/bookings")
   .then((res) => res.json())
   .then((data) => setBookings(data));
 }, []);

 const handleDelete = (id) => {
  const query = window.confirm("are you sure?");
  if (!query) {
   return;
  } else {
   const url = `http://localhost:5000/bookings/${id}`;
   fetch(url, {
    method: "DELETE",
   })
    .then((res) => res.json())
    .then((data) => {
     console.log(data);
     if (data.deletedCount) {
      alert("deleted");
     }
     const remaining = bookings.filter((items) => items._id !== id);
     setBookings(remaining);
    });
  }
 };

 const handleStatus = (index) => {
  const service = bookings[index]._id;
  console.log(service);
 };

 return (
  <div className="container manage-order">
   <div className="my-4">
    <h3 className="text-center section-title">Manage All Bookings</h3>
    <p className=" text-center section-subtitle">manage all bookings</p>
   </div>

   <div className="container">
    <div class="row">
     <div class="col-1 border">#</div>
     <div class="col-4 border">
      <strong>Client </strong>
     </div>
     <div class="col-5 border">
      <strong>Package</strong>
     </div>
     <div class="col-2 border">
      <strong>Status</strong>
     </div>
    </div>

    {bookings?.map((booking, index) => (
     <div key={index + 1} class="row all-order-content">
      <div class="col-1 border py-2">{index + 1}</div>
      <div class="col-4 border py-2">
       {booking.name} <i className="fas fa-phone"></i> {booking.phone}
      </div>
      <div class="col-5 border py-2">{booking.service.name}</div>
      <div class="col-2 border py-2">{booking?.status}</div>
      <div class="col-12 text-center py-2">
       <button
        onClick={() => handleStatus(index)}
        className="booking-active-btn mb-1"
       >
        Active
       </button>
       <button
        className="booking-delete-btn "
        onClick={() => handleDelete(booking._id)}
       >
        delete
       </button>{" "}
       <i className="fas fa-arrow-up"></i>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ManageAllBookings;
