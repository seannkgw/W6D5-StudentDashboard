import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Winc Student Dashboard </h1>
          </header>
          <nav>
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="students" to="/students">
              Students
            </Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />

          </Switch>
          <footer>Sean Nakagawa 2020</footer>
        </div>
      </Router>
    );
  }
}
export default App;