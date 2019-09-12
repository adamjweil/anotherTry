import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AuthenticatedNavbar from "./AuthenticatedNavbar";
import UnauthenticatedNavbar from "./UnauthenticatedNavbar";
import { logout } from "../../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading, isAdmin }, logout }) => {
  if (isAuthenticated === true) {
    return <AuthenticatedNavbar />;
  } else {
    return <UnauthenticatedNavbar />;
  }
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAdmin: state.isAdmin
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
