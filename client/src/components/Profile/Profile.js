import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchProfileById } from "../../actions/profile";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import ProfileHeaderAlert from "./ProfileHeaderAlert";
import Spinner from "../layout/Spinner";
import { fetchProfile } from '../../actions/profile';
import store from "./../../store";
const Profile = ({
  fetchProfileById,
  profile: { profile, profileLoading, isSaved },
  auth,
  auth: { user },
  match
}) => {
  useEffect(() => {
    store.dispatch(fetchProfile());
    // fetchProfileById(match.params.id);
  }, []);
  // }, [fetchProfileById, match.params.id]);

  return profileLoading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Grid conntainer="true">
        {isSaved ? (
          <Grid container>
            <Grid
              item
              xs={12}
              sm={3}
              style={{
                marginLeft: "30px",
                minWidth: "350px",
                maxWidth: "375px"
              }}
            >
              <ProfileCard profile={profile} user={user} auth={auth} />
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        {isSaved ? (
          ""
        ) : (
          <Grid container>
            <Grid item xs={12}>
              <ProfileHeaderAlert />
            </Grid>
            <Grid item style={{ margin: "10px 30px 0px" }} xs={12} sm={12}>
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
  user: state.auth.user,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchProfileById: () => dispatch(fetchProfileById())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
