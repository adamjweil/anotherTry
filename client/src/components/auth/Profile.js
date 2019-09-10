import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadUser,
  incrementNotificationCount,
  decrementNotificationCount
} from "../../actions/user";
import { getCurrentProfile } from "../../actions/profile";
import { Grid, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import ProfileMenu from "./Profile/ProfileMenu";

const Profile = ({
  getCurrentProfile,
  loadUser,
  setAlert,
  isAuthenticated,
  auth,
  user,
  profile: { profile, loading },
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
    <Grid columns={2}>
      <Grid.Column columns={1}>
        <div className="ui card">
          <div className="image">
            <img
              src={auth.user && auth.user.avatar}
              alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg"
            />
          </div>
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

            <span>{profile && profile.team}</span>
          </div>
        </div>
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <ProfileMenu />
        </Grid.Row>
        <div>
          <p>Bio: {profile && profile.bio}</p>
          <p>Skills: {profile && profile.skills}</p>
          <p>Notifications: {auth && auth.notification_count}</p>
        </div>
      </Grid.Column>

      <Button onClick={e => onIncrementSubmit(e)}>
        Increment Notifications
      </Button>
      <Button onClick={e => onDecrementSubmit(e)}>
        Decrement Notifications
      </Button>
    </Grid>
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
