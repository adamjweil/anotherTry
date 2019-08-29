import React, { Fragment, useEffect } from 'react';
import Tickets from './Tickets';
import { getCurrentProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile()
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="">Dashboard</h1>
      <p className="load">
        <i className="fas fa-user"></i> Welcome {user && user.name }
      </p>
    </Fragment>
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
{ getCurrentProfile }
)(Dashboard);
