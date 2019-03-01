import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          
        </Switch>
      </div>
      </Router>
      );
    }
}

export default App;