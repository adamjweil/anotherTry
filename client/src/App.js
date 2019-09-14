import React, { useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register";
import RegisterForm from "./components/auth/RegisterForm";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import SuccessSnackbar from "./components/layout/Alerts/SuccessSnackbar";
import ErrorSnackbar from "./components/layout/Alerts/ErrorSnackbar";
import InfoSnackbar from "./components/layout/Alerts/InfoSnackbar";
import Profile from "./components/auth/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Tickets from "./components/Tickets/Tickets";
import Directory from "./components/layout/Directory/Directory";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import ThemeingLayout from "./components/layout/ThemeingLayout";
import ResponsiveLayout from "./components/layout/ResponsiveLayout";
import "typeface-roboto";
// Redux
import store from "./store";
import { loadUser } from "./actions/user";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider
      store={store}
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <SuccessSnackbar />
      <ErrorSnackbar />
      <InfoSnackbar />
      <Router>
        <div className="ui container">
          <Navbar />
          <Alert />
          <Route exact path="/" component={Landing} />
          <Route exact path="/themeing" component={ThemeingLayout} />
          <Route exact path="/responsive" component={ResponsiveLayout} />
          <Route exact path="/tickethub" component={Tickets} />
          <section className="container" style={{ flex: "1" }}>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/directory" component={Directory} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </section>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
