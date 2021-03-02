import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Doctors from "../components/doctors/Doctors";
import Doctor from "../components/doctors/Doctor";
import NewDoctor from "../components/doctors/NewDoctor";
import EditDoctor from "../components/doctors/EditDoctor";

const App = props => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/doctors" exact component={Doctors} />
      <Route path="/doctor/:id" exact component={Doctor} />
      <Route path="/doctor" exact component={NewDoctor} />
      <Route path="/doctor/:id/edit" exact component={EditDoctor} />
    </Switch>
  </Router>
);

export default App;
