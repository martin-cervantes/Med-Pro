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
    const allDoctors = (<table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th></th>
            </tr>
          </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <th scope="row">{doctor.id}</th>
              <td>{doctor.first_name}</td>
              <td>{doctor.last_name}</td>
              <td></td>
            </tr>))}
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
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
          <h1 className="display-4">Doctors</h1>
          </div>
        </section>
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
