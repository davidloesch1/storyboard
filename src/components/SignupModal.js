import React, { Component } from "react";
import { apiURL } from '../url'

import "../css/App.css";
const axios = require("axios");

class SignupModal extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      first: "",
      last: ""
    };
  }

  signup = () => {
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords don't match!");
    } else {
      let payload = {
        email: this.state.email,
        firstName: this.state.first,
        lastName: this.state.last,
        password: this.state.password,
        username: this.state.username
      };
      console.log(apiURL, payload)
      axios.post( apiURL + "/users/signup", payload)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div
        class="modal fade"
        id="signup-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Signup
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
                  <div class="row">
                    <div class="col">
                      <label for="first">First Name</label>

                      <input
                        id="first"
                        name="first"
                        value={this.state.first}
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="col">
                      <label for="last">Last Name</label>

                      <input
                        id="last"
                        name="last"
                        value={this.state.last}
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="username"
                    class="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                  />
                  <small id="usernameHelp" class="form-text text-muted">
                    This is what appears on submissions and plots you create.
                    Others will see this.
                  </small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    class="form-control"
                    id="password"
                  />
                </div>
                <div class="form-group">
                  <label for="confirm-password">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    type="password"
                    class="form-control"
                    id="confirm-password"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.signup}
                data-toggle="modal"
                data-target="#login-modal"
                data-dismiss="modal"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupModal;
