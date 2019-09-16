import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import {
  loadUser,
  incrementNotificationCount,
  decrementNotificationCount
} from "../../actions/user";
import { Grid, Avatar } from "@material-ui/core";

const ProfileCard = ({
  auth,
  profile,
  incrementNotificationCount,
  decrementNotificationCount
}) => {
  return (
    <Grid container>
      <Grid item xs={12} justify="center" alignItems="center">
        <center>
          <Avatar
            src={auth.user && auth.user.avatar}
            style={{
              margin: 10,
              width: 250,
              height: 300
            }}
            alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg"
          />
        </center>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <span style={{ fontSize: "12px", fontWeight: "200" }}>eMail:</span>
        <span style={{ fontSize: "16px", fontWeight: "500" }}>
          {auth.user && auth.user.email}
        </span>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <span style={{ fontSize: "12px", fontWeight: "200" }}>Title:</span>
        <span style={{ fontSize: "16px", fontWeight: "500" }}>
          <span>{profile && profile.title}</span>
        </span>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <span style={{ fontSize: "12px", fontWeight: "200" }}>Team:</span>
        <span style={{ fontSize: "16px", fontWeight: "500" }}>
          <span>{profile && profile.team}</span>
        </span>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <span style={{ fontSize: "12px", fontWeight: "200" }}>
          Notifications:
        </span>
        <span style={{ fontSize: "16px", fontWeight: "500" }}>
          <span>{auth && auth.notification_count}</span>
        </span>
      </Grid>
    </Grid>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
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
)(ProfileCard);
