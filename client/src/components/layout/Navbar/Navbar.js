import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import UnauthenticatedNavbar from "./UnauthenticatedNavbar";
import { logout } from "../../../actions/auth";

const location = window.location.href;

const Navbar = ({
  auth: { isAuthenticated, loading, isAdmin },
  logout,
  location
}) => {
  const [vals, setVals] = useState({
    activeTab: "home"
  });

  const setActiveTab = () => async e => {
    const location = window.location.href;
    if (location === "http://localhost:3000/" || "http://localhost:3000") {
      setVals({ ...vals, activeTab: "home" });
    }
    if (
      location === "http://localhost:3000/directory" ||
      "http://localhost:3000/directory/"
    ) {
      setVals({ ...vals, activeTab: "directory" });
    }
    if (
      location === "http://localhost:3000/register" ||
      "http://localhost:3000/register/"
    ) {
      setVals({ ...vals, activeTab: "register" });
    }
  };

  if (isAuthenticated === true) {
    return <AuthenticatedNavbar setActiveTab={setActiveTab} />;
  } else {
    return <UnauthenticatedNavbar setActiveTab={setActiveTab} />;
  }
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth,
  activeTab: state.activeTab
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
