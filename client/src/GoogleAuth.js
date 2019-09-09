import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './actions/auth';
import PropTypes from 'prop-types';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          // clientId: '47395222832-s1l9u9r4549upoqchm7v4kbq40k2jdc2.apps.googleusercontent.com',
          clientId: '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.auth = window.gapi2.getAuthInstance();
          this.onAuthChange(this.auth.isAuthenticated.get());
          this.auth.isAuthenticated.listen(this.onAuthChange);
        });
    });
  }

   onAuthChange = isAuthenticated => {
    if (isAuthenticated) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
      }
    };

   onSignInClick = (e) => {
    this.auth.signIn();
  };

   onSignOutClick = (e) => {
    this.auth.signOut();
  };

 renderAuthButton = () => {
  if (this.props.isAuthenticated === null) {
    return null;
  } else if (this.props.isAuthenticated) {
    return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
    );
  } else {
    return (
      <button size='small' onClick={this.onSignInClick} className="ui small centered red google button">
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }
};

render() {
  return (
      <div>
        {this.renderAuthButton()}
      </div>
      );
  }
};

GoogleAuth.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
