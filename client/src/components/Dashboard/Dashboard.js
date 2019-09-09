import React, { Fragment, useEffect } from "react";
import { getCurrentProfile, createProfile } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import Footer from '../layout/Footer';
import LeftMenu from './LeftMenu';

const Dashboard = ({
  createProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <LeftMenu />
     { loading && profile === null ? (
      <Spinner />
    ) : (
    <Grid style={{marginTop: '10px'}} container columns={2} divided relaxed stackable>
      <Grid.Column >
        <Fragment>
        <img
          src={process.env.PUBLIC_URL + '/img/mezLogo120px.png'}
          style={{ width: '200px', margin: '-30px -20px -60px'}}
          alt=""/>
          <br />
          <Header as='h3'>Welcome to the meZocliQ Online Portal, {user && user.email}!</Header>
        )}
          { profile === null ? (
            <Fragment>
              <LeftMenu />
              <div className='ui warning message'>
                <div className='content'>
                  <div className='header'>
                    You have not yet setup a profile!
                    <p style={{fontSize: '12px'}}>
                      Please click on the button below, and add a couple additional pieces of information for your Profile to be created
                    </p>
                  </div>
                </div>
              </div>

              <Link style={{justifyContent: 'center'}} to="/create-profile" className="ui blue animated button">
                <div className="visible content">Create Profile</div>
                <div className="hidden content">
                  <i aria-hidden="true" className="arrow right icon"></i>
                </div>
              </Link>

              <Header as='h3' dividing />
            </Fragment>
          ) : (
            <Fragment>
              <Header as='h2'>Thank you for setting up a Profile!</Header>
              <Header as='h3' textAlign='center' />
            </Fragment>
          )}
            </Fragment>
          </Grid.Column>
        <Grid.Column>
          <div className="ui message">
            <div className="content">
              <Header as='h2'>Dashboard</Header>

              <ul className="list">
                <li className="content">This page will be where you are spending most of your time</li>
                <li className="content">Any outstanding tickets or requests that your name is associated with, can be viewed here</li>
                <li className="content">Notifications regarding any new or updated Tickets or Requests</li>
              </ul>
            </div>
          </div>
        </Grid.Column>
      <Footer />
    </Grid>
)
}

Dashboard.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile }
)(Dashboard);
