import React, {} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

// Import Components
import Index from "../components/Index/Index";
import Login from "../components/Login/Index";
import About from "../components/About/Index";
import EventCreater from "../components/CreateEvent/Index";
import NoMatch from "../components/NoMatch";
import Events from "../components/Events/Index";

require('dotenv').config();
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/create" component={EventCreater} />
      <Route exact path ="/events" component={Events} />
      <Route component={NoMatch}/>           
    </Switch>
</BrowserRouter>
);

export default App;
