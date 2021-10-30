import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
 const { register, handleSubmit, reset } = useForm();

 const onSubmit = (data) => {
  console.log(data);
  fetch("http://localhost:5000/services", {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.insertedId) {
     alert("Services added successfully");
    }
    reset();
   });
 };

 return (
  <div className="add-service container my-5">
   <form
    className="add-service-form mx-auto"
    style={{ maxWidth: "30rem" }}
    onSubmit={handleSubmit(onSubmit)}
   >
    <input {...register("name")} placeholder="Service Name" />
    <input type="url" {...register("img")} placeholder="Image URL" />
    <input type="number" {...register("price")} placeholder="Price" />
    <input type="number" {...register("rating")} placeholder="Rating" />
    <input
     type="number"
     {...register("tourDays")}
     placeholder="Tour Day Duration"
    />

    <input className="book-btn" type="submit" value="Add Service" />
   </form>
  </div>
 );
};

export default AddService;
