import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alerts/Alert";
import Dashboard from "../Dashboard/Dashboard";
import Directory from "../layout/Directory/Directory";
import ProfileForm from "../Profile/profile-forms/ProfileForm";
import Tickets from "../Tickets/Tickets";
import Profile from "../Profile/Profile";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/directory" component={Directory} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profileform" component={ProfileForm} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/ticket" component={Tickets} />
      </Switch>
    </section>
  );
};

export default Routes;
