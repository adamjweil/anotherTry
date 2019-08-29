import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from "./../auth/Login";
import Register from "./../auth/Register";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated !== (null || false)) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Grid columns={3}>
      <Grid.Column>
        <section>
          <div className="ui container landing">
            <div className="landing-inner">
              <h1 className="x-large">
                meZocliQ
                <h4 className="x-large">Online Portal</h4>
              </h1>
            </div>
          </div>
        </section>
        <Grid.Row>
          <Login />
        </Grid.Row>
      </Grid.Column>

      <Grid.Column>
        <div className="content">
          <h1>IMPORTANT CONTENT</h1>
          <h1>- - - - - - - - - </h1>
          <h1>IMPORTANT CONTENT</h1>
          <h1>- - - - - - - - - </h1>
          <h1>IMPORTANT CONTENT</h1>
          <h1>- - - - - - - - - </h1>
        </div>
      </Grid.Column>
    </Grid>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
