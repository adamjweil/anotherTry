import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Alert from "./layout/Alert";
import Login from "./auth/Login";
import Register from "./auth/Register";
import configureStore from "./../configureStore";
import { Provider } from "react-redux";
import { setAlert } from "/../../reducers/Alert";
import store from "./../configureStore";
import { loadUser } from "./../actions/auth";
import setAuthToken from "./../utils/setAuthToken";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    return (
      <Provider>
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
      </Provider>
    );
  }
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert,
  loadUser: state.loadUser
});

export default connect(
  mapStateToProps,
  { loadUser, setAlert }
)(App);
