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

export class Profile extends Component {
  componentDidMount() {
    loadUser();
    fetchUsers();
    // getCurrentProfile();
    fetchUsers();
  }
  state = {
    firstName: "",
    lastName: "",
    handle: "",
    hireDate: Date.now,
    team: "",
    title: "",
    bio: "",
    skills: []
  };

  handleChange = input => e => {
    console.log(e);
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
    const {
      firstName,
      lastName,
      handle,
      hireDate,
      team,
      title,
      bio,
      skills
    } = this.state;
    const values = {
      firstName,
      lastName,
      handle,
      hireDate,
      team,
      title,
      bio,
      skills
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
            <CreateProfile
              values={values}
              users={this.props.users}
              handleChange={this.handleChange}
              handleDateChange={this.handleDateChange}
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
  profile: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  getCurrentProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  users: state.users,
  user: state.auth.user
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
