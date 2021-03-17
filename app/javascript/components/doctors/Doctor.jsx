import React from "react";
import { Link } from "react-router-dom";

class Doctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      medical_speciality: "",
    };

    window.scrollTo(0, 0);
    this.deleteDoctor = this.deleteDoctor.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/doctors/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({
        id: response.id,
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        medical_speciality: response.medical_speciality,
      }))
      .catch(() => this.props.history.push("/"));
  }

  deleteDoctor() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/doctors/${id}`;
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
      first_name,
      last_name,
      email,
      medical_speciality,
    } = this.state;

    return (
      <section className="">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Name:</span> {`${first_name} ${last_name}`}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Email:</span> {email}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Medical speciality:</span> {medical_speciality}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-2">
              <Link to={`/doctor/${id}/edit`} className="btn btn-secondary mb-2">
                Edit Doctor
              </Link>

              <button type="button" className="btn btn-danger" onClick={this.deleteDoctor}>
                Delete Doctor
              </button>
            </div>
          </div>

          <Link to="/doctors" className="btn btn-link">
            Back to doctors
          </Link>
        </div>
      </section>
    );
  }
}

export default Doctor;
