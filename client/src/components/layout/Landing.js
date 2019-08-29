import React from "react";
import { Link } from "react-router-dom";

import Register from "./../auth/Register";
import Login from "./../auth/Login";

import { Grid } from 'semantic-ui-react';

const Landing = () => {
  return (
    <Grid centered columns={6}>
      <Grid.Row>
      <Grid.Column>
        <section>
          <div className="ui container landing">
            <div className="landing-inner">
              <h1 className="x-large">
                meZocliQ
                <h4 className="x-large">Online Portal</h4>
              </h1>
              <div className="content">
                <p>Hello this is the body</p>
              </div>
            </div>
          </div>
        </section>
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <div className="content">
          <p>Hello this is the body</p>
        </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Landing;
