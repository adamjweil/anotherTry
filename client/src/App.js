import React, { useEffect, Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import AuthenticatedNavbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import SuccessSnackbar from "./components/layout/Alerts/SuccessSnackbar";
import InfoSnackbar from "./components/layout/Alerts/InfoSnackbar";
import ErrorSnackbar from "./components/layout/Alerts/ErrorSnackbar";
import Profile from "./components/Profile/Profile";
import ProfileForm from "./components/Profile/profile-forms/ProfileForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Tickets from "./components/Tickets/Tickets";
import Directory from "./components/layout/Directory/Directory";
import PrivateRoute from "./components/routing/PrivateRoute";
import ThemeingLayout from "./components/layout/TestLayout/ThemeingLayout";
import ResponsiveLayout from "./components/layout/TestLayout/ResponsiveLayout";
import "typeface-roboto";
import { SnackbarProvider } from "notistack";
// Redux
import store from "./store";
import { loadUser } from "./actions/user";
import { loadCurrentProfile } from "./actions/profile";
import setAuthToken from "./utils/setAuthToken";
import { withRouter } from "react-router-dom";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadCurrentProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AuthenticatedNavbar />
        <SnackbarProvider>
          <SuccessSnackbar />
          <InfoSnackbar />
          <ErrorSnackbar />
        </SnackbarProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/directory" component={Directory} />
            <Route exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/profileform" component={ProfileForm} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/ticket" component={Tickets} />
          </section>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
