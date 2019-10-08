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
  Icon
} from "@material-ui/core";
import { Link } from "react-router-dom";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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

const Register = ({
  login,
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
  const [values, setValues] = React.useState({
    showPassword: false
  });
  const classes = useStyles();
  const { email, password, password2, terms } = formData;
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
        await register({ email, terms, password });
      } catch (err) {
        showErrorSnackbar(err.msg);
        console.log(err);
      }
    }
  };

  const onCheck = e => {
    toggleCheck(e);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect push to="/profile" />;
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />

      <Grid item sm={12} md={6}></Grid>
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
          <Grid item xs={12}>
            <center>
              <img
                style={{
                  justifyContent: "center",
                  align: "center",
                  alignItems: "center",
                  width: "50%"
                }}
                src={process.env.PUBLIC_URL + "/img/mezologo1.png"}
                alt=""
              />
            </center>
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Typography
            component="h6"
            variant="h6"
            style={{
              fontSize: "14px",
              fontWeight: "800",
              marginTop: "-10px"
            }}
          >
            Registration Form:
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
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon edge="end">
                        <EmailTwoToneIcon />
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} md={4}>
              <TextField
                variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
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

            <Grid item xs={1}></Grid>

            <Grid item xs={10} md={4}>
              <TextField
                variant="outlined"
                margin="normal"
                name="password2"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
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
              <Grid item xs={11}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      onClick={e => onCheck(e)}
                      value={terms}
                      color="primary"
                    />
                  }
                  label="I agree to the Terms & Conditions"
                  className={classes.remember}
                />
              </Grid>

              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={4}>
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
          </Grid>
        </Form>

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
                  borderRadius: "20px"
                }}
              >
                <img
                  style={{
                    justifyContent: "center",
                    align: "center",
                    alignItems: "center",
                    height: "20px",
                    width: "20px"
                  }}
                  color="secondary"
                  src={
                    process.env.PUBLIC_URL + "/img/arrow_back_grey_192x192.png"
                  }
                  alt=""
                />
                Go Back To Login
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
