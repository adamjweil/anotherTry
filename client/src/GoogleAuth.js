import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions/auth";
import PropTypes from "prop-types";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "984913872053-18mjie93d0ri9o9p6m2m41587rkmkbjp.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.auth = window.gapi2.getAuthInstance();
          this.onAuthChange(this.isAuthenticated.get());
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

  onSignInClick = async e => {
    e.preventDefault();
    this.auth.signIn();
  };

  onSignOutClick = e => {
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
        <button
          size="small"
          onClick={this.onSignInClick}
          className="ui small centered red google button"
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  render() {
    console.log(this.state);
    return <div>{this.renderAuthButton()}</div>;
  }
}

GoogleAuth.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
