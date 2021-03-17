import React from "react";
import { Link } from "react-router-dom";

class NewAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor_id: "",
      patient_id: "",
      date: "",
      time: "",
    };

    window.scrollTo(0, 0);
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
    const url = "/api/appointments/create";
    const {
      doctor_id,
      patient_id,
      date,
      time,
    } = this.state;

    if (doctor_id.length == 0 || patient_id.length == 0 || date.length == 0 || time.length == 0)
      return;

    const body = {
      doctor_id,
      patient_id,
      date,
      time,
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
      .then(response => this.props.history.push(`/appointment/${response.id}`))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              New Appointment
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="doctor_id">Doctor</label>
                <input
                  type="number"
                  name="doctor_id"
                  id="doctor_id"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="patient_id">Patient</label>
                <input
                  type="number"
                  name="patient_id"
                  id="patient_id"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn btn-secondary mt-3">
                Create Appointment
              </button>
              <Link to="/appointments" className="btn btn-link mt-3">
                Back to appointments
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewAppointment;
