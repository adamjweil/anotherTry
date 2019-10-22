import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { loadCurrentProfile, fetchProfile } from "../../actions/profile";
import ProfileCard from "./ProfileCard";

const Profile = ({ loadCurrentProfile, profile, auth, match }) => {
  useEffect(() => {
    loadCurrentProfile();
  }, []);

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
  loadCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(withRouter(Profile));
