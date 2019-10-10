import React, { useEffect, useState } from "react";
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

import { createProfile } from "../../actions/profile";
import { loadCurrentProfile } from "../../actions/profile";
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
  createProfile,
  loadCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    handle: "",
    team: "",
    title: ""
  });
  const { firstName, lastName, handle, team, title } = formData;
  const classes = useStyles();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    // e.preventDefault();
    createProfile({ formData });
  };
  useEffect(() => {
    loadCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  onChange={e => onChange(e)}
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
                  value={lastName}
                  onChange={e => onChange(e)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl>
              <TextField
                name="handle"
                label="Handle"
                value={handle}
                onChange={e => onChange(e)}
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
                onChange={e => onChange(e)}
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
                onChange={e => onChange(e)}
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
};

const mapStateToProps = state => ({
  users: Object.values(state.users),
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, loadUser, loadCurrentProfile }
)(ProfileForm);
