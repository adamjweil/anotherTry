import React, { Fragment, Component, useEffect } from "react";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import DashboardDetails from "./DashboardDetails";
import NoProfile from "./NoProfile";
import YesProfile from "./YesProfile";
import TourGuide from "./TourGuide";
import store from "../..//store";
import { loadProfile } from "../../actions/profile";

const Dashboard = ({ loadProfile, user, profile, loading }) => {
  useEffect(() => {
    store.dispatch(loadProfile());
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Grid container>
      <Grid item="true" xs={12} sm={3}></Grid>
      <Grid item="true" xs={12} sm={6}>
        <Fragment>
          <img
            src={process.env.PUBLIC_URL + "/img/mezLogo120px.png"}
            style={{ width: "200px", margin: "-30px -20px -60px" }}
            alt={process.env.PUBLIC_URL + "/img/mezLogo240px.png"}
          />
          <br />
          <Header as="h3">
            Welcome to the meZocliQ Online Portal, {user && user.email}!
          </Header>

          {profile === null ? <NoProfile /> : <YesProfile />}
        </Fragment>
      </Grid>
      <Grid item="true" sm={3}></Grid>
      <Grid item="true" xs={12} sm={3}>
        {" "}
        <TourGuide />
      </Grid>

      <Grid item="true">
        <DashboardDetails />
      </Grid>
      <Grid item="true"></Grid>
      <div
        style={{
          display: "in-line",
          position: "relative",
          top: "75%",
          bottom: "0px",
          left: "20px",
          right: "20px"
        }}
      ></div>
    </Grid>
  );
};

Dashboard.propTypes = {
  loadProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { loadProfile }
)(Dashboard);
