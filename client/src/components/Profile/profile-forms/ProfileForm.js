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
  Paper,
  InputAdornment
} from "@material-ui/core";
import PropTypes from "prop-types";
import SaveIcon from "@material-ui/icons/Save";
import clsx from "clsx";
import { DatePicker } from "@material-ui/pickers";
import { createProfile } from "../../../actions/profile";
import { loadCurrentProfile } from "../../../actions/profile";
import { loadUser } from "../../../actions/user";
import Divider from "@material-ui/core/Divider";
import { Router as browserHistory } from "react-router-dom";
import { push } from "react-router-redux";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: ""
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // width: "100%"
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
    width: "700px",
    minWidth: "700px",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    boxShadow: " 0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
  },
  message: {
    // borderBottom: "3px solid #3f51b5"
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 200
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
    bio: ""
  });
  const [hireDate, changeDate] = useState(new Date());

  const {
    firstName,
    lastName,
    handle,
    team,
    title,
    middleInitial,
    bio
  } = formData;
  formData.hireDate = hireDate;
  const classes = useStyles();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile({ formData });
  };
  // useEffect(() => {
  //   loadCurrentProfile();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Grid container>
      <Grid item xs={12} sm={7}>
        <form className={classes.form} onSubmit={onSubmit}>
          <Paper className={classes.paper}>
            <Grid item xs={12} className={classes.message}>
              <center>
                <h2>SET PROFILE UP HERE</h2>
              </center>
              <Divider fullWidth style={{ margin: "auto", width: "425px" }} />
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={4}>
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
                        <InputAdornment position="start"></InputAdornment>
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
                    name="middleInitial"
                    label="Middle Name"
                    value={middleInitial}
                    onChange={e => onChange(e)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
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
                        <InputAdornment position="start"></InputAdornment>
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
                      width: "350px",
                      marginTop: "16px"
                    }}
                  >
                    <TextField
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
                    marginLeft: "10%",
                    marginRight: "10%",
                    justifyContent: "middle",
                    position: "relative",
                    border: "2px solid grey"
                  }}
                >
                  <DatePicker
                    variant="static"
                    autoOk
                    orientation="landscape"
                    varient="static"
                    openTo="date"
                    value={hireDate}
                    onChange={changeDate}
                    style={{}}
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
                style={{
                  margin: "10px 100px 10px",
                  width: "500px",
                  marginLeft: "50px"
                }}
              >
                <TextField
                  fullWidth
                  name="bio"
                  value={bio}
                  onChange={e => onChange(e)}
                  placeholder="Two or three sentence brief bio"
                  multiline={true}
                  variant="outlined"
                  rows={5}
                  rowsMax={10}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}></Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="small"
                className={classes.submit}
              >
                <SaveIcon
                  className={clsx(classes.leftIcon, classes.iconSmall)}
                />
                Save
              </Button>
            </Grid>
          </Paper>
        </form>
      </Grid>
      //{" "}
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
