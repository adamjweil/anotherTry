import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import {
  loadUser,
  fetchUsers,
  incrementNotificationCount,
  decrementNotificationCount
} from "../../actions/user";
import { getCurrentProfile, createProfile } from "../../actions/profile";
import { Button } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import CreateProfile from "./profile-forms/CreateProfile";
import ProfileForm from "./ProfileForm";

export class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    handle: "",
    team: "",
    title: ""
  };
  componentDidMount() {
    loadUser();
    fetchUsers();
    getCurrentProfile();
    fetchUsers();
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleDateChange = hireDate => e => {
    let yr = e.getFullYear();
    let mo = e.getMonth();
    let dt = e.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (mo < 10) {
      mo = "0" + mo;
    }
    let full = mo + "/" + dt + "/" + yr;
    this.setState({ hireDate: full });
  };

  onIncrementSubmit() {
    incrementNotificationCount();
  }
  onDecrementSubmit() {
    decrementNotificationCount();
  }
  render() {
    const { firstName, lastName, handle, team, title } = this.state;
    const values = {
      firstName,
      lastName,
      handle,
      team,
      title
    };

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={0} md={1}></Grid>
          <Grid item xs={12} md={3} style={{ minWidth: "300px" }}>
            <ProfileCard values={values} user={this.props.user} />
          </Grid>
          <Grid item xs={0} md={1}></Grid>
          <Grid item xs={12} md={5}>
            <ProfileForm
              values={values}
              users={this.props.users}
              createProfile={this.props.createProfile}
              handleChange={this.handleChange}
              handleDateChange={this.handleDateChange}
              onProfileSub={this.onProfileSub}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Button onClick={this.onIncrementSubmit}>
              Increment Notifications
            </Button>
            <Button onClick={this.onDecrementSubmit}>
              Decrement Notifications
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  getCurrentProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users,
  user: state.auth.user,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  {
    createProfile,
    loadUser,
    getCurrentProfile,
    incrementNotificationCount,
    decrementNotificationCount
  }
)(Profile);
