import React from "react";
import { Link } from "react-router-dom";
import doctors from '../../assets/images/doctor.png';

const Home = () => (
  <div>
    <h1 className="display-4 text-center">Med-Pro</h1>
    <div className="d-flex flex-row justify-content-around">
      <Link
        to="/doctors"
        className="d-flex flex-column btn btn-light"
        role="button"
      >
        <img src={doctors} alt="Doctors" title="Doctors" />
        <span className="title">Doctors</span>
      </Link>

      <Link
        to="/doctors"
        className="d-flex flex-column btn btn-light"
        role="button"
      >
        <img src={doctors} alt="Doctors" title="Doctors" />
        <span className="title">Doctors</span>
      </Link>

      <Link
        to="/doctors"
        className="d-flex flex-column btn btn-light"
        role="button"
      >
        <img src={doctors} alt="Doctors" title="Doctors" />
        <span className="title">Doctors</span>
      </Link>
    </div>
  </div>
);

export default Home;
