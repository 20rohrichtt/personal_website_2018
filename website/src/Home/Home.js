import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import FeaturedProject from "./FeaturedProject";
import Footer from "./../Footer/Footer";
import "./../App.css";

import { withRouter } from "react-router";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home">
          <Navbar />
          <FeaturedProject />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
