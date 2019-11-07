import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchProfile, fetchProfileById } from "../../actions/profile";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import ProfileHeaderAlert from "./ProfileHeaderAlert";
import Spinner from "../layout/Spinner";

const Profile = ({
  fetchProfileById,
  profile: { profile, loading, isSaved },
  auth,
  match
}) => {
  useEffect(() => {
    fetchProfileById(match.params.id);
  }, [fetchProfileById, match.params.id]);

  return (
    <Fragment>
      <Grid conntainer>
        {loading ? (
          <Spinner />
        ) : ""}
        {isSaved ? (
        <Grid container>

          <Grid
            item
            xs={12}
            sm={3}
            style={{ marginLeft: "30px", minWidth: "350px", maxWidth: "375px" }}
          >
            <ProfileCard />
          </Grid>
        </Grid>
        ) : ""}
        {isSaved ? "" : (
          <Grid container>
            <Grid item xs={12}>
              <ProfileHeaderAlert />
            </Grid>
            <Grid item style={{margin: "10px 30px 0px"}} xs={12} sm={12}>
              <ProfileForm />
            </Grid>
          </Grid>
        )}
        </Grid>
    </Fragment>
  );
};

Profile.propTypes = {
  fetchProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchProfileById }
)(withRouter(Profile));
