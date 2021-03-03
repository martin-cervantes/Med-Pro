import React from "react";
import { Link } from "react-router-dom";
import title from '../../assets/images/title_logo.jpg';

const Header = () => (
  <header className="p-2">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <Link className="navbar-brand" to="/"><img id="title" src={title} alt="Med-Pro" /></Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item home active">
            <Link className="nav-link l" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link l" to="/doctors">Doctors</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link l" to="/patients">Patients</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link l" to="/appointments">Appointments</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
