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
  InputAdornment,
  IconButton,
  Icon,
  Divider
} from "@material-ui/core";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login, register, toggleCheck } from "../../actions/auth";
import {
  showInfoSnackbar,
  showErrorSnackbar,
  showSuccessSnackbar
} from "../../actions/alert";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    margin: theme.spacing(5, 0, 1, 0),
    padding: "30px",
    marginTop: "140px"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  remember: {
    margin: theme.spacing(1, 0, 1)
  },
  main: {
    width: "600px",
    flexGrow: 1
  },
  box: {
    background: "#F8F8F8",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.8)",
    borderRadius: "25px"
  }
}));

const Register = ({ setAlert, register, isAuthenticated, toggleCheck }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
    terms: true
  });
  const [values, setValues] = React.useState({
    showPassword: false
  });
  const classes = useStyles();
  const { email, password, password2, terms, username } = formData;
  const { showPassword } = values;

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onRegister = async e => {
    e.preventDefault();
    if (password !== password2) {
      showInfoSnackbar("Passwords do not match");
    } else if (terms !== true) {
      showErrorSnackbar("Please read and agree to our Terms and Conditions");
    } else {
      try {
        await register({ email, username, terms, password });
      } catch (err) {
        showErrorSnackbar("Check Console...");
        console.log(err);
      }
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect push to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="md" className={classes.main}>
      <CssBaseline />
      <Box className={classes.box}>
        <form className={classes.form} onSubmit={onRegister}>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <img
                style={{
                  maxWidth: "300px"
                }}
                src={process.env.PUBLIC_URL + "/img/mezologo1.png"}
                alt={process.env.PUBLIC_URL + "/img/mezologo1.png"}
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Divider
              style={{ color: "gray", margin: "auto", width: "300px" }}
            />
          </Grid>

          <Typography
            component="h6"
            variant="h6"
            color="primary"
            style={{
              fontSize: "18px",
              fontWeight: "800",
              marginTop: "5px",
              marginBottom: "-5x"
            }}
          >
            Registration Form
          </Typography>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                variant="outlined"
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
                fullWidth
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon edge="end" style={{ opacity: ".5" }}>
                        <AlternateEmailOutlinedIcon />
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                autoFocus
                variant="filled"
                margin="normal"
                label="What do you go by?"
                id="username"
                name="username"
                value={username}
                onChange={e => onChange(e)}
                helperText="(For ex... #ajweil)"
                style={{ marginTop: "20px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <h4
                        style={{
                          opacity: ".5",
                          color: "gray",
                          fontSize: "24px"
                        }}
                      >
                        #
                      </h4>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                name="password"
                id="password"
                value={password}
                label="Password"
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type={showPassword ? "text" : "password"}
                onChange={e => onChange(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                name="password2"
                id="password2"
                value={password2}
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                type={showPassword ? "text" : "password"}
                onChange={e => onChange(e)}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {" "}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    onClick={toggleCheck}
                    value={terms}
                    color="default"
                  />
                }
                label="I agree to the Terms & Conditions"
                className={classes.remember}
              />
            </Grid>

            <Grid item sm={1}></Grid>
            <Grid item xs={12} sm={10}>
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
        </form>

        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              marginBottom: "20px",
              padding: "0% 0% 0%",
              marginTop: "-30px"
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                renderas="button"
                size="small"
                color="secondary"
                className={classes.submit}
                style={{
                  textDecoration: "none",
                  borderRadius: "20px",
                  height: "40px",
                  alignItems: "center",
                  padding: "10px 20px 20px 10px"
                }}
              >
                <Icon
                  style={{
                    marginRight: "15px"
                  }}
                >
                  <UndoOutlinedIcon />
                </Icon>
                <p style={{ margin: "0px", fontWeight: "700" }}>
                  Back To Login
                </p>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  toggleCheck: PropTypes.func.isRequired,
  showSuccessSnackbar: PropTypes.func.isRequired,
  showErrorSnackbar: PropTypes.func.isRequired,
  showInfoSnackbar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    login,
    register,
    toggleCheck,
    showSuccessSnackbar,
    showErrorSnackbar,
    showInfoSnackbar
  }
)(Register);
