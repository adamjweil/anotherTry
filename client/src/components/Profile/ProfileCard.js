import React, { Fragment } from "react";
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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "20px",
    padding: "20px",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
  },
  avatar: {
    margin: "0px 0px 10px 0px",
    width: 275,
    height: 310
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
    color: "#A9A9A9",
    margin: "0px 0px 10px 0px"
  },
  profileBox: {
    padding: "10px",
    marginTop: "15px",
    height: "100px",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.1)"
  },
  spaceBetween: {
    justifyContent: "space-between",
    display: "flex"
  },
  spaceBetweenSpan: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#696969"
  },
  spanLabels: {
    fontWeight: "600",
    fontSize: "16px"
  },
  spanContent: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#696969"
  }
}));

const ProfileCard = ({ auth, user, profile, team }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container justify="center">
          {/*Avatar Section */}

          <Grid item xs={12}>
            <center>
              <Avatar
                className={classes.avatar}
                src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                alt="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
              />
            </center>
            <center>
              <Divider
                variant="middle"
                style={{
                  height: "2px",
                  width: "200px"
                }}
              />
            </center>

            {/*Name and Handle Section */}

            <div className={classes.nameAndHandle}>
              <Typography as="h3" className={classes.name} align="center">
                {profile && profile.firstName}{" "}
                {profile && profile.middleInitial} {profile && profile.lastName}
              </Typography>
              <Typography as="h3" className={classes.handle} align="center">
                {profile && "@" + profile.handle}
              </Typography>
            </div>
          </Grid>

          {/*Team Section */}

          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span className={classes.spanLabels}>Team:</span>
            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#696969" }}
            >
              <span className={classes.spanContent}>
                {team && team.teamName}
              </span>
            </span>
          </Grid>

          {/*Title Section */}

          <Grid item xs={12} className={classes.spaceBetween}>
            <span className={classes.spanLabels}>Title:</span>
            <span className={classes.spaceBetweenSpan}>
              <span className={classes.spanContent}>
                {profile && profile.title}
              </span>
            </span>
          </Grid>

          {/*eMail Section */}

          <Grid item xs={12} className={classes.spaceBetween}>
            <span className={classes.spanLabels}>eMail:</span>
            <span className={classes.spaceBetweenSpan}>
              <span className={classes.spanContent}>{user && user.email}</span>
            </span>
          </Grid>

          {/*Link to update profile */}

          <Grid item xs={12} className={classes.spaceBetween}>
            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#696969" }}
            ></span>

            <span className={classes.spaceBetweenSpan}>
              <Link
                to="/profile"
                style={{
                  fontSize: "16px",
                  fontWeight: "300",
                  color: "#696969"
                }}
              >
                Update Profile
              </Link>
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
  fetchProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  team: state.profile.profile.team,
  user: state.auth.user
});

export default connect(mapStateToProps)(ProfileCard);
