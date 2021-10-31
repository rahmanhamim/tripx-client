import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/google.svg";
import "./Login.css";

const Login = () => {
 const { googleSignIn, setUser, setIsLoading } = useAuth();

 const history = useHistory();
 const location = useLocation();
 const url = location.state?.from || "/";
 //  console.log(url);

 const handleGoogleLogin = () => {
  googleSignIn()
   .then((result) => {
    setUser(result.user);
    history.push(url);
   })
   .catch((error) => {
    console.log(error);
   })
   .finally(() => {
    setIsLoading(false);
   });
 };

 return (
  <div className="login-section container d-flex justify-content-center align-items-center">
   <div className="login-card text-center">
    <h3>Login</h3>
    <button onClick={handleGoogleLogin} className="login-btn">
     <img src={googleLogo} style={{ width: "25px" }} alt="" /> Continue with
     Google
    </button>
   </div>
  </div>
 );
};

export default Login;
