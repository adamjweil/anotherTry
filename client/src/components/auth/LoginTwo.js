import React, { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { setAlert } from "../../actions/alert";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginTwo = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const classes = useStyles();
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect push to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In Below
        </Typography>
        <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            autoComplete="email"
            required
            fullWidth
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={e => onChange(e)}
            autoComplete="current-password"
            required
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.auth,
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { setAlert, login }
)(LoginTwo);
