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
  Typography,
  Paper
} from "@material-ui/core";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

import { updateProfile, createProfile } from "../../actions/profile";
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
    border: "1px shadow",
    borderColor: "#3f51b5"
  },
  message: {
    borderBottom: "3px solid #3f51b5"
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

const ProfileForm = ({
  handleSubmitProfile,
  values,
  createProfile,
  handleSubmit,
  handleChange
}) => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   handle: "",
  //   team: "",
  //   title: ""
  // });
  const classes = useStyles();

  const onSubmit = async e => {
    const { firstName, lastName, handle, team, title } = values;
    e.preventDefault();
    createProfile(firstName, lastName, handle, team, title);
  };

  return (
    <Grid container>
      <Form className={classes.form} onSubmit={e => handleSubmitProfile(e)}>
        <Paper className={classes.paper}>
          <Grid item xs={12} className={classes.message}>
            <center>
              <h2>Welcome to Online Portal!</h2>
            </center>
            <center>
              <h4
                style={{
                  fontSize: "12px",
                  marginTop: "-20px",
                  marginBottom: "0px"
                }}
              >
                Set Up Profile Below
              </h4>
            </center>
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
                  <MenuItem key={team} value={team}>
                    {team}
                  </MenuItem>
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
                  <MenuItem key={title} value={title}>
                    {title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <Button
              // fullWidth
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmitProfile}
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
  users: PropTypes.array.isRequired,
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
