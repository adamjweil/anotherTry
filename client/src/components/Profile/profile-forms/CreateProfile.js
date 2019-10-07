import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";
import { withRouter } from "react-router-dom";

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

const CreateProfile = ({ users, values, handleChange }) => {
  const onSubmit = e => {
    e.preventDefault();
    createProfile(this.props.values);
  };

  return (
    <Fragment>
      <center>
        <Grid item xs={12}>
          <h3>Create Profile Below</h3>
        </Grid>
      </center>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <TextField
              name="firstName"
              label="First Name"
              onChange={handleChange("firstName")}
              fullWidth
              defaultValue={values.firstName}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl>
            <TextField
              name="lastName"
              label="Last Name"
              onChange={handleChange("lastName")}
              fullWidth
              defaultValue={values.lastName}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl>
            <TextField
              name="handle"
              label="Handle"
              onChange={handleChange("handle")}
              fullWidth
              defaultValue={values.handle}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Team</InputLabel>
            <Select
              name="team"
              value={values.team}
              onChange={handleChange("team")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {TEAMS.map(team => (
                <MenuItem value={team}>{team}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Title</InputLabel>
            <Select
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
          <Button color="primary" onSubmit={onSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: Object.values(state.users),
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
