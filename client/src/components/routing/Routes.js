import React from "react";
import { Route, Switch } from "react-router-dom";
import "typeface-roboto";
import { SnackbarProvider } from "notistack";

import Register from "../../components/auth/Register";
import SuccessSnackbar from "../../components/layout/Alerts/SuccessSnackbar";
import InfoSnackbar from "../../components/layout/Alerts/InfoSnackbar";
import ErrorSnackbar from "../../components/layout/Alerts/ErrorSnackbar";
import Profile from "../../components/Profile/Profile";
import Profiles from "../../components/Profile/Profiles";
import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileWrapper from "../../components/Profile/ProfileWrapper";
import ProfileEditForm from "../../components/Profile/ProfileEditForm";
import Dashboard from "../../components/Dashboard/Dashboard";
import Tickets from "../../components/Tickets/Tickets";
import Directory from "../../components/Directory/Directory";
import PrivateRoute from "../../components/routing/PrivateRoute";
import NotFound from "../../components/layout/NotFound";
import ThemeingLayout from "../../components/layout/TestLayout/ThemeingLayout";
import ResponsiveLayout from "../../components/layout/TestLayout/ResponsiveLayout";

const Routes = () => {
  return (
    <section className="container" style={{ marginTop: "51px" }}>
      <SnackbarProvider>
        <SuccessSnackbar />
        <InfoSnackbar />
        <ErrorSnackbar />
      </SnackbarProvider>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/directory" component={Directory} />
        <Route exact path="/profile/me" component={ProfileWrapper} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/responsive" component={ResponsiveLayout} />
        <Route exact path="/theming" component={ThemeingLayout} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profileform" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileEditForm} />
        <PrivateRoute exact path="/profile" component={ProfileWrapper} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/ticket" component={Tickets} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
