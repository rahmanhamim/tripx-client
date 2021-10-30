import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./ManageOrder.css";

const ManageOrder = () => {
 const { user } = useAuth();
 // console.log(user);

 const [cartItems, setCartItems] = useState([]);
 useEffect(() => {
  fetch(`http://localhost:5000/bookings/${user.email}`)
   .then((res) => res.json())
   .then((data) => setCartItems(data));
 }, [user]);

 console.log(cartItems);

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
     const remaining = cartItems.filter((items) => items._id !== id);
     setCartItems(remaining);
    });
  }
 };

 return (
  <div className="manage-order container">
   <div className="my-4">
    <h3 className="text-center section-title">My Bookings</h3>
    <p className=" text-center section-subtitle">manage bookings</p>
   </div>
   <Table bordered hover>
    <thead>
     <tr>
      <th>#</th>
      <th>Booking name</th>
      <th>Price</th>
      <th>Status</th>
      <th>Action</th>
     </tr>
    </thead>
    <tbody>
     {cartItems?.map((items, index) => (
      <tr key={index + 1}>
       <td>{index + 1}</td>
       <td>{items.service.name}</td>
       <td>${items.service.price}</td>
       <td>{items?.status}</td>
       <td>
        <button
         className="booking-delete-btn"
         onClick={() => handleDelete(items._id)}
        >
         delete
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </Table>
  </div>
 );
};

export default ManageOrder;
