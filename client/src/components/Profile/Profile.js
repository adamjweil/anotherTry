import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchProfile, fetchProfileById } from "../../actions/profile";
import ProfileCard from "./ProfileCard";

const Profile = ({ fetchProfile, fetchProfileById, auth, match }) => {
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={3}
          style={{ marginLeft: "30px", minWidth: "350px" }}
        >
          <ProfileCard />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Fragment>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  fetchProfileById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isSaved: state.profile.isSaved
});

export default connect(
  mapStateToProps,
  { fetchProfileById, fetchProfile }
)(withRouter(Profile));
