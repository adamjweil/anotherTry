import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Login from "./../auth/Login";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated !== (null || false)) {
    return <Redirect push to="/dashboard" />;
  }

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item sm={12} md={6}>
            <Login />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              display: "in-line",
              position: "absolute",
              bottom: "15px",
              left: "15px",
              right: "15px"
            }}
          ></div>
        </Grid>
      </Container>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
