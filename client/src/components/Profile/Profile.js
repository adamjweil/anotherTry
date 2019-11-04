import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchProfile, fetchProfileById } from "../../actions/profile";
import ProfileCard from "./ProfileCard";

const Profile = ({
  fetchProfile,
  profile: { profile, loading },
  fetchProfileById,
  auth,
  match
}) => {
  useEffect(() => {
    fetchProfileById(match.params.id);
  }, [fetchProfileById, match.params.id]);

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
  auth: state.auth,
  user: state.auth.user,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { fetchProfileById, fetchProfile }
)(withRouter(Profile));
