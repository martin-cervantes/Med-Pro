import React from "react";
import { Link } from "react-router-dom";

class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
  }

  componentDidMount() {
      const url = "/api/doctors/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ doctors: response }))
        .catch(() => this.props.history.push("/"));
  }

  render() {
    const { doctors } = this.state;
    const allDoctors = (<table className="table table-striped">
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
          {doctors.map((doctor, index) => (
              <tr key={index}>
                <th scope="row">{doctor.id}</th>
                <td>{doctor.first_name}</td>
                <td>{doctor.last_name}</td>
                <td>{doctor.email}</td>
                <td><Link type="button" className="btn btn-outline-primary" to={`/doctor/${doctor.id}`}>Show <i class="fas fa-user"></i></Link></td>
                <td><Link type="button" className="btn btn-outline-secondary" to="/">Edit <i className="fas fa-edit"></i></Link></td>
                <td><Link type="button" className="btn btn-outline-danger" to="/">Delete <i className="fas fa-trash-alt"></i></Link></td>
              </tr>
          ))}
        </tbody>
      </table>
    );

    const noDoctor = (
     <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
       <h4>
         No doctors yet. Why not <Link to="/new_doctor">create one</Link>
       </h4>
     </div>
    );

    return (
      <>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
          <h1 className="display-4">Doctors</h1>
          </div>
        </div>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/doctor" className="btn btn-secondary">
                New Doctor
              </Link>
            </div>
            <div className="row">
              {doctors.length > 0 ? allDoctors : noDoctor}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Doctors;
