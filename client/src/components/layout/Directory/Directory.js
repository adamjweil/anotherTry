import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { fetchUsers } from "../../../actions/user";
import VerticalMenu from "./VerticalMenu";
import SearchDirectory from "./SearchDirectory";
import UserList from "./UserList";
import DirectoryHeader from "./DirectoryHeader";
import { withRouter } from "react-router-dom";

const Directory = ({ users, profiles, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Grid container>
      <Grid item xs={2}>
        <VerticalMenu />
      </Grid>
      <Grid item="row" xs={10}>
        <DirectoryHeader />
      </Grid>
      <Grid item sm={2}></Grid>
      <Grid item="row" sm={10}>
        <SearchDirectory />
        <Grid item="row" sm={12}>
          <div style={{ marginTop: "0px" }} className="ui celled list">
            <UserList />
          </div>
        </Grid>
      </Grid>

      <div className="ui celled list"></div>
    </Grid>
  );
};

Directory.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(withRouter(Directory));
