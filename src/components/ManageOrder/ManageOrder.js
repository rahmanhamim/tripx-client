import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

   <div className="container">
    <div className="row">
     <div className="col-1 border">#</div>
     <div className="col-3 border">
      <strong>Package Name </strong>
     </div>
     <div className="col-2 border">
      <strong>Price</strong>
     </div>
     <div className="col-3 border">
      <strong>Status</strong>
     </div>
     <div className="col-3 border">
      <strong>Action</strong>
     </div>
    </div>

    {cartItems?.map((items, index) => (
     <div key={index + 1} className="row">
      <div className="col-1 border py-2">{index + 1}</div>
      <div className="col-3 border py-2">{items.service.name}</div>
      <div className="col-2 border py-2">{items.service.price}</div>
      <div className="col-3 border py-2">{items?.status}</div>
      <div className="col-3 border py-2">
       <button
        className="booking-delete-btn"
        onClick={() => handleDelete(items._id)}
       >
        delete
       </button>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ManageOrder;
