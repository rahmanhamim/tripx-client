import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageAllBookings.css";

const ManageAllBookings = () => {
 const [bookings, setBookings] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/bookings")
   .then((res) => res.json())
   .then((data) => setBookings(data));
 }, []);

 const handleDelete = (id) => {
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
 };

 return (
  <div className="container manage-order">
   <div className="my-4">
    <h3 className="text-center section-title">Manage All Bookings</h3>
    <p className=" text-center section-subtitle">manage all bookings</p>
   </div>

   <Table bordered hover>
    <thead>
     <tr>
      <th>#</th>
      <th>Client email</th>
      <th>Phone</th>
      <th>Booking name</th>
      <th>Price</th>
      <th>Status</th>
      <th>Action</th>
     </tr>
    </thead>
    <tbody>
     {bookings?.map((booking, index) => (
      <tr key={index + 1}>
       <td>{index + 1}</td>
       <td>{booking?.email}</td>
       <td>{booking?.phone}</td>
       <td>{booking?.service?.name}</td>
       <td>${booking?.service?.price}</td>
       <td>{booking?.status} </td>
       <td>
        <button className="booking-active-btn">Active</button>
        <button
         className="booking-delete-btn"
         onClick={() => handleDelete(booking._id)}
        >
         Delete
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </Table>
  </div>
 );
};

export default ManageAllBookings;
