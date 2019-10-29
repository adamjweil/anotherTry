import React, { useEffect } from "react";
import { loadCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ProfileForm from "../Profile/ProfileForm";
import DashboardHeader from "./DashboardHeader";
import DashboardInbox from "./DashboardInbox";

const Dashboard = ({
  loadCurrentProfile,
  profile,
  loading,
  user,
  profile: { submittedProfileForm }
}) => {
  useEffect(() => {
    loadCurrentProfile();
  }, [loadCurrentProfile]);
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
        <Grid item sm={1}></Grid>
        <Grid item sm={10} style={{ marginTop: "50px" }}>
          {!submittedProfileForm ? <ProfileForm /> : <DashboardInbox />}
        </Grid>
        <Grid item sm={1}></Grid>
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
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(Dashboard);
