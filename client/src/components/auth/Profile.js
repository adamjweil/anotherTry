import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { getCurrentProfile } from '../../actions/profile';

import { Grid, Column } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProfileMenu from './Profile/ProfileMenu';

const Profile = ({ loadUser, setAlert, getCurrentProfile, auth: { user }, profile: { profile, loading } } ) => {
  useEffect(() => {
      getCurrentProfile()
  }, []);
  // getCurrentProfile();

  return (
    <Grid columns={3}>

      <Grid.Column>
        <div className='ui card'>
          <div className='image'>
            <img src={user && user.avatar} alt="https://as1.ftcdn.net/jpg/02/59/94/92/500_F_259949239_KKDiZphlWffdaE5zsugujCQtaZ8nyWW9.jpg" />
          </div>
          <div className="content">
            <div className="header"> {profile && profile.team} Team </div>
            <div className="description"> {profile && profile.title} </div>
          </div>
          <div className="extra content">
            <Link to="#" className="">
              <i aria-hidden="true" className="mail icon"></i>
              { user && user.email }
            </Link>
          </div>
        </div>
      </Grid.Column>
      <Grid.Column>
      <Grid.Row>
        <ProfileMenu />
      </Grid.Row>
        <div>
          <p>Bio: { profile && profile.bio }</p>
          <p>Skills: { profile && profile.skills }</p>
        </div>
      </Grid.Column>


    </Grid>
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
