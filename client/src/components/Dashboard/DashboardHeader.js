import React from "react";
import { connect } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";
const DashboardHeader = ({ user, auth }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={9}
        style={{
          marginLeft: "100px",
          borderBottom: "3px solid #F8F8F8"
        }}
      >
        <Header style={{ fontSize: "36px", fontWeight: "550" }}>
          Dashboard
        </Header>
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
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(DashboardHeader);
