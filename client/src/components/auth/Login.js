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
  Icon,
  InputAdornment,
  makeStyles
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
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
  },
  main: {
    width: "540px"
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
        marginTop="50px"
        style={{
          // background: "#F8F8F8",
          boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
        }}
      >
        <form
          style={{ padding: "30px" }}
          className={classes.form}
          onSubmit={login}
          noValidate
        >
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <img
                style={{
                  maxWidth: "100%",
                  marginBottom: "-30px",
                  justifyContent: "center",
                  align: "center",
                  alignItems: "center",
                  textAlign: "center"
                }}
                src={process.env.PUBLIC_URL + "../../img/logo.png"}
                alt={process.env.PUBLIC_URL + "../../img/mezoLogo120px.png"}
              />

              <br />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Typography
            component="h6"
            variant="h6"
            style={{
              fontSize: "14px",
              fontWeight: "800",
              marginTop: "10px",

              marinLeft: "100px"
            }}
          >
            Login Form
          </Typography>

          <TextField
            variant="standard"
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
              endAdornment: (
                <InputAdornment position="end">
                  <Icon edge="end">
                    <EmailTwoToneIcon />
                  </Icon>
                </InputAdornment>
              )
            }}
          />

          <TextField
            margin="normal"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => onChange(e)}
            required
            fullWidth
            variant="standard"
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
            <Grid item xs={12} sm={5}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
                  renderas="button"
                  fullWidth
                  size="small"
                  variant="contained"
                  color="standard"
                  className={classes.submit}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  REGISTER
                </Button>
              </Link>
            </Grid>

            <Grid item sm={1}></Grid>

            <Grid item xs={12} sm={6} className={classes.submit}>
              <GoogleAuth />
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
  alerts: PropTypes.array.isRequired,
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
