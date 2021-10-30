import React from "react";
import "./PageNotFound.css";
import notFoundImg from "../../images/pagenotfound.gif";

const PageNotFound = () => {
 return (
  <div className="page-not-found container text-center my-4">
   <h3>Sorry Page Not Found</h3>
   <img src={notFoundImg} alt="" className="img-fluid" />
  </div>
 );
};

export default PageNotFound;
