import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { getCurrentProfile } from '../../actions/profile';

import { Grid, Column } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Profile = ({ loadUser, setAlert, getCurrentProfile, auth: { user } }) => {
  useEffect(() => {
      getCurrentProfile()
  }, []);

  return (
    <div className='ui card'>
      <div className='image'>
        <img src={user && user.avatar} alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg" />
      </div>
      <div className="content">
        <div className="header"> {user && user.name} </div>
        <div className="description"> {user && user.email} </div>
      </div>
      <div className="extra content">
        <Link to="#" className="">
          <i aria-hidden="true" className="user icon"></i>
          xyz Friends
        </Link>
      </div>
    </div>
  );
}

Profile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadUser, getCurrentProfile }
)(Profile);
