import React, {} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

// Import Components
import Index from "../components/Index/Index";
import EventCreater from "../components/CreateEvent/Index";
import NoMatch from "../components/NoMatch";
import Events from "../components/Events/Index";
import TimeZone from "../components/TimeZone/Index";

require('dotenv').config();
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/create" component={EventCreater} />
      <Route exact path ="/events" component={Events} />
      <Route exact path ="/timezone" component={TimeZone} />
      <Route component={NoMatch}/>           
    </Switch>
</BrowserRouter>
);

export default App;
