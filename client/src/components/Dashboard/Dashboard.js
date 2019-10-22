import React from "react";
import { loadCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Select } from "@material-ui/core";
import ProfileForm from "../Profile/ProfileForm";
import DashboardHeader from "./DashboardHeader";

const Dashboard = ({ profile, loading, user, submittedProfileForm }) => {
  return (
    <Grid
      container
      direction="row-reverse"
      justify="flex-start"
      alignItems="flex-end"
    >
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <DashboardHeader />
      </Grid>
      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          {!submittedProfileForm ? <ProfileForm /> : ""}
        </Grid>
        <Grid item sm={2}></Grid>
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {
  loadCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  submittedProfileForm: state.auth.submittedProfileForm
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(Dashboard);
