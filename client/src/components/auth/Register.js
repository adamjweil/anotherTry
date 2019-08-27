import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "./../../actions/alert";
import { register } from "./../../actions/auth";
import PropTypes from "prop-types";
import { loadUser } from "./../../actions/auth";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const Register = ({ setAlert, register, loadUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    isAuthenticated: null,
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = formData => async dispatch => {
    console.log(formData);
    const body = JSON.stringify({ username, email, password });
    console.log(body);
    const res = await register(body);
    console.log(res);
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Create an Account
        </Header>
        <Segment>
          <Form size="large" onSubmit={onSubmit()}>
            <Form.Input
              fluid
              icon="user"
              type="text"
              name="username"
              placeholder="Enter a Username"
              value={username}
              onChange={e => onChange(e)}
              iconPosition="left"
            />
            <Form.Input
              fluid
              icon="mail"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={e => onChange(e)}
              iconPosition="left"
            />
            <Form.Input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={e => onChange(e)}
              iconPosition="left"
            />
            <Form.Input
              type="password"
              name="password2"
              placeholder="password"
              value={password2}
              onChange={e => onChange(e)}
              iconPosition="left"
            />
            <Button color="blue" fluid size="large">
              Register
            </Button>
          </Form>
        </Segment>
        <Message>
          Already have an account?
          <Link to="/login"> Sign in here...</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { auth: state.auth.isAuthenticated };
};

export default connect(
  mapStateToProps,
  { register, setAlert, loadUser }
)(Register);
