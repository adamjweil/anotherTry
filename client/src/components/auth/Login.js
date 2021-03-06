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
    border: "1px shadow grey",
    borderRadius: "25px"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  remember: {
    margin: theme.spacing(1, 0, 1)
  },
  main: {
    width: "440px"
  },
  textFields: {
    width: "310px"
  },
  box: {
    background: "#F8F8F8",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.8)",
    borderRadius: "25px"
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
      <Box className={classes.box}>
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
              fontSize: "16px",
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
              endAdornment: (
                <InputAdornment position="end">
                  <Icon edge="start" style={{ opacity: ".7" }}>
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
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                style={{ marginTop: "-5px", marginLeft: "-10px" }}
                control={<Checkbox value="remember" color="primary" />}
                label={<p style={{ fontSize: "16px" }}>Remember me</p>}
                className={classes.remember}
              />
            </Grid>
            <Grid item sm={1}></Grid>
            <Grid
              item
              xs={12}
              sm={5}
              style={{ marginTop: "-10px", marginBottom: "10px" }}
            >
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
                <Grid item>
                  <span
                    style={{
                      display: "inLine-block",
                      textDecoration: "none",
                      textAlign: "center",
                      color: "grey",
                      fontStyle: "italic",
                      fontWeight: "400"
                    }}
                  >
                    Forgot password?
                  </span>
                </Grid>
                <Grid item>Click Here!!</Grid>
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                size="small"
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
                    color="inherit"
                    className={classes.submit}
                    style={{
                      textDecoration: "none",
                      fontSize: "11px"
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={6}>
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
