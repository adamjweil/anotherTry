import React, { Fragment, useEffect } from "react";
import { getCurrentProfile, createProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Dashboard = ({
  createProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  // getCurrentProfile();

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Grid columns={2} className="very relaxed stackable grid">
      <Grid.Column>
        <Fragment>
          <h2 className="">Dashboard</h2>
          <h3>{profile && profile.team} Team</h3>
          <h4>{profile && profile.title}</h4>

          <p className="load">
            <i className="fas fa-user"></i> Welcome, {user && user.email}
          </p>
          <p className="load">
            {profile &&
              "Thank you for setting up a Profile! You can always go back and edit any information from your Profile page, shoudl you need to.."}
          </p>
        </Fragment>
      </Grid.Column>

      {profile !== null ? (
        <Fragment>
          {" "}
          <Menu />{" "}
        </Fragment>
      ) : (
        <Fragment>
          <Grid.Column>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="ui positive animated button">
              <div className="visible content">Create Profile</div>
              <div className="hidden content">
                <i aria-hidden="true" className="arrow right icon"></i>
              </div>
            </Link>
          </Grid.Column>
        </Fragment>
      )}
    </Grid>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
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
