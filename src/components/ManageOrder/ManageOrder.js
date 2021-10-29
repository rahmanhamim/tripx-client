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

 return (
  <div className="manage-order container">
   <div className="my-4">
    <h3 className="text-center section-title">My Bookings</h3>
    <p className=" text-center section-subtitle">manage bookings</p>
   </div>
   <Table striped bordered hover>
    <thead>
     <tr>
      <th>#</th>
      <th>Booking name</th>
      <th>Price</th>
      <th>Action</th>
     </tr>
    </thead>
    <tbody>
     {cartItems?.map((items, index) => (
      <tr>
       <td>{index + 1}</td>
       <td>{items.service.name}</td>
       <td>${items.service.price}</td>
       <button>delete</button>
      </tr>
     ))}
    </tbody>
   </Table>
  </div>
 );
};

export default ManageOrder;
