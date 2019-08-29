import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import Profile from './Profile';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ username, email, password })
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/profile" />
  }

  return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            <i className="coffee icon"></i>Create New Account!
          </Header>
          <Segment>
            <Form size="large" onSubmit={e => onSubmit(e)} >
              <Form.Input
                fluid
                icon="user"
                type="text"
                name='username'
                placeholder="Username"
                value={username}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Form.Input
                fluid
                icon="mail"
                type="text"
                name='email'
                placeholder="Email address"
                value={email}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Form.Input
                fluid
                type="password"
                name='password'
                placeholder="Email a password"
                value={password}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
              <Form.Input
                fluid
                type="password"
                name='password2'
                placeholder="Pls confirm password"
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
               Not registered yet?
               <Link to="/register" className="item">
                Sign up here...
               </Link>
             </Message>
           </Grid.Column>
         </Grid>
     );
  };

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  register: state.auth,
  alerts: state.alerts
});

export default connect(
  mapStateToProps,
{ setAlert, register }
)(Register);
