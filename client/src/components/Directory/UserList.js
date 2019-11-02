import React, { useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
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
  },
  card: {
    border: "2px solid #bbdefb"
  },
  cardContent: {
    minWidth: "200px"
  }
}));

const UserList = ({ fetchProfiles, profiles }) => {
  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);
  const classes = useStyles();
  return profiles.map(profile => {
    return (
      <Fragment>
        <Grid
          key={profile._id}
          item
          xs={12}
          sm={6}
          style={{ display: "inLine-block", margin: "15px" }}
        >
          <Card className={classes.card}>
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
            <CardMedia
              className={classes.media}
              style={{ marginTop: "10px" }}
              image={profile.user.avatar}
              title="User Avatar"
            />
            <CardActionArea>
              <CardContent className={classes.cardContent}>
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
              <Button size="small" color="primary">
                <center>
                  <Link
                    style={{ textDecoration: "none", color: "#37474f" }}
                    to={`/profile/${profile._id}`}
                    ckassName="btn btn-primary"
                  >
                    View Profile
                  </Link>
                </center>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Fragment>
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
