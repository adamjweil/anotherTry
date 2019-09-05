import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Login from "./../auth/Login";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from "semantic-ui-react";

const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

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
      <div style={style.last}>
        <Step.Group fluid>
          <Step
            active
            icon="ticket"
            title="Improved Ticket Mgmt"
            description="Enter, fix, comment and help out with tickets, all from one place"
            style={{ textAlign: "center", minWidth: "200px", maxWidth: "33%" }}
          />
          <Step
            active
            icon="paper plane"
            title="Improved Communications"
            description="Clearer organizational channels that will reduce reducdency"
            style={{ textAlign: "center", minWidth: "200px", maxWidth: "33%" }}
          />
          <Step
            active
            icon="angellist"
            title="Teamwork"
            description="Become more invested in the success of our company?"
            style={{ textAlign: "center", minWidth: "200px", maxWidth: "33%" }}
          />
        </Step.Group>
      </div>
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
