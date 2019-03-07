import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";


class App extends Component {
  render() {
    return (  
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/signup" component = {SignUp} />
          </Switch>
        </div>
      </Router>
      );
    }
}

export default App;