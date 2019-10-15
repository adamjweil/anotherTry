import React from "react";
import { loadCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";
// import Spinner from "../layout/Spinner";
import ProfileCard from "../Profile/ProfileCard";
import ProfileForm from "../Profile/profile-forms/ProfileForm";

const Dashboard = ({ profile, loading, user }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <img
          src={process.env.PUBLIC_URL + "/img/mezLogo120px.png"}
          style={{ width: "200px", margin: "-30px -20px -60px" }}
          alt={process.env.PUBLIC_URL + "/img/mezLogo240px.png"}
        />
        <br />
        <Header as="h3">
          Welcome to the meZocliQ Online Portal, {user && user.email}!
        </Header>
      </Grid>
      <Grid item xs={12} sm={6}>
        {profile === null ? <ProfileForm /> : <ProfileCard />}
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {
  loadCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile }
)(Dashboard);
