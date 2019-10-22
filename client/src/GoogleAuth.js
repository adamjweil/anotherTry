import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, loadUser } from "./actions/auth";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
// import { signIn }
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
        <Button onClick={this.onSignOutClick} className="ui red google button">
          Sign Out
        </Button>
      );
    } else {
      return (
        <Grid container>
          <Grid item xs={12}>
            <Button
              fullWidth
              size="small"
              variant="outlined"
              color="standard"
              onClick={this.onSignInClick}
            >
              Sign In with Google
            </Button>
          </Grid>
        </Grid>
      );
    }
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {this.renderAuthButton()}
        </Grid>
      </Grid>
    );
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
  { signIn, signOut, loadUser }
)(GoogleAuth);
