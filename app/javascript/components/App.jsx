import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

import Doctors from "./doctors/Doctors";
import Doctor from "./doctors/Doctor";
import NewDoctor from "./doctors/NewDoctor";
import EditDoctor from "./doctors/EditDoctor";

import Patients from "./patients/Patients";
import Patient from "./patients/Patient";
import NewPatient from "./patients/NewPatient";
import EditPatient from "./patients/EditPatient";

import Appointments from "./appointments/Appointments";
import Appointment from "./appointments/Appointment";
import NewAppointment from "./appointments/NewAppointment";
import EditAppointment from "./appointments/EditAppointment";

const App = props => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/doctors" exact component={Doctors} />
      <Route path="/doctor/:id" exact component={Doctor} />
      <Route path="/new_doctor" exact component={NewDoctor} />
      <Route path="/doctor/:id/edit" exact component={EditDoctor} />

      <Route path="/patients" exact component={Patients} />
      <Route path="/patient/:id" exact component={Patient} />
      <Route path="/new_patient" exact component={NewPatient} />
      <Route path="/patient/:id/edit" exact component={EditPatient} />

      <Route path="/appointments" exact component={Appointments} />
      <Route path="/appointment/:id" exact component={Appointment} />
      <Route path="/new_appointment" exact component={NewAppointment} />
      <Route path="/appointment/:id/edit" exact component={EditAppointment} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
