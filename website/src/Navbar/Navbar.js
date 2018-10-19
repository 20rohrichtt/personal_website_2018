import React, { Component } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class App extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="HeaderText">Taylor Rohrich</div>
          <div
            style={{
              float: "right",
              marginTop: "auto",
              marginBottom: "auto",
              padding: "10px"
            }}
          >
            Made with React.js
          </div>
        </div>

        <div className="Navbar">
          <Link to="/" className="NavItem">
            Home
          </Link>
          <Link to="/Projects" className="NavItem">
            Projects
          </Link>
          <Link to="/About" className="NavItem">
            About
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
