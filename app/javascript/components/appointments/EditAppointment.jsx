import React from "react";
import { Link } from "react-router-dom";

class EditAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
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
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/appointments/${id}`;

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
      method: "PUT",
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
      .catch(error => console.log(error.message));
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/appointments/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({
        id: response.id,
        doctor_id: response.doctor_id,
        patient_id: response.patient_id,
        date: response.date,
        time: response.time,
      }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const {
      doctor_id,
      patient_id,
      date,
      time,
    } = this.state;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Edit Appointment
            </h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="doctor_id">Doctor</label>
              <input
                type="text"
                name="doctor_id"
                id="doctor_id"
                className="form-control"
                value={doctor_id}
                required
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="patient_id">Patient</label>
              <input
                type="text"
                name="patient_id"
                id="patient_id"
                className="form-control"
                value={patient_id}
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
                value={date}
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
                value={time}
                required
                onChange={this.onChange}
              />
            </div>

              <button type="submit" className="btn btn-secondary mt-3">
                Save Appointment
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

export default EditAppointment;
