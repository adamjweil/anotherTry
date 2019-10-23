import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

const Profiles = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        Hello
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  profiles: Object.values(state.profile.profiles)
});

export default connect(
  mapStateToProps,
  {}
)(Profiles);
