import React from "react";
import { loadCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Header, Typography } from "@material-ui/core";

// import Spinner from "../layout/Spinner";
import ProfileCard from "../Profile/ProfileCard";
import ProfileForm from "../Profile/profile-forms/ProfileForm";

const Dashboard = ({ profile, loading, user }) => {
  return (
    <Grid
      container
      direction="rowReverse"
      justify="flexStart"
      alignItems="flexEnd"
    >
      <Grid>
        <Typography as="h4" align="center" gutterButtom>
          Welcome to the meZocliQ Online Portal, {user && user.email}!
        </Typography>
      </Grid>
      // <Grid item sm={6}></Grid>
      <Grid container>
        <Grid item sm={4}></Grid>
        <Grid item sm={7}>
          <ProfileForm />
        </Grid>
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
