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

return (
  <nav className="fas fa-code">
    <h1>
      <Link to="/">
        <i className="fas fa-code"> DevConnector (Social)</i>
      </Link>
    </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
  </nav>
  )
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
