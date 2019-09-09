import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Form } from "semantic-ui-react";
// Redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register, toggleCheck } from "../../actions/auth";
// Local Imports
import GoogleAuth from "../../GoogleAuth";

const Register = ({ setAlert, register, isAuthenticated, toggleCheck }) => {
  const [formData, setFormData] = useState(
    {
      terms: false,
      email: "",
      password: "",
      password2: ""
    },
    []
  );

  const { email, terms, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onCheck = e => {
    toggleCheck(e);
  };

  const onRegister = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else if (terms) {
      setAlert("Please read and agree to our Terms and Conditions");
    } else {
      register({ email, terms, password });
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
        <Form className="ui form attached fluid segment" onSubmit={onRegister}>
          <div className="field">
            <label>Enter your eMail address (@mezocliq.com):</label>
            <Form.Input
              icon="mail"
              iconPosition="left"
              placeholder="Enter your eMail Here!"
              type="text"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>password:</label>
              <Form.Input
                icon="lock"
                iconPosition="left"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>confirm password:</label>
              <Form.Input
                icon="lock"
                iconPosition="left"
                type="password"
                name="password2"
                placeholder="confirm password"
                value={password2}
                onChange={e => onChange(e)}
              />
            </div>
          </div>

          <div className="inline field">
            <div className="ui checkbox">
              <Form.Checkbox
                id="terms"
                name="terms"
                label="I agree to the Terms & Conditions"
                onClick={onCheck}
                value={terms}
                required
              />
            </div>
          </div>

          <Grid columns={2} centered>
            <Grid.Column>
              <button className="ui blue submit button">Register</button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid>
        </Form>

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
