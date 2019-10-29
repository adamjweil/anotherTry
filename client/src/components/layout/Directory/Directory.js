import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchUsers } from "../../../actions/user";
import { createTeam } from "../../../actions/team";
import VerticalMenu from "./VerticalMenu";
import SearchDirectory from "./SearchDirectory";
import UserList from "./UserList";
import TeamList from "./TeamList";
import CreateTeamForm from "./CreateTeamForm";
import DirectoryHeader from "./DirectoryHeader";
import { withRouter } from "react-router-dom";

const Directory = ({
  directory: { activeTab },
  users,
  profiles,
  teams,
  fetchUsers,
  createTeam
}) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <VerticalMenu />
      </Grid>
      <Grid item xs={10}>
        <DirectoryHeader />
      </Grid>
      <Grid item sm={2}></Grid>
      <Grid item sm={10}>
        <SearchDirectory />
        <Grid item sm={12}>
          {activeTab === "employees" ? <UserList /> : ""}
          {activeTab === "teams" ? <TeamList /> : ""}
          {activeTab === "createTeamForm" ? <CreateTeamForm /> : ""}
        </Grid>
      </Grid>

      <div className="ui celled list"></div>
    </Grid>
  );
};

Directory.propTypes = {
  fetchUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // users: state.users,
  directory: state.directory
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(withRouter(Directory));
