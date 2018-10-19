import React, { Component } from "react";
import Home from "./../Home/Home";
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exaxt path="/Projects" component={Projects} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
