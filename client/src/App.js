import React, { useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/layout/Navbar/Navbar";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import SuccessSnackbar from "./components/layout/Alerts/SuccessSnackbar";
import InfoSnackbar from "./components/layout/Alerts/InfoSnackbar";
import ErrorSnackbar from "./components/layout/Alerts/ErrorSnackbar";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Tickets from "./components/Tickets/Tickets";
import Directory from "./components/layout/Directory/Directory";
import CreateProfile from "./components/Profile/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import ThemeingLayout from "./components/layout/TestLayout/ThemeingLayout";
import ResponsiveLayout from "./components/layout/TestLayout/ResponsiveLayout";
import "typeface-roboto";
import { SnackbarProvider, useSnackbar } from "notistack";
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
      <SnackbarProvider maxSnack={3}>
        <SuccessSnackbar />
        <ErrorSnackbar />
        <InfoSnackbar />
      </SnackbarProvider>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/themeing" component={ThemeingLayout} />
        <Route exact path="/responsive" component={ResponsiveLayout} />
        <section className="container" style={{ flex: "1" }}>
          <Route exact path="/register" component={Register} />
          <Route exact path="/tickethub" component={Tickets} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/directory" component={Directory} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
        </section>
      </Router>
    </Provider>
  );
};

export default App;
