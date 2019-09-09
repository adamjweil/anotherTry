import React, { Fragment } from "react";
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
    <Fragment>
    <Container style={{ marginTop: "10px", display: 'flex', flex: '1', flexDirection: 'column' }}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <img
              style={{ marginTop: "20px", marginBottom: "0px", width: '80%', justifyContent: 'center' }}
              src={process.env.PUBLIC_URL + "/img/mezologo1.png"}
              alt=""
            />

            <Header
              style={{
                marginLeft: "px",
                marginBottom: '100px',
                fontSize: "35px"
              }}
              dividing >

            Online Portal
            </Header>

          </Grid.Column>
          <Grid.Column>
            <Login />
          </Grid.Column>
        </Grid.Row>
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
