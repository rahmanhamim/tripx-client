import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "./components/Shared/Headers/Headers";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Headers></Headers>
    <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route exact path="/login">
      <Login></Login>
     </Route>
     <PrivateRoute exact path="/booking/:bookingId">
      <Booking></Booking>
     </PrivateRoute>
    </Switch>
    <Footer></Footer>
   </Router>
  </AuthProvider>
 );
}

export default App;
