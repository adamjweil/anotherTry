import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { loadCurrentProfile } from "../../actions/profile";
import ProfileCard from "./ProfileCard";

const Profile = ({ profile, loadCurrentProfile, auth, match }) => {
  useEffect(() => {
    loadCurrentProfile();
  }, [loadCurrentProfile]);

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
  profile: PropTypes.isRequired,
  loadCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(withRouter(Profile));
