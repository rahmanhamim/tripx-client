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
  const bookingId = bookings[index]._id;
  const status = { status: "activated" };

  console.log(bookingId);
  fetch(`http://localhost:5000/bookings/${bookingId}`, {
   method: "PUT",
   headers: { "content-type": "application/json" },
   body: JSON.stringify(status),
  })
   .then((res) => res.json())
   .then((result) => {
    console.log(result);
   });
 };

 return (
  <div className="container manage-order">
   <div className="my-4">
    <h3 className="text-center section-title">Manage All Bookings</h3>
    <p className=" text-center section-subtitle">manage all bookings</p>
   </div>

   <div className="container">
    <div className="row">
     <div className="col-1 border">#</div>
     <div className="col-4 border">
      <strong>Client </strong>
     </div>
     <div className="col-5 border">
      <strong>Package</strong>
     </div>
     <div className="col-2 border">
      <strong>Status</strong>
     </div>
    </div>

    {bookings?.map((booking, index) => (
     <div key={index + 1} className="row all-order-content">
      <div className="col-1 border py-2">{index + 1}</div>
      <div className="col-4 border py-2">
       {booking.name} <i className="fas fa-phone"></i> {booking.phone}
      </div>
      <div className="col-5 border py-2">{booking.service.name}</div>
      <div className="col-2 border py-2">{booking?.status}</div>
      <div className="col-12 text-center py-2">
       <button
        id="active"
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
