import React from "react";
import { Link } from "react-router-dom";

class NewDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      medical_speciality: "Cardiothoracic surgery",
      username: "",
      password: "",
      confirm_password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/doctors/create";
    const {
      first_name,
      last_name,
      email,
      medical_speciality,
      username,
      password,
      confirm_password,
    } = this.state;

    if (first_name.length == 0 || last_name.length == 0 || email.length == 0 || username.length == 0 || password.length == 0 || confirm_password.length == 0)
      return;

    if (password !== confirm_password)
      return;

    const body = {
      first_name,
      last_name,
      email,
      medical_speciality,
      username,
      password,
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/doctor/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              New Doctor
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="medical_speciality">Medical Speciality</label>
                <select
                  className="form-control"
                  name="medical_speciality"
                  id="medical_speciality"
                  onChange={this.onChange}
                >
                  <option value="Cardiothoracic surgery">Cardiothoracic surgery</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="Forensic">Forensic</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="General surgery">General surgery</option>
                  <option value="Geriatrics">Geriatrics</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Hematology">Hematology</option>
                  <option value="Neonatology">Neonatology</option>
                  <option value="Neurosurgery">Neurosurgery</option>
                  <option value="Obstetrics">Obstetrics</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Orthopedic">Orthopedic</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Physical Medicine">Physical Medicine</option>
                  <option value="Plastic surgery">Plastic surgery</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Trauma surgery">Trauma surgery</option>
                  <option value="Urology">Urology</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm_password">Confirm password</label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn btn-secondary mt-3">
                Create Doctor
              </button>
              <Link to="/doctors" className="btn btn-link mt-3">
                Back to doctors
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDoctor;
