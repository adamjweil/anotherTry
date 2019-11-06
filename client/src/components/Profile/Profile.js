import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchProfile, fetchProfileById } from "../../actions/profile";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

const Profile = ({ fetchProfile, fetchProfileById, auth, match, isSaved }) => {
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={3}
          style={{ marginLeft: "30px", minWidth: "350px", maxWidth: "375px" }}
        >
          <ProfileCard />
        </Grid>

        <Grid item sm={8} style={{ marginLeft: "30px", marginTop: "20px" }}>
          {!isSaved ? <ProfileForm /> : ""}
        </Grid>
      </Grid>
    </Fragment>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  fetchProfileById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isSaved: state.profile.isSaved
});

export default connect(
  mapStateToProps,
  { fetchProfileById, fetchProfile }
)(withRouter(Profile));
