import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  IconButton,
  Divider,
  Icon,
  InputAdornment,
  makeStyles
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
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
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    maxWidth: "100%",
    alignItems: "center"
  },
  form: {
    width: "100%",
    margin: theme.spacing(1, 0, 1, 0),
    padding: "30px",
    border: "1px shadow grey"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  remember: {
    margin: theme.spacing(1, 0, 1)
  },
  main: {
    width: "540px"
  },
  textFields: {
    width: "375px",
    marginLeft: "20px"
  }
}));

const Login = ({ showLoginOrRegister, isAuthenticated, login, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const classes = useStyles();
  const { email, password } = formData;
  const { showPassword } = values;

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = e => {
    e.preventDefault();
  };
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container component="main" maxWidth="md" className={classes.main}>
      <CssBaseline />
      <Box
        marginTop="40px"
        style={{
          background: "#F8F8F8",
          boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
        }}
      >
        <form className={classes.form} onSubmit={login} noValidate>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <img
                className={classes.avatar}
                src={process.env.PUBLIC_URL + "../../img/logo.png"}
                alt={process.env.PUBLIC_URL + "../../img/mezoLogo120px.png"}
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Divider
              style={{ color: "gray", margin: "auto", width: "225px" }}
            />
          </Grid>
          <Typography
            component="h6"
            color="primary"
            style={{
              fontWeight: "800",
              marinLeft: "100px",
              marginTop: "5px"
            }}
          >
            Login Form
          </Typography>

          <TextField
            name="email"
            id="email"
            className={classes.textFields}
            value={email}
            label="Email Address"
            variant="outlined"
            margin="normal"
            onChange={e => onChange(e)}
            required
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon edge="end" style={{ opacity: ".7" }}>
                    <AlternateEmailOutlinedIcon />
                  </Icon>
                </InputAdornment>
              )
            }}
          />

          <TextField
            name="password"
            className={classes.textFields}
            value={password}
            label="Password"
            required
            margin="normal"
            type={showPassword ? "text" : "password"}
            onChange={e => onChange(e)}
            variant="outlined"
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

          <Grid container>
            <Grid item>
              <FormControlLabel
                style={{ fontSize: "5px" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className={classes.remember}
              />

              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "blue",
                  align: "middle",
                  marginLeft: "50px"
                }}
              >
                <span
                  style={{
                    display: "inLine",
                    textDecoration: "none",
                    color: "grey",
                    fontStyle: "italic",
                    fontWeight: "400"
                  }}
                >
                  Forgot password?{" "}
                </span>
                Click Here!!
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Login
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    renderas="button"
                    fullWidth
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.submit}
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={2}></Grid>
              <Grid item xs={12} sm={5}>
                <GoogleAuth />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  alerts: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  alerts: state.alert,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setAlert, login, signIn }
)(Login);
