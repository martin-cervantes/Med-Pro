import React from "react";
import { Link } from "react-router-dom";

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      username: "",
    };

    this.deletePatient = this.deletePatient.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/patients/${id}`;

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
        username: response.username,
      }))
      .catch(() => this.props.history.push("/"));
  }

  deletePatient() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
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
    const {
      id,
      first_name,
      last_name,
      email,
      username,
    } = this.state;

    return (
      <div className="">
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
              <h5 className="mb-2"><span className="font-weight-bold font-italic">Username:</span> {username}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-2">
              <Link to={`/patient/${id}/edit`} className="btn btn-secondary mb-2">
                Edit Patient
              </Link>

              <button type="button" className="btn btn-danger" onClick={this.deletePatient}>
                Delete Patient
              </button>
            </div>
          </div>

          <Link to="/patients" className="btn btn-link">
            Back to patients
          </Link>
        </div>
      </div>
    );
  }
}

export default Patient;
