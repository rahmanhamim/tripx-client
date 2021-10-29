import React from "react";
import { useParams } from "react-router";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
 const { bookingId } = useParams();
 const { register, handleSubmit, reset } = useForm();
 const { user } = useAuth();

 const onSubmit = (data) => {
  const userEmail = user.email;
  data.email = userEmail;
  data.bookingId = bookingId;
  // console.log(data);
  fetch("http://localhost:5000/bookings", {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.insertedId) {
     alert("Booking successful");
    }
    reset();
   });
 };

 const [service, setService] = useState({});
 useEffect(() => {
  fetch(`http://localhost:5000/services/${bookingId}`)
   .then((res) => res.json())
   .then((data) => setService(data));
 }, []);

 return (
  <div className="container booking-container my-4">
   <h4>Cost: {service?.price}</h4>
   <div className="row">
    <div className="col-12 col-md-8">
     <img src={service?.img} className="img-fluid" alt="" />
     <h1 className="my-4">{service?.name}</h1>
     <p>
      The Paris Hill Historic District encompasses the historic 19th century
      village of Paris Hill in Paris, Maine. This village was the primary civic
      seat in the town, which is also the county seat of Oxford County, and was
      where county facilities were located until they were moved to South Paris
      in 1895.
     </p>
     <hr />
     <div className="d-flex justify-content-between">
      <p>
       <i className="far fa-clock icon"></i> Duration <br />
       <small>{service?.tourDays} days</small>
      </p>
      <p>
       <i className="fas fa-shoe-prints icon"></i> Tour Type <br />
       <small>Sightseeing</small>
      </p>
      <p>
       <i className="fas fa-hiking icon"></i> Group Size <br />
       <small>40 people</small>
      </p>
      <p>
       <i className="fas fa-language icon"></i> Languages <br />
       <small>All language</small>
      </p>
     </div>
     <hr />
    </div>
    <div className="col-12 col-md-4">
     <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="You name" />
      <input type="number" {...register("phone")} placeholder="Phone" />
      <input type="number" {...register("age")} placeholder="Age" />
      <select {...register("gender")}>
       <option value="male">male</option>
       <option value="female">female</option>
      </select>
      <input className="book-btn" type="submit" value="Confirm" />
     </form>
    </div>
   </div>
  </div>
 );
};

export default Booking;
