import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";
const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 250,
    height: 300
  }
});

const ImageAvatars = ({ loadUser, profile, auth: { user }, auth }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="" src={user.gravatar} className={classes.bigAvatar} />
    </Grid>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadUser, getCurrentProfile }
)(ImageAvatars);
