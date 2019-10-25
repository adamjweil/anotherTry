import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography, Grid } from "@material-ui/core";

const DashboardHeader = ({ user, auth }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={10}
        style={{
          marginLeft: "10px",
          borderBottom: "1px solid black"
        }}
      >
        <Typography style={{ fontSize: "36px", fontWeight: "550" }}>
          Dashboard
        </Typography>

        <Typography as="h3">Welcome, {user && user.username}</Typography>
      </Grid>
    </Grid>
  );
};

DashboardHeader.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  {}
)(DashboardHeader);
