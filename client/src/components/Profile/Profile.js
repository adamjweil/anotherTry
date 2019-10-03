import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { loadProfileById } from "../../actions/profile";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

const Profile = ({
  loadProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    loadProfileById(match.params.id);
  }, [loadProfileById, match.params.id]);

  return (
    <Fragment>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={3} style={{ minWidth: "300px" }}>
          <ProfileCard />
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={5}>
          <ProfileForm />
        </Grid>
      </Grid>
      <Grid container></Grid>
    </Fragment>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loadProfileById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadProfileById }
)(Profile);
