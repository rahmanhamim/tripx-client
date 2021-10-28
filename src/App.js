import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "./components/Shared/Headers/Headers";
import Home from "./components/Home/Home/Home";

function App() {
 return (
  <Router>
   <Headers></Headers>
   <Switch>
    <Route exact path="/">
     <Home></Home>
    </Route>
   </Switch>
  </Router>
 );
}

export default App;
