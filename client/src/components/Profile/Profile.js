import React, { Fragment } from "react";
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

const Profile = ({
  getCurrentProfile,
  loadUser,
  isAuthenticated,
  auth: { user },
  profile: { profile, loading },
  incrementNotificationCount,
  decrementNotificationCount
}) => {
  const onIncrementSubmit = () => {
    incrementNotificationCount();
  };
  const onDecrementSubmit = () => {
    decrementNotificationCount();
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={3} style={{ minWidth: "300px" }}>
          <ProfileCard />
        </Grid>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={5}>
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

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  getCurrentProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  users: state.users
});

export default connect(
  mapStateToProps,
  {
    loadUser,
    getCurrentProfile,
    incrementNotificationCount,
    decrementNotificationCount
  }
)(Profile);
