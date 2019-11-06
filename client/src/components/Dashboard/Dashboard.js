import React, { useEffect } from "react";
import { fetchProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ProfileForm from "../Profile/ProfileForm";
import Spinner from "../layout/Spinner";
import DashboardHeader from "./DashboardHeader";
import ProfileCard from "../Profile/ProfileCard";
const Dashboard = ({
  fetchProfile,
  auth: { user },
  profile: { loading, profile, isSaved }
}) => {
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  return loading ? (
    <Spinner />
  ) : (
    <Grid
      container
      direction="row-reverse"
      justify="flex-start"
      alignItems="flex-end"
    >
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <DashboardHeader />
      </Grid>
      {isSaved ? (
        <Grid container>
          <Grid item="row" xs={12}>
            <br />
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            style={{ marginLeft: "30px", maxWidth: "350px", minWidth: "320px" }}
          >
            <ProfileCard />
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid item sm={10} style={{ marginTop: "50px" }}>
            <ProfileForm />
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
      )}
    </Grid>
  );
};

Dashboard.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Dashboard);
