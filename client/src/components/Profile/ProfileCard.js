import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import {
  loadUser,
  incrementNotificationCount,
  decrementNotificationCount
} from "../../actions/user";
import { Grid, Avatar, Divider, Paper } from "@material-ui/core";

const ProfileCard = ({
  formData,
  onProfileCreation,
  auth,
  profile,
  incrementNotificationCount,
  decrementNotificationCount
}) => {
  // const { firstName, lastName, handle, hireDate } = formData;
  // const [firstName, setFirst] = useState(firstName);

  return (
    <Paper style={{ padding: "10px", marginTop: "50px" }}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <center>
            <Avatar
              src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
              style={{
                margin: 10,
                width: 250,
                height: 300
              }}
              alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg"
            />
          </center>
        </Grid>
        <Divider variant="middle" style={{ color: "black" }} />
        <Grid item xs={12}>
          <center>
            <h2 style={{ marginBottom: "-20px" }}>First Last</h2>
            <h5 style={{ fontWeight: "400" }}>@handle</h5>
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
    </Paper>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
  // user: state.user
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
