import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Avatar,
  Divider,
  Paper,
  Typography,
  Box
} from "@material-ui/core";
import { loadCurrentProfile } from "../../actions/profile";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "100px",
    padding: "10px",

    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
  },
  avatar: {
    margin: "10px 10px 0px 10px",
    width: 250,
    height: 300
  },
  nameAndHandle: {
    opacity: ".8"
  },
  name: {
    fontSize: "20px",
    fontWeight: "500"
  },
  handle: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#A9A9A9"
  },
  profileBox: {
    padding: "10px",
    marginTop: "15px",
    height: "100px",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.1)"
  }
}));

const ProfileCard = ({ user, profile: { profile }, loadCurrentProfile }) => {
  useEffect(() => {
    loadCurrentProfile();
  }, [loadCurrentProfile]);
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <center>
              <Avatar
                className={classes.avatar}
                src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                alt="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
              />
            </center>
            <Divider
              variant="middle"
              style={{
                marginTop: "5px",
                height: "1px",
                color: "#F8F8F8",
                weight: "700"
              }}
            />
            <div className={classes.nameAndHandle}>
              <Typography className={classes.name}>
                <center>
                  {profile && profile.firstName}{" "}
                  {profile && profile.middleInitial}{" "}
                  {profile && profile.lastName}
                </center>
              </Typography>
              <Typography className={classes.handle}>
                <center>{profile && "@" + profile.handle}</center>
              </Typography>

              <Typography className={classes.email}>
                <center>eMail: {user && user.email}</center>
              </Typography>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span
              style={{ fontSize: "14px", fontWeight: "600", color: "#696969" }}
            >
              Team:
            </span>
            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#696969" }}
            >
              <span>{profile && profile.team}</span>
            </span>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span
              style={{ fontSize: "14px", fontWeight: "600", color: "#696969" }}
            >
              Title:
            </span>
            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#696969" }}
            >
              <span>{profile && profile.title}</span>
            </span>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span
              style={{ fontSize: "14px", fontWeight: "600", color: "#696969" }}
            >
              Notifications:
            </span>
            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#696969" }}
            >
              <span>{user && user.notification_count}</span>
            </span>
          </Grid>
        </Grid>
      </Paper>
      <Box className={classes.profileBox}>
        <Grid container>
          <Grid item xs={12}>
            <center>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#696969"
                }}
              >
                Short Bio:
              </span>
              <p>{profile && profile.bio}</p>
            </center>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loadCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(ProfileCard);
