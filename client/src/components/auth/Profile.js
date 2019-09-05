import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadUser,
  isAuthenticated,
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
  auth: { user },
  profile: { profile, loading },
  incrementNotificationCount,
  decrementNotificationCount
}) => {
  const [formData, setFormData] = useState(
    {
      team: "",
      title: "",
      bio: "",
      hireDate: "",
      skills: []
    },
    []
  );
  getCurrentProfile();
  if (isAuthenticated === false) {
    return <Redirect to="/" />;
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
              src={user && user.avatar}
              alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg"
            />
          </div>
          <div className="content">
            <div className="header"> {profile && profile.team} Team </div>
            <div className="description"> {profile && profile.title} </div>
          </div>
          <div className="extra content">
            <Link to="#" className="">
              <i aria-hidden="true" className="mail icon"></i>
              {user && user.email} &nbsp;
              <Link className="ui button sm yellow" to="/api/profile/edit">
                {" "}
                Edit User
              </Link>
            </Link>
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
          <p>Notifications: {user && user.notification_count}</p>
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

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
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
