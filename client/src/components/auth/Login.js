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
  IconButton,
  Icon,
  InputAdornment,
  makeStyles
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        marginTop="50px"
        borderLeft={1}
        borderBottom={3}
        borderRight={3}
        borderTop={1}
        borderColor="grey.400"
        style={{ background: "#F8F8F8", minWidth: "540px" }}
      >
        <form
          style={{ padding: "30px" }}
          className={classes.form}
          onSubmit={e => onSubmit(e)}
          noValidate
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
                src={process.env.PUBLIC_URL + "../../img/logo.png"}
                alt={process.env.PUBLIC_URL + "../../img/mezoLogo120px.png"}
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
            style={{ fontSize: "14px", fontWeight: "800", marginTop: "-10px" }}
          >
            Log In Below:
          </Typography>
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
            <Grid item sm={6}>
              <FormControlLabel
                style={{ fontSize: "80px" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className={classes.remember}
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12} sm={5}>
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
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={5}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
                  renderAs="button"
                  fullWidth
                  size="large"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  REGISTER
                </Button>
              </Link>
            </Grid>

            <Grid item xs={7}>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "grey",
                  marginLeft: "10px"
                }}
              >
                Forgot password? Click Here!!
              </Link>
            </Grid>
            <Grid item sm={5}>
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
