import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register, toggleCheck } from "../../actions/auth";
import { loadUser } from "../../actions/user";
import {
  showInfoSnackbar,
  showErrorSnackbar,
  showSuccessSnackbar
} from "../../actions/alert";
// import { register, toggleCheck } from "../../actions/auth";
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
    width: "100%",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: "10px",
    border: "1px shadow gray"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  remember: {
    margin: theme.spacing(1, 0, 1)
  }
}));

const RegisterForm = ({
  register,
  isAuthenticated,
  toggleCheck,
  showInfoSnackbar,
  showErrorSnackbar,
  showSuccessSnackbar
}) => {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      password2: "",
      terms: true
    },
    []
  );
  const classes = useStyles();
  const { email, password, password2, terms } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onRegister = async formData => {
    try {
      if (password !== password2) {
        showInfoSnackbar("Passwords do not match");
      }
      if (terms) {
        showErrorSnackbar("Please read and agree to our Terms and Conditions");
      }
      register({ email, terms, password });
      loadUser();
    } catch (err) {
      showErrorSnackbar(err.msg);
    }
    if (isAuthenticated) {
      return <Redirect push to="/profile" />;
    }
    showSuccessSnackbar("Successfully Registered!");
  };

  const onCheck = e => {
    // e.preventDeault();
    toggleCheck(e);
  };

  // Redirect if logged in

  return (
    <Container>
      <CssBaseline />
      <Box
        marginTop="50px"
        borderLeft={1}
        borderBottom={3}
        borderRight={3}
        borderTop={1}
        borderColor="grey.400"
        style={{ background: "#F8F8F8", minWidth: "600px" }}
      >
        <Form
          style={{ padding: "30px" }}
          className={classes.form}
          onSubmit={onRegister}
        >
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <img
                style={{
                  maxWidth: "80%",
                  marginBottom: "-30px",
                  justifyContent: "center",
                  align: "center",
                  alignItems: "center"
                }}
                src={process.env.PUBLIC_URL + "/img/mezologo1.png"}
                alt=""
              />
              <center>
                <h3>Online Portal</h3>
              </center>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Typography
            component="h6"
            variant="h6"
            style={{ fontSize: "24px", fontWeight: "800", marginTop: "-10px" }}
          >
            Registration Form:
          </Typography>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                // variant="outlined"
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} md={4}>
              <TextField
                // variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => onChange(e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}></Grid>

            <Grid item xs={10} md={4}>
              <TextField
                // variant="outlined"
                margin="normal"
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                value={password2}
                onChange={e => onChange(e)}
                required
                fullWidth
              />

              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      onChange={e => onChange(e)}
                      value={terms}
                      onCl
                      color="primary"
                    />
                  }
                  label="I agree to the Terms & Conditions"
                  className={classes.remember}
                />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item sm={1}></Grid>
            <Grid item xs={12} sm={5}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                REGISTER
              </Button>
            </Grid>
          </Grid>
        </Form>

        <Grid container>
          <Grid item sm={1}></Grid>

          <Grid
            item
            xs={12}
            sm={6}
            style={{ marginBottom: "20px", padding: "0% 0% 0%" }}
          >
            <center>
              <GoogleAuth />
            </center>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    register,
    toggleCheck,
    showSuccessSnackbar,
    showErrorSnackbar,
    showInfoSnackbar
  }
)(RegisterForm);
