import React, { Fragment, useEffect, useState } from 'react';
import Tickets from './Tickets';
import { getCurrentProfile, createProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const Dashboard = ({ createProfile, getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile()
  }, []);

const [formData, setFormData] = useState({
  team: '',
  title: '',
  bio: '',
  hireDate: '',
  skills: '',
  githubusername: ''
})
const { team, title, bio, hireDate, skills, githubusername } = formData;

const onChange = e => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}
const onSubmit = async e => {
  e.preventDefault();
  createProfile(formData);

};
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Grid columns={3}>
      <Grid.Column>
    <Fragment>
      <h1 className="">Dashboard</h1>
      <p className="load">
        <i className="fas fa-user"></i> Welcome, <br /> {user && user.name }

      </p>
    </Fragment>
    </Grid.Column>
    <Grid.Column>
      <Header as='h2' textAlign='center'>
        Create a Profile
      </Header>
      <Segment>
        <Form size='large' onSubmit={e => onSubmit(e)}>

          <select className='ui dropdown'>
            <option value="">Team</option>
            <option value="Dev">Dev</option>
            <option value="LogiQ">LogiQ</option>
            <option value="Admin">Admin</option>
          </select>

          <Form.Input
            fluid
            type='text'
            name='title'
            value={title}
            placeholder="Please enter your Title"
            onChange={e => onChange(e)}
            iconPosition='left'
          />

          <Button color='blye'fluid size="small">
            Save and Continue
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
    </Grid>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
{ getCurrentProfile, createProfile }
)(Dashboard);
