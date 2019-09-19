import React, { Fragment, useEffect } from "react";
import { getCurrentProfile, createProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import DashboardDetails from "./DashboardDetails";
import NoProfile from "./NoProfile";
import YesProfile from "./YesProfile";
import TourGuide from "./TourGuide";

const Dashboard = ({
  createProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Grid
      style={{ marginTop: "10px" }}
      container
      columns={2}
      divided
      relaxed
      stackable
    >
      <Grid item xs={6}>
        <Fragment>
          <img
            src={process.env.PUBLIC_URL + "/img/mezLogo120px.png"}
            style={{ width: "200px", margin: "-30px -20px -60px" }}
            alt=""
          />
          <br />
          <Header as="h3">
            Welcome to the meZocliQ Online Portal, {user && user.email}!
          </Header>

          {profile === null ? <NoProfile /> : <YesProfile />}
        </Fragment>
      </Grid>

      <Grid>
        <DashboardDetails />
        <TourGuide />
      </Grid>
      <Grid></Grid>
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
    // </Grid>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile }
)(Dashboard);
