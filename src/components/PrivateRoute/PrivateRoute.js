import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import spinnerGif from "../../images/loading2.gif";
import "./PrivateRoute.css";

const PrivateRoute = ({ children, ...rest }) => {
 const { user, isLoading } = useAuth();

 if (isLoading) {
  return (
   <div className="mx-auto text-center loading-container">
    <img
     className="img-fluid"
     style={{ width: "400px" }}
     src={spinnerGif}
     alt=""
    />
   </div>
  );
 }

 return (
  <Route
   {...rest}
   render={({ location }) =>
    user.email ? (
     children
    ) : (
     <Redirect
      to={{ pathname: "/login", state: { from: location } }}
     ></Redirect>
    )
   }
  ></Route>
 );
};

export default PrivateRoute;
