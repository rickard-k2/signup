import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };

    this.changeFullName = this.changeFullName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({ fullName: event.target.value });
  }

  changeUsername(event) {
    this.setState({ username: event.target.value });
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/app/signup", this.state)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeUsername}
                value={this.state.username}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input type="submit" className="btn btn-danger btn-block" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
