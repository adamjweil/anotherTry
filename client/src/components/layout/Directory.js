import React, { Fragment, useEffect, withRouter } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Header, Image, Container, Body } from "semantic-ui-react";
import { fetchUsers } from "../../actions/user";

const Directory = ({ fetchUsers }) => {
  fetchUsers();

  return <div>Directory</div>;
};

const mapStateToProps = state => ({
  fetchUsers: state.fetchUsers,
  users: state.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Directory);
