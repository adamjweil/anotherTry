import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
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
// import ProfileSkills from "./ProfileSkills";
import { fetchProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";
import Spinner from "../layout/Spinner";

const useStyles = makeStyles(theme => ({
  paper: {},
  avatar: {},
  nameAndHandle: {},
  name: {},
  handle: {},
  profileBox: {},
  spaceBetween: {},
  spaceBetweenSpan: {},
  spanLabels: {},
  spanContent: {},
  bioContent: {},
  bioHeader: {},
  bioDivider: {},
  skills: {}
}));

class ProfileCard extends Component {
  render() {
    return (
      <Fragment>
        <Paper
          style={{
            marginTop: "20px",
            padding: "20px",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
          }}
        >
          <Grid container justify="center">
            {/*Avatar Section */}
            <Grid item xs={12}>
              <center>
                <Avatar
                  style={{
                    margin: "0px 0px 10px 0px",
                    width: 275,
                    height: 310
                  }}
                  src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                  alt="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
                />
              </center>
              <center>
                <Divider
                  style={{
                    height: "2px",
                    width: "200px"
                  }}
                />
              </center>
              {/*Name and Handle Section */}
              <div style={{ opacity: ".8" }}>
                <Typography
                  as="h3"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                  align="center"
                >
                  {this.props.profile && this.props.profile.profile.firstName}{" "}
                  {this.props.profile &&
                    this.props.profile.profile.middleInitial.toUpperCase()}
                  {". "}
                  {this.props.profile && this.props.profile.profile.lastName}
                </Typography>
                <Typography
                  as="h3"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#A9A9A9",
                    margin: "0px 0px 10px 0px"
                  }}
                  align="center"
                >
                  {this.props.user.username}
                </Typography>
              </div>
            </Grid>
            {/*Team Section */}
            <Grid
              item
              xs={12}
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span style={{ fontWeight: "600", fontSize: "16px" }}>Team:</span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#696969"
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#696969"
                  }}
                >
                  {this.props.profile.profile &&
                    this.props.profile.profile.team.teamName}
                </span>
              </span>
            </Grid>
            {/*Title Section */}
            <Grid
              item
              xs={12}
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span style={{ fontWeight: "600", fontSize: "16px" }}>
                Title:
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#696969"
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#696969"
                  }}
                >
                  {this.props.profile.profile &&
                    this.props.profile.profile.title}
                </span>
              </span>
            </Grid>

            {/*eMail Section */}

            <Grid
              item
              xs={12}
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span style={{ fontWeight: "600", fontSize: "16px" }}>
                eMail:
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#696969"
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#696969"
                  }}
                >
                  {this.props.user && this.props.user.email}
                </span>
              </span>
            </Grid>

            {/*Link to update profile */}

            <Grid
              item
              xs={12}
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#696969"
                }}
              ></span>

              <span style={{}}>
                <Link
                  to="/edit-profile"
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

        {/* Bio Box section */}

        <Box
          style={{
            padding: "10px",
            marginTop: "15px",
            height: "140px",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  paddingTop: "30px",
                  paddingLeft: "15px"
                }}
              >
                {" "}
                Quick Bio:
              </span>
              <br />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  margin: "25px, 25px, 25px, 25px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  color: "#696969"
                }}
              >
                {this.props.profile && this.props.profile.bio}
              </span>
            </Grid>
            <Grid item xs={12}>
              <center>
                <Divider
                  style={{
                    width: "200px",
                    height: "2px",
                    margin: "30px, 0, 30px, 0"
                  }}
                  align="center"
                />
              </center>
            </Grid>
            {/* Skills Box section */}
            <Grid item xs={12}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  paddingTop: "30px",
                  paddingLeft: "15px"
                }}
              >
                Skills:
              </span>
              <br />
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "green",
                  padding: "0, 0, 0, 30px"
                }}
              >
                {this.props.profile && this.props.profile.skills
                  ? this.props.profile.skills.map(skill => {
                      return skill.toUpperCase() + "  /  ";
                    })
                  : ""}
              </span>
            </Grid>
          </Grid>
        </Box>
      </Fragment>
    );
  }
}

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(ProfileCard);
