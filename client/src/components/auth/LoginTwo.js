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
  Typography,
  Paper,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { shadows } from "@material-ui/system";
import { login, signIn } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import GoogleAuth from "../../GoogleAuth";

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
    marginTop: theme.spacing(1),
    padding: "10px",
    border: "1px shadow gray"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
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
    <Container component="main" mixWidth="md">
      <CssBaseline />

      <Box
        marginTop="50px"
        borderLeft={1}
        borderBottom={3}
        borderRight={3}
        borderTop={1}
        borderColor="grey.400"
        style={{ background: "#F8F8F8" }}
      >
        <form
          style={{ padding: "30px" }}
          className={classes.form}
          onSubmit={e => onSubmit(e)}
          noValidate
        >
          <Typography component="h1" variant="h4" style={{ fontWeight: "100" }}>
            Log In Below
          </Typography>
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
          <Grid container>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className={classes.submit}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => onSubmit(e)}
              >
                Login
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs={5}>
                <Link href="#" variant="body2">
                  <center>
                    <p>Forgot password?</p>
                  </center>
                </Link>
              </Grid>
              <Grid item xs={7}>
                <Link href="/register" variant="body2">
                  <center>
                    <p>{"No account? Sign Up Here!"}</p>
                  </center>
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                <GoogleAuth />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { setAlert, login, signIn }
)(LoginTwo);
