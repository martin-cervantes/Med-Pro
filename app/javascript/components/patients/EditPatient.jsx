import React from "react";
import { Link } from "react-router-dom";

class EditPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
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

    const url = `/api/patients/${id}`;

    const {
      first_name,
      last_name,
      email,
    } = this.state;

    if (first_name.length == 0 || last_name.length == 0 || email.length == 0)
      return;

    const body = {
      first_name,
      last_name,
      email,
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
      .then(response => this.props.history.push(`/patient/${response.id}`))
      .catch(error => console.log(error.message));
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
      }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const {
      first_name,
      last_name,
      email,
    } = this.state;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Edit Patient
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                  value={first_name}
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
                  value={last_name}
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  required
                  onChange={this.onChange}
                />
              </div>

              <button type="submit" className="btn btn-secondary mt-3">
                Save Patient
              </button>

              <Link to="/patients" className="btn btn-link mt-3">
                Back to patients
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPatient;
