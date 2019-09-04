import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { toggleCheck } from "../../actions/auth";
import { Grid } from "semantic-ui-react";

const Register = ({ setAlert, register, isAuthenticated, toggleCheck }) => {
  const [formData, setFormData] = useState({
    terms: false,
    email: "",
    password: "",
    password2: ""
  });

  const { email, terms, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onCheck = e => {
    toggleCheck();
  };

  const onRegister = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else if (terms) {
      setAlert("Please read and agree to our Terms and Conditions");
    } else {
      await register({ email, terms, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <div className="ui attached message">
          <div className="header">Welcome to the meZocliQ Online Portal</div>
          <p>
            <i className="hand point left icon"></i>Create New Account!
          </p>
        </div>
        <form className="ui form attached fluid segment">
          <div className="field">
            <label>enter your email:</label>
            <input
              icon="mail"
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              iconPosition="left"
            />
          </div>
          <div className="two fields">
            <div className="field">
              <label>password:</label>
              <input
                icon="user"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
            </div>
            <div className="field">
              <label>confirm password:</label>
              <input
                icon="lock"
                type="password"
                name="password2"
                placeholder="confirm password"
                value={password2}
                onChange={e => onChange(e)}
                iconPosition="left"
              />
            </div>
          </div>

          <div className="inline field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                onClick={onCheck}
                value={terms}
              />
              <label>I agree to the T&C</label>
            </div>
          </div>
          <div className="ui blue submit button" onClick={onRegister}>
            Submit
          </div>
        </form>
        <div className="ui bottom attached warning message">
          <i className="icon help"></i>
          Already have an account?{" "}
          <Link to="/" className="item">
            Login here
          </Link>
        </div>
      </Grid.Column>
    </Grid>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  register: state.auth,
  alerts: state.alerts
});

export default connect(
  mapStateToProps,
  { setAlert, register, toggleCheck }
)(Register);
