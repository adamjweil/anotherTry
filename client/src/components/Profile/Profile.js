import React, { Fragment, useState } from "react";
// import { Redirect } from "react-router-dom";
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
import { createProfile } from "../../actions/profile";
import { showErrorSnackbar } from "../../actions/alert";

const Profile = ({
  getCurrentProfile,
  loadUser,
  setAlert,

  isAuthenticated,
  auth: { user },
  users,
  profile: { profile, loading },
  incrementNotificationCount,
  decrementNotificationCount
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    handle: "",
    hireDate: "",
    team: "",
    title: ""
  });

  // const { firstName, lastName, handle, hireDate, team, title } = formData;

  const onProfileCreation = async formData => {
    try {
      createProfile(formData);
    } catch (err) {
      showErrorSnackbar(err.msg);
    }
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // if (isAuthenticated !== true) {
  //   return <Redirect push to="/" />;
  // }
  const onIncrementSubmit = () => {
    incrementNotificationCount();
  };
  const onDecrementSubmit = () => {
    decrementNotificationCount();
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={3}>
          <ProfileCard
            formDate={formData}
            onProfileCreation={onProfileCreation}
          />
        </Grid>
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
