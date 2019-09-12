import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "semantic-ui-react";
import { Container, Grid } from "@material-ui/core";

import Footer from "./Footer";
import Login from "./../auth/Login";
import LoginTwo from "./../auth/LoginTwo";

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
    <Fragment className="" style={{ flexGrow: "1" }}>
      <Container style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <img
              style={{
                marginTop: "20px",
                // marginLeft: "20px",
                justifyContent: "center",
                align: "center",
                maxWidth: "400px"
              }}
              src={process.env.PUBLIC_URL + "/img/mezologo1.png"}
              alt=""
            />

            <Header
              style={{
                marginBottom: "100px",
                fontSize: "38px",
                textAlign: "center"
              }}
            >
              ONLINE PORTAL
            </Header>
          </Grid>
          <Grid item xs={12} sm={5} style={{ justifyContent: "right" }}>
            <LoginTwo />
          </Grid>
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
      <Footer />
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
