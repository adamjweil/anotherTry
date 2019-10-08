import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Login from "./../auth/Login";
import Register from "./../auth/Register";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

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
      <Container className={classes.root}>
        <Grid container>
          <Grid item sm={2} md={3}></Grid>
          <Grid item xs={12} md={6}>
            {showLoginOrRegister ? (
              <Login showLoginOrRegister={showLoginOrRegister} />
            ) : (
              <Register />
            )}
          </Grid>
          <Grid item sm={3}></Grid>
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
