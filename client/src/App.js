import React, { useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from "./components/layout/Landing";
import "typeface-roboto";
import "./App.css";
import Routes from "./components/routing/Routes";
// Redux
import store from "./store";
import { loadUser } from "./actions/user";
import setAuthToken from "./utils/setAuthToken";
import { connect } from "react-redux";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
};

export default connect()(App);
