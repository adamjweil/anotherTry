import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Form, Header } from "semantic-ui-react";
import {
  Grid,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { CheckBoxIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
// Redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register, toggleCheck } from "../../actions/auth";
import {
  showInfoSnackbar,
  showErrorSnackbar,
  showUspsSnackbar
} from "../../actions/alert";
// Local Imports

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  remember: {
    margin: theme.spacing(1, 0, 1)
  }
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const Register = ({ setAlert, register, isAuthenticated, toggleCheck }) => {
  const classes = useStyles();
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
    e.preventDeault();
    toggleCheck(e);
  };

  const onRegister = formData => {
    if (password !== password2) {
      showInfoSnackbar("Passwords do not match");
    }
    if (terms) {
      showErrorSnackbar("Please read and agree to our Terms and Conditions");
    } else {
      register({ email, terms, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect push to="/dashboard" />;
  }

  return (
    <Grid container>
      <Grid item sm={2}></Grid>
      <Grid item xs={8} sm={6}>
        <div className="ui attached message">
          <div className="header">
            <Header as="h2">NEW ACCOUNT REGISTRATION!!</Header>
          </div>
          <p>
            <i className="hand point right icon"></i>
            Welcome to the meZocliQ Online Portal
          </p>
        </div>
      </Grid>
      <Grid item sm={3}></Grid>
      <Grid container>
        <Grid item xs={10}></Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Form
            className="ui form attached fluid segment"
            onSubmit={onRegister}
          >
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="my-input">Email Address:</InputLabel>
                <Input
                  onChange={e => onChange(e)}
                  name="email"
                  value={email}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <FormHelperText id="my-helper-text">
                  (Pls use your @mezocliq.com email address)
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="password">Password:</InputLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="password2">
                    Pls Confirm Password:
                  </InputLabel>
                  <Input
                    type="password"
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange={e => onChange(e)}
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} sm={6}>
                <div className="ui checkbox">
                  <Form.Checkbox
                    id="terms"
                    name="terms"
                    value={terms}
                    label="I agree to the Terms & Conditions"
                    onClick={toggleCheck}
                    required
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={e => onRegister(e)}
                >
                  CREATE ACCOUNT HERE!!
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className="ui bottom attached warning message">
          <i className="icon help"></i>
          Already have an account?{" "}
          <Link to="/" className="item">
            Login here
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired
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
