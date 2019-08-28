import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = () => (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/login" className="item">
          Login
          </Link>
          <Link to="/register" className="item">
            Register
          </Link>
        </div>
      </div>
  );

  const authLinks = () => (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/profile" className="item">
          Profile
        </Link>
        <Link onClick={logout} href="/logout">
          <i className="fas fa-sign-out-alt" />{` `}
          <span className="hide-sm">Logout</span>
        </Link>
      </div>
    </div>
  );
  // If user isn't logged in already (doesn't have a token)


  if (isAuthenticated) {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/dashboard" className="item">
            Dashboard
          </Link><Link to="/profile" className="item">
            My Profile
          </Link>
          <Link onClick={logout} href="/logout">
            <i className="fas fa-sign-out-alt" />{` `}
            <span className="item">Logout</span>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/login" className="item">
          Login
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
