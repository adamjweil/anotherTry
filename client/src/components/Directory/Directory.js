import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import ProfilesWrapper from "./ProfilesWrapper";
import TeamsWrapper from "./TeamsWrapper";
import DirectoryHeader from "./DirectoryHeader";
import { withRouter } from "react-router-dom";

const Directory = ({
  directory: { activeTab },
  users,
  profiles,
  teams,
  createTeam
}) => {
  const [formData, setFormData] = useState({
    display: true
  });

  const { display } = formData;

  const toggle = e => {
    e.preventDefault();
    setFormData({ ...formData, display: !display });
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <DirectoryHeader />
      </Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={toggle}
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          style={{ fontSize: "18px", fontWeight: "700" }}
        >
          Employees
        </Button>
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={4}>
        <Button
          onClick={toggle}
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          style={{ fontSize: "18px", fontWeight: "700" }}
        >
          Teams
        </Button>
      </Grid>
      <Grid item xs={1}></Grid>
      <br />

      <Grid item sm={12}>
        <center>{display ? <ProfilesWrapper /> : <TeamsWrapper />}</center>
      </Grid>

      <div className="ui celled list"></div>
    </Grid>
  );
};

Directory.propTypes = {
  display: PropTypes.bool,
  directory: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  display: state.display,
  directory: state.directory
});

export default connect(mapStateToProps)(withRouter(Directory));
