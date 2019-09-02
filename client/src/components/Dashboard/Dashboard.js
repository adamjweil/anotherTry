import React, { Fragment, useEffect, useState } from 'react';
import { getCurrentProfile, createProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Grid } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Dashboard = ({
  createProfile,
  getCurrentProfile, auth: { user },
  profile: { profile, loading } }) => {
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
          <h3>{ profile && profile.team } Team<h4>{ profile && profile.title }</h4></h3>

          <p className="load">
            <i className="fas fa-user"></i> Welcome, { user && user.email }
          </p>
          <p className='load'>
          { profile &&
            "Thank you for setting up a Profile! You can always go back and edit any information from your Profile page, shoudl you need to.."
          }
          </p>
        </Fragment>
      </Grid.Column>


    { profile !== null ? <Fragment> <Menu /> </Fragment>
      : <Fragment>
      <Grid.Column>
      <p>
        You have not yet setup a profile, please add some info
      </p>
      <Link to='/create-profile' className='btn btn-primary'>
        Create Profile
      </Link>

      </Grid.Column>
      </Fragment>}

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
