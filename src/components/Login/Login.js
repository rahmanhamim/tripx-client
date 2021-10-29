import React from "react";
import useFirebase from "../../hooks/useFirebase";
import googleLogo from "../../images/google.svg";
import "./Login.css";

const Login = () => {
 const { googleSignIn, user } = useFirebase();
 console.log(user);
 return (
  <div className="login-section container d-flex justify-content-center align-items-center">
   <div className="login-card text-center">
    <h3>Login</h3>
    <button onClick={googleSignIn} className="login-btn">
     <img src={googleLogo} style={{ width: "25px" }} alt="" /> Continue with
     Google
    </button>
   </div>
  </div>
 );
};

export default Login;
