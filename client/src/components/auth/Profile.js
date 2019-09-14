import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadUser,
  incrementNotificationCount,
  decrementNotificationCount
} from "../../actions/user";
import { getCurrentProfile } from "../../actions/profile";
import { Button } from "semantic-ui-react";
import { Grid, Container, Avatar } from "@material-ui/core";
import PropTypes from "prop-types";
import ProfileMenu from "./Profile/ProfileMenu";

const Profile = ({
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
  if (isAuthenticated !== true) {
    return <Redirect push to="/" />;
  }
  const onIncrementSubmit = () => {
    incrementNotificationCount();
  };
  const onDecrementSubmit = () => {
    decrementNotificationCount();
  };

  return (
    <Container>
      <Grid item xs={12} md={4}>
        <div className="ui card">
          <Grid container justify="center" alignItems="center">
            <Avatar
              src={auth.user && auth.user.avatar}
              style={{ margin: "10", width: "60%", height: "60%" }}
              alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg"
            />
          </Grid>
          <div className="content">
            <div
              className="extra content"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h4>Name PlaceHolder </h4>
              <Link className="ui button sm yellow" to="/api/profile/edit">
                {" "}
                Edit User
              </Link>
            </div>
            <div className="description"> {profile && profile.title} </div>
          </div>

          <div
            className="extra content"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>eMail:</span>

            <span>
              <i aria-hidden="true" className="mail icon"></i>
              {auth.user && auth.user.email}
            </span>
          </div>
          <div
            className="extra content"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Team:</span>

            <span>{profile && team}</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Grid item xs={12}>
          <ProfileMenu />
        </Grid>
        <div>
          <p>Bio: {profile && profile.bio}</p>
          <p>Skills: {profile && profile.skills}</p>
          <p>Notifications: {auth && auth.notification_count}</p>
        </div>
      </Grid>

      <Button onClick={e => onIncrementSubmit(e)}>
        Increment Notifications
      </Button>
      <Button onClick={e => onDecrementSubmit(e)}>
        Decrement Notifications
      </Button>
    </Container>
  );
};

Profile.propTypes = {
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
)(Profile);
