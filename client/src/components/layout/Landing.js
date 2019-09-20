import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Login from "./../auth/Login";
import { login } from "../../actions/auth";
import { loadUser } from "../../actions/user";

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

const Landing = ({ history, isAuthenticated, login, loadUser }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.root}>
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
  isAuthenticated: PropTypes.bool,
  loadUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, loadUser }
)(Landing);
