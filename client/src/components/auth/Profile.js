import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

import { Grid, Column } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Profile = ({ loadUser, setAlert }) => {
  const grav = "https://react.semantic-ui.com/images/avatar/large/matthew.png"
  return (
    <div className='ui card'>
      <div className='image'>
        <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      </div>
      <div className="content">
        <div className="header"> xys </div>
        <div className="description"> zyx </div>
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
  loadUser: PropTypes.func.isRequired
}

export default connect(null, { loadUser })(Profile);
