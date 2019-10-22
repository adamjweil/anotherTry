import React, { useState } from "react";
import { withRouter, Router as browserHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Paper,
  InputAdornment,
  makeStyles,
  Divider
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import PropTypes from "prop-types";
import clsx from "clsx";
import { DatePicker } from "@material-ui/pickers";
import { createProfile, loadCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";
import { push } from "react-router-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: "",
    color: "#F8F8F8"
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
    minWidth: "800px",
    margin: theme.spacing(2, 3, 1, 3),
    padding: theme.spacing(2, 5, 5),
    backgroundColor: "#424242",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  textField: {
    margin: theme.spacing(1, 2, 0)
  },
  date: {
    marginLeft: theme.spacing(3),
    width: 350
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
    title: "",
    middleInitial: "",
    bio: "",
    hireDate: new Date()
  });
  const [hireDate, changeDate] = useState(formatDate(new Date()));

  const {
    firstName,
    lastName,
    handle,
    team,
    title,
    middleInitial,
    bio
  } = formData;

  // formData.hireDate = hireDate;
  const classes = useStyles();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  const onSubmit = e => {
    e.preventDefault();
    createProfile({ formData, history });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <form className={classes.form} onSubmit={onSubmit}>
          <Paper className={classes.paper}>
            <Grid item xs={12} className={classes.message}>
              <center>
                <h2>Create Profile Below</h2>
              </center>
              <Divider style={{ margin: "auto", width: "425px" }} />
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <FormControl>
                  <TextField
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    id="standard-name"
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={e => onChange(e)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{""}</InputAdornment>
                      )
                    }}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={5}>
                <FormControl>
                  <TextField
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    name="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={e => onChange(e)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{""}</InputAdornment>
                      )
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl>
                  <TextField
                    style={{ width: "100px", marginLeft: "-20px" }}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    name="middleInitial"
                    label="Middle Initial"
                    value={middleInitial}
                    onChange={e => onChange(e)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{""}</InputAdornment>
                      )
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid container style={{ marginTop: "20px" }}>
                <Grid item xs={12} sm={3}>
                  <FormControl>
                    <TextField
                      className={classes.textField}
                      label="Handle"
                      name="handle"
                      margin="normal"
                      variant="filled"
                      value={handle}
                      onChange={e => onChange(e)}
                      helperText="What do you go by?"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">@</InputAdornment>
                        )
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item sm={2}></Grid>
                <Grid item xs={12} sm={7}>
                  <FormControl
                    style={{
                      marginTop: "16px"
                    }}
                  >
                    <TextField
                      className={classes.date}
                      helperText="Select the date from the calendar chooser below!"
                      variant="filled"
                      name="hireDate"
                      value={hireDate}
                      onChange={e => onChange(e)}
                      label="Hire Date"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  style={{
                    marginTop: "20px",
                    marginBottom: "15px",
                    marginLeft: "20%",
                    marginRight: "20%",

                    justifyContent: "middle",
                    position: "relative",
                    boxShadow: " 0 4px 6px 0 hsla(0, 5%, 5%, 0.6)"
                  }}
                >
                  <DatePicker
                    variant="static"
                    autoOk
                    orientation="landscape"
                    varient="static"
                    openTo="date"
                    value={hireDate}
                    onChange={e => changeDate(e)}
                    name="hireDate"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  style={{
                    margin: "10px 100px 10px"
                  }}
                >
                  <InputLabel>Team</InputLabel>
                  <Select
                    variant="standard"
                    style={{
                      width: "400px",
                      marginLeft: "50px"
                    }}
                    name="team"
                    onChange={e => onChange(e)}
                    value={team}
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
                    margin: "10px 100px 10px"
                  }}
                >
                  <InputLabel>Title</InputLabel>
                  <Select
                    variant="standard"
                    style={{
                      width: "400px",
                      marginLeft: "50px"
                    }}
                    name="title"
                    onChange={e => onChange(e)}
                    value={title}
                  >
                    {TITLES.map(title => (
                      <MenuItem key={title} value={title}>
                        {title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <FormControl
                fullWidth
                style={{
                  width: "550px"
                }}
              >
                <InputLabel>Brief Bio:</InputLabel>
                <TextField
                  fullWidth
                  name="bio"
                  value={bio}
                  onChange={e => onChange(e)}
                  placeholder="Two or three sentences is fine..."
                  multiline={true}
                  variant="outlined"
                  style={{ marginTop: "50px" }}
                  rows={5}
                  rowsMax={10}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}></Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                style={{ marginTop: "10px", marginBottom: "10px" }}
                variant="contained"
                color="primary"
                size="medium"
              >
                <SaveIcon style={{ marginRight: "5px" }} /> Save
              </Button>
            </Grid>
          </Paper>
        </form>
      </Grid>
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
)(withRouter(ProfileForm));
