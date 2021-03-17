import React from "react";
import { Link } from "react-router-dom";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    };

    window.scrollTo(0, 0);
  }

  componentDidMount() {
      const url = "/api/appointments/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ appointments: response }))
        .catch(() => this.props.history.push("/"));
  }

  deleteAppointment(id) {
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
    const { appointments } = this.state;
    const allAppointments = (<table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Doctor</th>
              <th scope="col">Patient</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
        <tbody>
          {appointments.map((appointment, index) => (
              <tr key={index}>
                <th scope="row">{appointment.id}</th>
                <td>{appointment.doctor_id}</td>
                <td>{appointment.patient_id}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td><Link type="button" className="btn btn-outline-primary" to={`/appointment/${appointment.id}`}>Show <i className="fas fa-user"></i></Link></td>
                <td><Link type="button" className="btn btn-outline-secondary" to={`/appointment/${appointment.id}/edit`}>Edit <i className="fas fa-edit"></i></Link></td>
                <td><button type="button" className="btn btn-outline-danger" onClick={() => this.deleteAppointment(appointment.id)}>Delete <i className="fas fa-trash-alt"></i></button></td>
              </tr>
          ))}
        </tbody>
      </table>
    );

    const noAppointment = (
     <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
       <h4>
         No appointments yet. Why not <Link to="/new_appointment">create one</Link>
       </h4>
     </div>
    );

    return (
      <>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
          <h1 className="display-4">Appointments</h1>
          </div>
        </div>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/new_appointment" className="btn btn-secondary">
                New Appointment
              </Link>
            </div>
            <div className="row">
              {appointments.length > 0 ? allAppointments : noAppointment}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Appointments;
