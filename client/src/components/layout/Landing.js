import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Grid, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

import Footer from './Footer';
import Login from "./../auth/Login";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated !== (null || false)) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <img
              style={{ marginTop: "20px", marginBottom: "0px" }}
              src={process.env.PUBLIC_URL + "/img/mezologo1.png"}
              alt=""
            />
            <Header
              style={{
                marginLeft: "5px",
                paddingBottom: "50px",
                fontSize: "40px"
              }}
              dividing
            >
              <center>Online Portal</center>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Login />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </Container>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
