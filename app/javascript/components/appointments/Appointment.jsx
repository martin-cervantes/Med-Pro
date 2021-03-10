import React from "react";
import { Link } from "react-router-dom";

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      doctor_id: "",
      patient_id: "",
      date: "",
      time: "",
    };

    this.deleteAppointment = this.deleteAppointment.bind(this);
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

  deleteAppointment() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/appointments/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const {
      id,
      doctor_id,
      patient_id,
      date,
      time,
    } = this.state;

    return (
      <div className="">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Doctor:</span> {`${doctor_id}`}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Patient:</span> {patient_id}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Date:</span> {date}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Time:</span> {time}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-2">
              <Link to={`/appointment/${id}/edit`} className="btn btn-secondary mb-2">
                Edit Appointment
              </Link>

              <button type="button" className="btn btn-danger" onClick={this.deleteAppointment}>
                Delete Appointment
              </button>
            </div>
          </div>

          <Link to="/appointments" className="btn btn-link">
            Back to appointments
          </Link>
        </div>
      </div>
    );
  }
}

export default Appointment;
