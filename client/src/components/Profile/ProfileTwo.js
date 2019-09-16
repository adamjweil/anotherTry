import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadUser,
  incrementNotificationCount,
  decrementNotificationCount
} from "../../actions/user";
import { getCurrentProfile } from "../../actions/profile";
import { Button } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import MultiStepProfileForm from "./profile-forms/MultiStepProfileForm";

const ProfileTwo = ({
  getCurrentProfile,
  loadUser,
  setAlert,
  isAuthenticated,
  auth,
  user,
  profile: { profile, loading, team },
  incrementNotificationCount,
  decrementNotificationCount
}) => {
  if (isAuthenticated === false) {
    return <Redirect push to="/" />;
  }
  const onIncrementSubmit = () => {
    incrementNotificationCount();
  };
  const onDecrementSubmit = () => {
    decrementNotificationCount();
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MultiStepProfileForm />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Button onClick={e => onIncrementSubmit(e)}>
            Increment Notifications
          </Button>
          <Button onClick={e => onDecrementSubmit(e)}>
            Decrement Notifications
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

ProfileTwo.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    loadUser,
    getCurrentProfile,
    incrementNotificationCount,
    decrementNotificationCount
  }
)(ProfileTwo);
