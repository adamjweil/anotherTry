import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Avatar, Divider, Paper } from "@material-ui/core";
import { getCurrentProfile, loadProfile } from "../../actions/profile";

export class ProfileCard extends React.Component {
  render() {
    // const { values } = this.props;
    const { firstName, lastName, handle, team, title } = this.props;

    return (
      <Paper style={{ padding: "10px", marginTop: "30px" }}>
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
              <h2 style={{ marginBottom: "-20px" }}>
                {firstName} {lastName}
              </h2>
              <h5 style={{ fontWeight: "400" }}>{handle}</h5>
            </center>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span style={{ fontSize: "12px", fontWeight: "200" }}>eMail:</span>
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              {this.props.user ? this.props.user.email : ""}
            </span>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span style={{ fontSize: "12px", fontWeight: "200" }}>Title:</span>
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              <span>{title}</span>
            </span>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <span style={{ fontSize: "12px", fontWeight: "200" }}>Team:</span>
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              <span>{team}</span>
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
              <span>
                {this.props.user && this.props.user.notification_count}
              </span>
            </span>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, loadProfile }
)(ProfileCard);
