import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
  Header
} from "semantic-ui-react";
// Redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { signIn, login } from "../../actions/auth";
// Local Imports
import GoogleAuth from "../../GoogleAuth";

const Login = ({ login, isAuthenticated, setAlert, signIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect push to="/dashboard" />;
  }

  return (
    <Grid centered columns={1} style={{ paddingRight: "30px" }}>
      <Grid.Column>
        <Segment>
          <center>
            <Header as="h3">
              Already Have An Account?
              <Header as="h5" style={{ fontWeight: "300" }}>
                Sign in Below!
              </Header>
            </Header>
          </center>
          <Form size="small" onSubmit={e => onSubmit(e)}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={e => onChange(e)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              placeholder="Email a password"
              value={password}
              onChange={e => onChange(e)}
            />
            <Grid columns={2}>
              <Grid.Column>
                <Button
                  color="blue"
                  fluid
                  size="small"
                  style={{ marginBottom: "5px" }}
                >
                  Login
                </Button>
              </Grid.Column>
              <Grid.Column>
                <GoogleAuth />
              </Grid.Column>
            </Grid>
          </Form>
        </Segment>
        <Message className="ui yellow message" style={{ textAlign: "center" }}>
          <Grid>
            <div className="header">
              Not registered yet? Create your accunt now!
            </div>

            <Button
              color="positive"
              size="tiny"
              style={{
                marginLeft: "10px",
                borderRadius: "20px",
                display: "inLine"
              }}
            >
              <Link to="/register" style={{ color: "white" }}>
                Sign up here . . .
              </Link>
            </Button>

            <p>
              Whether you're a new employee, or just setting up an account on
              our online portal
            </p>
          </Grid>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.auth,
  signIn: state.auth,
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { setAlert, login, signIn }
)(Login);
