import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Doctors from "../components/doctors/Doctors";
import Doctor from "../components/doctors/Doctor";
import NewDoctor from "../components/doctors/NewDoctor";
import EditDoctor from "../components/doctors/EditDoctor";

const App = props => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/doctors" exact component={Doctors} />
      <Route path="/doctor/:id" exact component={Doctor} />
      <Route path="/doctor" exact component={NewDoctor} />
      <Route path="/doctor/:id/edit" exact component={EditDoctor} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
