import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  if (isAuthenticated) {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <i className="home icon"></i>Home
        </Link>
        <Link to="/directory" className="item">
          <i className="address card icon"></i>Directory
        </Link>
        <div className="right menu">
          <Link to="/dashboard" className="item">
            <i className="magic icon"></i>Dashboard
          </Link>
          <Link to="/profile" className="item">
            <i className="user circle icon"></i>My Profile
          </Link>
          <Link onClick={logout} href="/logout">

            <span className="item"><i className="logout icon"></i>Logout</span>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <i className="home icon"></i>Home
        </Link>
        <div className="right menu">
          <Link to="/directory" className="item">
            <i className="address card icon"></i>Directory
          </Link>
          <Link to="/register" className="item">
            Register
          </Link>
        </div>
      </div>
    );
  }
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
