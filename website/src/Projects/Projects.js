import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import ProjectCarousel from "./ProjectCarousel";
import "./../App.css";

import { withRouter } from "react-router";
class Projects extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home">
          <Navbar />
          <ProjectCarousel />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Projects);
