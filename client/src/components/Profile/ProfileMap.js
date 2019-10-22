import React, { useEffect, useState } from "react";
import { fetchProfiles } from "../../../actions/profile";
import { connect } from "react-redux";
import {
  MenuItem,
  Select,
  Grid,
  FormControl,
  InputLabel
} from "@material-ui/core";

const ProfileMap = ({ fetchProfiles, profiles }) => {
  // useEffect(() => {
  //   fetchProfiles();
  // }, [fetchProfiles]);
  const [formData, setFormData] = useState({});
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const firstNameObject = {};

  return profiles.map(profile => {
    return (
      <Grid container>
        <MenuItem key={profile ? profile.id : ""} value={profile}>
          {profile && profile.firstName}
        </MenuItem>
      </Grid>
    );
  });
};

const mapStateToProps = state => ({
  profiles: Object.values(state.profiles),
  profile: state.profile,
  user: state.user
});

export default connect(
  mapStateToProps,
  { fetchProfiles }
)(ProfileMap);
