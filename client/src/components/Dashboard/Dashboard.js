import React, { Fragment, useEffect, useState } from 'react';
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
});

// getCurrentProfile();
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
    <Grid columns={2} className="very relaxed stackable grid">
      <Grid.Column>
    <Fragment>
      <h2 className="">Dashboard</h2>
      <p className="load">
        <i className="fas fa-user"></i> Welcome, {user && user.name }
      </p>
      <div className='ui divided list'>
        <h3>
          <div className=''>Team:</div>
          { profile && profile.team}
        </h3>      <h3>
          <div className=''>Title:</div>
          { profile && profile.title}
        </h3>
      </div>
    </Fragment>
    </Grid.Column>

    <Grid.Column>
      <Header as='h2' textAlign='center'>
        Create a Profile
      </Header>

      <Segment>
        <Form size='large' onSubmit={e => onSubmit(e)}>

          <select
            name="team"
            value={team}
            onChange={e => onChange(e)}
            className='ui dropdown'>
            <option value="">Select Your team...</option>
            <option value="Dev">Dev</option>
            <option value="LogiQ">LogiQ</option>
            <option value="Admin">Admin</option>
          </select>

            <br />

          <select
            name="title"
            value={title}
            onChange={e => onChange(e)}
            className='ui dropdown'>
            <option value="">Select Your title...</option>
            <option value="Analyst">Analyst</option>
            <option value="Associate">Associate</option>
            <option value="Director">Director</option>
            <option value="Senior Director">Senior Director</option>
            <option value="Managing Director">Managing Director</option>
          </select>

            <br />

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
