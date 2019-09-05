import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { login } from "../../actions/auth";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Grid centered columns={1} style={{ paddingRight: "30px" }}>
      <Grid.Column>
        <Header as="h4" textAlign="center">
          Login
        </Header>
        <Segment>
          <Form size="medium" onSubmit={e => onSubmit(e)}>
            <Form.Input
              fluid
              icon="user"
              type="text"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={e => onChange(e)}
            />
            <Form.Input
              fluid
              icon="lock"
              type="password"
              name="password"
              placeholder="Email a password"
              value={password}
              onChange={e => onChange(e)}
            />
            <Button color="blue" fluid size="small">
              Login
            </Button>
          </Form>
        </Segment>
        <Message>
          Not registered yet?
          <Link to="/register"> Sign up here . . .</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.auth,
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { setAlert, login }
)(Login);
