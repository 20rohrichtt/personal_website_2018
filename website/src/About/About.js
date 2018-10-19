import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import {
  python,
  js,
  cplusplus,
  react,
  sql,
  html,
  linkedin,
  github
} from "./../Images";
import "./../App.css";

import { withRouter } from "react-router";
class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home">
          <Navbar />
          <div className="AboutContent">
            <p className="EmphasisTwo">
              I am a 3rd year{" "}
              <span className="EmphasisOne">
                Computer Science Major, Psychology Minor
              </span>{" "}
              at the{" "}
              <span className="EmphasisOne">University of Virginia.</span>
            </p>{" "}
            <h1 className="EmphasisOne">Job Experience</h1>
            <hr className="Divider" />
            <div className="FeaturedProjectFooter">
              <div className="Stats" style={{ padding: "0" }}>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    TwinThread
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    Software Engineering Intern | Summer 2018
                  </div>
                  <div />
                  Software Developer at TwinThread: a predictive maintenance
                  software company. Work focused on creating data visualizations
                  utilizing React.
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    HackCville
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    Program Lead | Fall 2018
                  </div>
                  Program Lead (instructor) for the Source software development
                  course at HackCville. Topics covered include React,
                  JavaScript, relational and non-relational databases, creating
                  backends, and api's.
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    Launch
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    Software Engineering Intern | Summer 2017
                  </div>
                  Intern at Launch, a twelve-week summer program learning full
                  stack development and professional skills while networking
                  with local tech businesses.
                </div>
              </div>
            </div>
            <h1 className="EmphasisOne">Technical Skills</h1>
            <hr className="Divider" />
            <div className="FeaturedProjectFooter">
              <div className="Stats" style={{ padding: "0" }}>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <img className="articleImage" src={react} />
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    React
                  </div>
                  <div />
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <img className="articleImage" src={js} />
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    Javascript
                  </div>
                  <div />
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <img className="articleImage" src={html} />
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    HTML/CSS
                  </div>
                  <div />
                </div>
              </div>
              <div className="Stats" style={{ padding: "0" }}>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <img className="articleImage" src={cplusplus} />
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    C++
                  </div>
                  <div />
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <img className="articleImage" src={python} />
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    Python
                  </div>
                  <div />
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <img className="articleImage" src={sql} />
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    MySQL / GraphQL
                  </div>
                  <div />
                </div>
              </div>
            </div>
            <h1 className="EmphasisOne">Connect With Me</h1>
            <hr className="Divider" />
            <div className="FeaturedProjectFooter">
              <div className="Stats" style={{ padding: "0" }}>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    taylorrohrich@gmail.com
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    email
                  </div>
                  <div />
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <a
                      className="articleImage"
                      href="https://www.linkedin.com/in/taylor-rohrich/"
                    >
                      <img className="articleImage" src={linkedin} />
                    </a>
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    LinkedIn
                  </div>
                </div>
                <div className="StatItem">
                  <div className="StatHeader" style={{ height: "auto" }}>
                    <a
                      className="articleImage"
                      href="https://github.com/20rohrichtt"
                    >
                      <img className="articleImage" src={github} />
                    </a>
                  </div>
                  <div className="StatFooter" style={{ padding: "5px" }}>
                    Github
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(About);
