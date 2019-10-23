import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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
import { DatePicker } from "@material-ui/pickers";
import {
  createProfile,
  loadCurrentProfile,
  fetchProfile
} from "../../actions/profile";
import { loadUser } from "../../actions/user";
// import { push } from "react-router-redux";
// import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: "",
    color: "#F8F8F8"
  },
  paper: {
    margin: theme.spacing(1, 1, 1, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#F8F8F8",
    borderRadius: "20px"
  },
  form: {
    minWidth: "800px",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: "#424242",
    color: "#F8F8F8",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
  },
  submit: {
    margin: theme.spacing(3, 0, 3)
  },
  textField: {
    margin: theme.spacing(1)
  },
  date: {
    marginLeft: theme.spacing(3),
    width: 350
  },
  message: {
    color: "gray",
    fontSize: "26px",
    marginBottom: "-10px"
  },
  datePicker: {
    alignItems: "center",
    marginLeft: "500px"
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
  fetchProfiles,
  history,
  profiles
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
  const [hireDateOrig, changeDate] = useState(formatDate(new Date()));
  const {
    firstName,
    lastName,
    handle,
    team,
    title,
    middleInitial,
    bio
  } = formData;

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  formData.hireDate = formatDate(hireDateOrig);
  const classes = useStyles();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <form className={classes.form} onSubmit={onSubmit}>
          <Paper className={classes.paper}>
            <Grid item xs={12} className={classes.message}>
              <center>
                <h2>Create Profile Below</h2>
                <Divider
                  style={{
                    marginBottom: "20px",
                    marginTop: "-30px",
                    width: "425px"
                  }}
                />
              </center>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <FormControl>
                  <TextField
                    className={classes.textField}
                    style={{ marginLeft: "50px" }}
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

              <Grid item xs={12} sm={4}>
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

              <Grid item xs={12} sm={3}>
                <FormControl>
                  <TextField
                    // style={{ width: "100px", marginLeft: "-20px" }}
                    className={classes.textField}
                    style={{ marginRight: "40px" }}
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
            </Grid>
            <Grid container style={{ marginTop: "30px" }}>
              <Grid item xs={12} sm={4}>
                <FormControl>
                  <TextField
                    className={classes.textField}
                    style={{ marginLeft: "50px" }}
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
              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={7}>
                <FormControl>
                  <TextField
                    className={classes.textField}
                    helperText="Select the date from the calendar chooser below!"
                    variant="filled"
                    name="hireDate"
                    value={hireDateOrig}
                    onChange={e => onChange(e)}
                    label="Hire Date"
                  />
                </FormControl>
                <Grid item sm={2}></Grid>
              </Grid>

              <Grid container>
                <Grid item xs={0} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                  <FormControl
                    style={{
                      justifyContent: "middle",
                      position: "relative",
                      boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.6)",
                      marginTop: "30px"
                    }}
                  >
                    <center>
                      <DatePicker
                        variant="static"
                        autoOk
                        orientation="landscape"
                        openTo="date"
                        value={hireDateOrig}
                        onChange={e => changeDate(e)}
                        name="hireDate"
                      />
                    </center>
                  </FormControl>
                </Grid>
                <Grid item xs={0} sm={2}></Grid>
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
                className={classes.submit}
                type="submit"
                variant="contained"
                color="primary"
                size="large"
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
  users: state.users,
  user: state.auth.user,
  profile: state.profile.profile,
  profiles: Object.values(state.profile.profiles)
});

export default connect(
  mapStateToProps,
  { createProfile, loadUser, loadCurrentProfile, fetchProfile }
)(withRouter(ProfileForm));
