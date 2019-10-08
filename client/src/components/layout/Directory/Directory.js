import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import { fetchUsers } from "../../../actions/user";
import VerticalMenu from "./VerticalMenu";
import SearchDirectory from "./SearchDirectory";
import UserList from "./UserList";

const Directory = ({ users, profiles, fetchUsers }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <VerticalMenu />
      </Grid>
      <Grid item xs={10}>
        <center>
          <Header as="h2">meZocliQ Directory</Header>
          <Header as="p">
            Check out our Company Directory, organized by Employee, Team, and in
            the context of the overall organizational chart. Feel free to click
            on a specific Employee or Team to get additional details!
          </Header>
        </center>
        <Grid item xs={12}>
          <SearchDirectory />
        </Grid>
        <div className="ui celled list" style={{ marginTop: "-150px" }}>
          <UserList />
        </div>
      </Grid>
    </Grid>
  );
};

Directory.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { users: Object.values(state.users) };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Directory);
