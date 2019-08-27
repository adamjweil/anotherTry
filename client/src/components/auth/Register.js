import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { username, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = ({ formData }) => async dispatch =>
    console.log(formData);


    return (
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Register
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
                 <Link to="/register">
                  Sign up here...
                 </Link>
               </Message>
             </Grid.Column>
           </Grid>
     );
  };

  Register.propTypes = {
    register: PropTypes.func.isRequired
  }


export default connect(null,
{ setAlert }
)(Register);
