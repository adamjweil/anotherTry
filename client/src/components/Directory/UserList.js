import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardActionArea
} from "@material-ui/core";
import { fetchProfiles } from "../../actions/profile";

const useStyles = makeStyles(theme => ({
  media: {
    verticalAlign: "center",
    alignItems: "center",
    margin: "0 10% 0",
    height: 140,
    borderRadius: "5px"
  }
}));

const UserList = ({ fetchProfiles, profiles }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  return profiles.map(profile => {
    return (
      <Grid
        key={profile._id}
        item
        xs={12}
        sm={3}
        style={{ display: "inLine-block", margin: "15px" }}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              style={{ marginTop: "10px" }}
              image={profile.user.avatar}
              title="User Avatar"
            />
            <CardContent>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  textAlign: "center",
                  color: "#696969"
                }}
              >
                {profile && profile.firstName} {profile && profile.lastName}
              </Typography>
              eMail:
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#696969"
                }}
              >
                {profile && profile.user.email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <center>
              <Button size="small" color="primary">
                Send Message
              </Button>
            </center>
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

UserList.propTypes = {
  fetchProfiles: PropTypes.func.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile,
  profiles: Object.values(state.profile.profiles)
});

export default connect(
  mapStateToProps,
  { fetchProfiles }
)(withRouter(UserList));
