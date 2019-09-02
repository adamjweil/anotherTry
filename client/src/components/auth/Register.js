import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import { Form, Grid } from 'semantic-ui-react';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { firstName, lastName, email, terms, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else if (terms === null) {
      setAlert('Please read and agree to our Terms and Conditions');
    } else {
      register({ firstName, lastName, email, terms, password })
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/profile" />
  }

  return (
      <Grid centered columns={2}>
        <Grid.Column>
        <div className='ui attached message'>
          <div className='header'>
            Welcome to the meZocliQ Online Portal
          </div>
          <p>
           <i className="hand point left icon"></i>Create New Account!
          </p>
        </div>
          <form className='ui form attached fluid segment' size="large" onSubmit={e => onSubmit(e)} >
            <div className='field'>
              <label>enter your email:</label>
              <input
                placeholder='Email'
                type='text'
                name='email'
                iconPosition='left'
                value={email}
                onChange={e => onChange(e)} />
            </div>
            <div className='two fields'>
              <div className='field'>
                <label>first name:</label>
                  <Form.Input
                    fluid
                    type="test"
                    name='firstName'
                    placeholder="FirstName"
                    value={firstName}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='field'>
                  <label>last name:</label>
                  <Form.Input
                    fluid
                    type="text"
                    name='lastName'
                    placeholder="last name"
                    value={lastName}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>

            <div className='field'>
              <label>password:</label>
                <Form.Input
                  fluid
                  type="password"
                  name='password'
                  placeholder="password"
                  value={password}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='field'>
                <label>confirm password:</label>
                <Form.Input
                  fluid
                  type="password"
                  name='password2'
                  placeholder="confirm password"
                  value={password2}
                  onChange={e => onChange(e)}
                />
              </div>

              <div className="inline field">
                <div className='ui checkbox'>
                  <input type='checkbox' id='terms' name='terms' />
                  <label>I agree to the T&C</label>
                </div>
              </div>
              <div className='ui blue submit button'>
                Register
              </div>
          </form>
          <div className='ui bottom attached warning message'>
            <i className='icon help'></i>
            Already have an account? <Link to="/" className='item'>Login here</Link>
          </div>

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
