import React from "react";
import { loadCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

// import Spinner from "../layout/Spinner";
import ProfileForm from "../Profile/profile-forms/ProfileForm";
import DashboardHeader from "./DashboardHeader";

const Dashboard = ({ profile, loading, user }) => {
  return (
    <Grid
      container
      direction="rowReverse"
      justify="flexStart"
      alignItems="flexEnd"
    >
      <Grid item xs={12} style={{ marginTop: "100px" }}>
        <DashboardHeader />
      </Grid>
      <Grid container>
        <Grid item sm={4}></Grid>
        <Grid item sm={7}>
          <ProfileForm />
        </Grid>
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {
  loadCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(Dashboard);
