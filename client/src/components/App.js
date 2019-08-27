import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Alert from "./layout/Alert";
import Login from "./auth/Login";
import Register from "./auth/Register";
import configureStore from "./../configureStore";
import { connect } from "react-redux";
import setAuthToken from "./../utils/setAuthToken";
import { loadUser } from "./../actions/auth";
const store = configureStore;

class App extends React.Component {
  render() {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { loadUser: state.loadUser };
};

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
