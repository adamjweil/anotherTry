import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthenticatedNavbar from "./AuthenticatedNavbar";
import UnauthenticatedNavbar from "./UnauthenticatedNavbar";
import { logout } from "../../../actions/auth";

const Navbar = ({ isAuthenticated, auth: { loading, isAdmin }, logout }) => {
  if (isAuthenticated === true) {
    return <AuthenticatedNavbar />;
  } else {
    return <UnauthenticatedNavbar />;
  }
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: true,
  auth: state.auth,
  isAdmin: state.isAdmin
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
