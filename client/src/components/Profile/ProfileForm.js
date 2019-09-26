import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Container,
  Paper
} from "@material-ui/core";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

import { createProfile } from "../../actions/profile";
import { getCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";
import {
  showInfoSnackbar,
  showErrorSnackbar,
  showSuccessSnackbar
} from "../../actions/alert";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    padding: "10px 10px 10px",
    border: "1px shadow gray"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  }
}));

const TEAMS = [
  "LogiQ",
  "Dev - Backend",
  "Dev - Frontend",
  "Integration",
  "Project Management",
  "Tech Experts",
  "Ops"
];

const TITLES = [
  "Intern",
  "Analyst",
  "Associate",
  "Senior Accociate",
  "Director"
];

const ProfileForm = ({ values, createProfile, handleSubmit, handleChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    handle: "",
    team: "",
    title: ""
  });
  const classes = useStyles();
  const { firstName, lastName, handle, team, title } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createProfile(firstName, lastName, handle, team, title);
  };

  const onProfileSubmit = async e => {
    e.preventDefault();
    try {
      createProfile({ firstName, lastName, handle, team, title });
      console.log({ firstName, lastName, handle, team, title });
    } catch (err) {
      console.log(err);
    }
  };

  const onProfileSub = async e => {
    e.preventDefault();
    try {
      createProfile(values);
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid container>
      <Form className={classes.form}>
        <Paper className={classes.paper}>
          <Grid item xs={12}>
            <h2> Set Up Your Profile Here!</h2>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <FormControl style={{ marginLeft: "20px" }}>
                <TextField
                  name="firstName"
                  label="First Name"
                  onChange={handleChange("firstName")}
                  // defaultValue={values.firstName}
                />
              </FormControl>
            </Grid>
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={5}>
              <FormControl>
                <TextField
                  name="lastName"
                  label="Last Name"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl>
              <TextField
                name="handle"
                label="Handle"
                onChange={handleChange("handle")}
                defaultValue={values.handle}
                helperText="What do you go by?"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <FormControl
              style={{
                alignItems: "center",
                margin: "10px 10px 10px"
              }}
            >
              <InputLabel>Team</InputLabel>
              <Select
                // variant="outlined"
                style={{ width: "350px" }}
                name="team"
                value={values.team}
                onChange={handleChange("team")}
              >
                {TEAMS.map(team => (
                  <MenuItem value={team}>{team}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              style={{
                alignItems: "center",
                margin: "10px 10px 10px"
              }}
            >
              <InputLabel>Title</InputLabel>
              <Select
                // variant="outlined"
                style={{ width: "350px" }}
                name="title"
                value={values.title}
                onChange={handleChange("title")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {TITLES.map(title => (
                  <MenuItem value={title}>{title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <Button
              onClick={onSubmit}
              type="submit"
              // fullWidth
              size="small"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SUBMIT
            </Button>
          </Grid>
        </Paper>
      </Form>
    </Grid>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: Object.values(state.users),
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile }
)(ProfileForm);
