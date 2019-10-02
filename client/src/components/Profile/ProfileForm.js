import React from "react";
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
  Paper
} from "@material-ui/core";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";
import SaveIcon from "@material-ui/icons/Save";
import clsx from "clsx";

import { updateProfile, createProfile } from "../../actions/profile";
import { getCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";

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
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
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
  values,
  firstName,
  lastName,
  handle,
  team,
  title,
  createProfile,
  handleSubmit,
  handleChange
}) => {
  const classes = useStyles();

  const onSubmit = async dispatch => {
    // console.log(values);
    // e.preventDefault();
    createProfile({ firstName, lastName, handle, team, title });
  };

  return (
    <Grid container>
      <Form className={classes.form} onSubmit={onSubmit}>
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
                  margin="normal"
                  variant="outlined"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handleChange("firstName")}
                />
              </FormControl>
            </Grid>
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={5}>
              <FormControl>
                <TextField
                  style={{ marginRight: "10px" }}
                  margin="normal"
                  variant="outlined"
                  name="lastName"
                  label="Last Name"
                  onChange={handleChange("lastName")}
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
              <InputLabel> Team</InputLabel>
              <Select
                style={{ width: "350px" }}
                name="team"
                onChange={handleChange("team")}
                value={team}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

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
                style={{ width: "350px" }}
                name="title"
                onChange={handleChange("title")}
                value={title}
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
              type="submit"
              variant="contained"
              size="small"
              className={classes.submit}
            >
              <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
              Save
            </Button>
          </Grid>
        </Paper>
      </Form>
    </Grid>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: Object.values(state.users),
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, updateProfile, loadUser, getCurrentProfile }
)(ProfileForm);
