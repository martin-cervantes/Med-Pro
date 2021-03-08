import React from "react";
import { Link } from "react-router-dom";
import doctors from '../../assets/images/doctor.png';
import patients from '../../assets/images/patient.png';
import appointments from '../../assets/images/appointment.png';

const Home = () => (
  <section>
    <div className="d-flex flex-md-row flex-column justify-content-around">
      <Link
        to="/doctors"
        className="cards d-flex flex-column justify-content-between btn btn-light border border-secondary my-5 mx-md-0 mx-auto"
        role="button"
      >
        <img src={doctors} alt="Doctors" title="Doctors" />
        <span className="title">Doctors</span>
      </Link>

      <Link
        to="/patients"
        className="cards d-flex flex-column justify-content-between btn btn-light border border-secondary my-5 mx-md-0 mx-auto"
        role="button"
      >
        <img src={patients} alt="Patients" title="Patients" />
        <span className="title">Patients</span>
      </Link>

      <Link
        to="/appointments"
        className="cards d-flex flex-column justify-content-between btn btn-light border border-secondary my-5 mx-md-0 mx-auto"
        role="button"
      >
        <img src={appointments} alt="Appointments" title="Appointments" />
        <span className="title">Appointments</span>
      </Link>
    </div>
  </section>
);

export default Home;
