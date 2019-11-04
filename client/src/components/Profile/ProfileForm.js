import React, { useState, Fragment, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import {
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Paper,
  InputAdornment,
  makeStyles,
  Typography,
  TextField,
  Select,
  FormHelperText
} from "@material-ui/core";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import {
  createProfile,
  fetchProfile,
  loadAllProfiles
} from "../../actions/profile";
import { loadUser, fetchUsers } from "../../actions/user";
import { fetchTeams } from "../../actions/team";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(1, 1, 1, 2),
    color: "#F8F8F8",
    minWidth: "990px",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.6)"
  },
  form: {
    padding: theme.spacing(5, 3, 5, 2),
    borderRadius: "5px",
    backgroundColor: "#F8F8F8",
    minWidth: "650px",
    margin: theme.spacing(0, 0, 10, 0)
  },
  textField: {
    margin: theme.spacing(1),
    maxWidth: "200px",
    backgroundColor: "white",
    color: "black"
  },
  middleInitial: {
    width: "120px",
    margin: theme.spacing(1),
    backgroundColor: "white"
  },
  submit: {
    color: "green",
    backgroundColor: "orange",
    paddingLeft: "100px",
    paddingRight: "100px",
    marginTop: theme.spacing(5)
  },
  message: {
    color: "gray",
    fontSize: "36px",
    fontWeight: "600",
    textAlign: "center",
    paddingTop: "10px"
  },
  subMessage: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#A9A9A9",
    marginBottom: "10px"
  },
  dateText: {
    margin: theme.spacing(0, 0, 2, 10)
  },
  dateHelperText: {
    fontWeight: "600",
    marginTop: "-4px"
  },
  select: {
    width: "400px",
    maxWidth: "500px"
  },

  bio: {
    backgroundColor: "white",
    margin: theme.spacing(2, 0, 0, 0)
  },
  datePicker: {
    border: "10px shadow #F8F8F8"
  }
}));

const TITLES = [
  "Intern",
  "Analyst",
  "Associate",
  "Senior Accociate",
  "Director"
];

const ProfileForm = ({
  createProfile,
  loadAllProfiles,
  fetchUsers,
  history,
  profiles,
  fetchProfile,
  profile: { profile, loading },
  fetchTeams,
  teams
}) => {
  useEffect(() => {
    fetchUsers();
    fetchTeams();
  }, [fetchUsers, fetchTeams]);

  const [formData, setFormData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    team: "",
    title: "",
    bio: "",
    skills: [],
    hireDate: new Date()
  });
  const [hireDateOrig, changeDate] = useState(formatDate(new Date()));
  const {
    firstName,
    middleInitial,
    lastName,
    skills,
    team,
    title,
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
    createProfile({ formData, history });
  };

  return loading && profile === null ? (
    <Redirect to="/dashboard" />
  ) : (
    <Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid item xs={12}>
            <Typography align="center" className={classes.message}>
              Setup YOUR Profile!
            </Typography>
            <Typography align="center" className={classes.subMessage}>
              ...you can edit/update anything after creating
            </Typography>
          </Grid>

          <form className={classes.form} onSubmit={onSubmit}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ marginLeft: "30px", marginRight: "10px" }}
              >
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

                <FormControl>
                  <TextField
                    className={classes.middleInitial}
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

                <Grid item xs={12}>
                  <FormControl
                    style={{
                      margin: "10px 8px 10px"
                    }}
                  >
                    <InputLabel>Team:</InputLabel>
                    <Select
                      variant="standard"
                      className={classes.select}
                      name="team"
                      onChange={e => onChange(e)}
                      value={team}
                    >
                      {teams.map(team => (
                        <MenuItem key={team._id} value={team}>
                          {team.teamName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    style={{
                      margin: "20px 8px 10px"
                    }}
                  >
                    <InputLabel>Title</InputLabel>
                    <Select
                      className={classes.select}
                      variant="standard"
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

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    style={{
                      maxWidth: "500px"
                    }}
                  >
                    <TextField
                      className={classes.bio}
                      fullWidth
                      name="skills"
                      value={skills}
                      onChange={e => onChange(e)}
                      placeholder="Pls enter your skills as comma seperated values (eg, html,css,config,servers.. etc)"
                      multiline={true}
                      variant="outlined"
                      rows={2}
                      rowsMax={5}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    style={{
                      maxWidth: "500px"
                    }}
                  >
                    <TextField
                      className={classes.bio}
                      fullWidth
                      name="bio"
                      value={bio}
                      onChange={e => onChange(e)}
                      placeholder="Brief Bio...  Two or three sentences is fine..."
                      multiline={true}
                      variant="outlined"
                      rows={5}
                      rowsMax={10}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={5}>
                <FormControl>
                  <TextField
                    className={classes.dateText}
                    variant="standard"
                    helperText=<FormHelperText
                      className={classes.dateHelperText}
                      error={true}
                      component="span"
                    >
                      (Select the date from the calendar chooser below!)
                    </FormHelperText>
                    name="hireDate"
                    value={hireDateOrig}
                    onChange={e => onChange(e)}
                    label="Hire Date"
                  />
                </FormControl>
                <center>
                  <FormControl>
                    <DatePicker
                      className={classes.datePicker}
                      variant="static"
                      disabled
                      autoOk
                      orientation="landscape"
                      openTo="date"
                      value={hireDateOrig}
                      onChange={e => changeDate(e)}
                      name="hireDate"
                    />
                  </FormControl>
                </center>
                <center>
                  <FormControl>
                    <Button
                      className={classes.submit}
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      <SaveAltIcon style={{ marginRight: "10px" }} /> Submit
                    </Button>
                  </FormControl>
                </center>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  user: state.auth.user,
  profile: state.profile.profile,
  profiles: Object.values(state.profile.profiles),
  teams: Object.values(state.team.teams)
});

export default connect(
  mapStateToProps,
  {
    createProfile,
    loadUser,
    fetchProfile,
    fetchUsers,
    loadAllProfiles,
    fetchTeams
  }
)(withRouter(ProfileForm));
