import React, { Component } from "react";
import { AuthTokenContext } from "./AuthToken";
import "../css/App.css";


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : ""
    }
  }
  render() {
    if (this.context.authToken === null) {
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            StoryBoard
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/stories">
                  Browse Stories
                </a>
              </li>
            </ul>
            <button
              type="button"
              class="btn btn-light header"
              data-toggle="modal"
              data-target="#login-modal"
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-light header"
              data-toggle="modal"
              data-target="#signup-modal"
            >
              Signup
            </button>
          </div>
        </nav>
      );
    } else {
      let greeting
      if(localStorage.getItem.username !== null){
        let user = localStorage.getItem("username")
        greeting = <p className="text-white mr-2">Hi {user}</p>
      }
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            StoryBoard
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/stories">
                  Browse Stories
                </a>
              </li>
            </ul>
            {greeting}
            <button
              type="button"
              class="btn btn-light"
              onClick={this.context.logout}
            >
              Logout
            </button>
          </div>
        </nav>
      );
    }
  }
}

Header.contextType = AuthTokenContext;
export default Header;
