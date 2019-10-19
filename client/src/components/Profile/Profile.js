import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { loadCurrentProfile } from "../../actions/profile";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./profile-forms/ProfileForm";
import { withRouter } from "react-router-dom";

const Profile = ({
  loadCurrentProfile,
  profile: { profile, loading },
  auth,
  match
}) => {
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
