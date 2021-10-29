import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "./components/Shared/Headers/Headers";
import Home from "./components/Home/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";

function App() {
 return (
  <Router>
   <Headers></Headers>
   <Switch>
    <Route exact path="/">
     <Home></Home>
    </Route>
    <Route exact path="/login">
     <Login></Login>
    </Route>
    <Route exact path="/booking/:bookingId">
     <Booking></Booking>
    </Route>
   </Switch>
   <Footer></Footer>
  </Router>
 );
}

export default App;
