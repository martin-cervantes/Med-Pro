import React from "react";
import { Link } from "react-router-dom";

class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };

    window.scrollTo(0, 0);
  }

  componentDidMount() {
      const url = "/api/patients/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ patients: response }))
        .catch(() => this.props.history.push("/"));
  }

  deletePatient(id) {
    const url = `/api/patients/${id}`;
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
    const { patients } = this.state;
    const allPatients = (<table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
        <tbody>
          {patients.map((patient, index) => (
              <tr key={index}>
                <th scope="row">{patient.id}</th>
                <td>{patient.first_name}</td>
                <td>{patient.last_name}</td>
                <td>{patient.email}</td>
                <td><Link type="button" className="btn btn-outline-primary" to={`/patient/${patient.id}`}>Show <i className="fas fa-user"></i></Link></td>
                <td><Link type="button" className="btn btn-outline-secondary" to={`/patient/${patient.id}/edit`}>Edit <i className="fas fa-edit"></i></Link></td>
                <td><button type="button" className="btn btn-outline-danger" onClick={() => this.deletePatient(patient.id)}>Delete <i className="fas fa-trash-alt"></i></button></td>
              </tr>
          ))}
        </tbody>
      </table>
    );

    const noPatient = (
     <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
       <h4>
         No patients yet. Why not <Link to="/new_patient">create one</Link>
       </h4>
     </div>
    );

    return (
      <>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
          <h1 className="display-4">Patients</h1>
          </div>
        </div>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/new_patient" className="btn btn-secondary">
                New Patient
              </Link>
            </div>
            <div className="row">
              {patients.length > 0 ? allPatients : noPatient}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Patients;
