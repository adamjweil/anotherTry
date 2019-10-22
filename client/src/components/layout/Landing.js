import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Login from "./../auth/Login";
import Register from "./../auth/Register";
import { login } from "../../actions/auth";
import Footer from "./Navbar/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flex: "1 1 auto",
    height: "100%",
    minHeight: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  login: {
    marginTop: "130px"
  }
}));

const Landing = ({ auth: { isAuthenticated }, history, login }) => {
  const [values, setValues] = React.useState({
    loginOrRegister: true
  });
  const showLoginOrRegister = () => {
    setValues({ ...values, showLoginOrRegister: !values.showLoginOrRegister });
  };

  const classes = useStyles();
  if (isAuthenticated === true) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <Fragment style={{}}>
        <Grid container className={classes.root}>
          <Grid item sm={2} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.login}>
              {showLoginOrRegister ? (
                <Login showLoginOrRegister={showLoginOrRegister} />
              ) : (
                <Register />
              )}
            </div>
          </Grid>
          <Grid item sm={3}></Grid>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              display: "block",
              position: "absolute",
              bottom: "15px",
              left: "15px",
              right: "15px"
            }}
          ></div>
        </Grid>
      </Fragment>
    );
  }
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(Landing);
