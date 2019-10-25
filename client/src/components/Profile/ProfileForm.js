import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  InputAdornment,
  makeStyles,
  Divider,
  Typography,
  TextField,
  Select,
  Container
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
    color: "#F8F8F8"
  },
  paper: {
    margin: theme.spacing(1, 1, 1, 2),
    alignItems: "center",
    color: "#F8F8F8",
    borderRadius: "5px"
  },
  form: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    backgroundColor: "#F8F8F8",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.6)"
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
  },
  inputLabel: {
    marginRight: "20px"
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
    let options = { year: "numeric", month: "long", day: "numeric" };
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
    <Container className={classes.root}>
      <Grid item xs={12} className={classes.message}>
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          Set up a Profile!
        </Typography>

        <center>
          <Divider
            style={{
              height: "3px",
              width: "425px"
            }}
          />
        </center>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <form className={classes.form} onSubmit={onSubmit}>
            <Grid item xs={5} sm={3}>
              <FormControl>
                <TextField
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
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

            <Grid item xs={5} sm={3}>
              <FormControl>
                <TextField
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
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

            <Grid item xs={5} sm={3}>
              <FormControl>
                <TextField
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
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

            <Grid item xs={12} sm={4}>
              <FormControl>
                <TextField
                  label="Handle"
                  name="handle"
                  margin="normal"
                  variant="outlined"
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

            <Grid item xs={12} sm={7}>
              <FormControl>
                <TextField
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
          </form>
        </Grid>
      </Grid>
    </Container>
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
