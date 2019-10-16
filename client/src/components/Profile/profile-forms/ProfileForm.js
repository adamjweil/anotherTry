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
    borderColor: "#3f51b5",
    boxShadow: " 0 4px 6px 0 hsla(0, 0%, 0%, 0.4)"
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
    title: "",
    middleInitial: ""
  });
  const [hireDate, changeDate] = useState(new Date());

  const { firstName, lastName, handle, team, title, middleInitial } = formData;
  formData.hireDate = hireDate;
  const classes = useStyles();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile({ formData });
  };
  useEffect(() => {
    loadCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sm={7}>
        <form className={classes.form} onSubmit={onSubmit}>
          <Paper className={classes.paper}>
            <Grid item xs={12} className={classes.message}>
              <center>
                <h2
                  style={{
                    // fontSize: "12px",
                    marginTop: "-20px",
                    marginBottom: "0px"
                  }}
                >
                  SET PROFILE UP HERE
                </h2>
              </center>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={4}>
                <FormControl style={{ marginLeft: "50px" }}>
                  <TextField
                    style={{
                      width: "150px",
                      display: "inLine"
                    }}
                    margin="normal"
                    variant="standard"
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={e => onChange(e)}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={3}>
                <FormControl
                  style={{
                    marginLeft: "60px",
                    position: "relative"
                  }}
                >
                  <TextField
                    style={{
                      width: "80px",
                      display: "inLine",
                      position: "relative"
                    }}
                    margin="normal"
                    variant="standard"
                    name="middleInitial"
                    label="Middle"
                    value={middleInitial}
                    onChange={e => onChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5}>
                <FormControl
                  style={{
                    marginLeft: "60px",
                    position: "relative"
                  }}
                >
                  <TextField
                    display="inLine"
                    style={{
                      width: "150px",
                      display: "inLine",
                      position: "relative"
                    }}
                    margin="normal"
                    variant="standard"
                    name="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={e => onChange(e)}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={3}>
                <FormControl
                  style={{
                    marginLeft: "50px",
                    position: "relative"
                  }}
                >
                  <TextField
                    style={{
                      width: "170px",
                      display: "inLine"
                    }}
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
                    marginLeft: "50px",
                    marginTop: "16px",
                    position: "relative"
                  }}
                >
                  <TextField
                    variant="filled"
                    name="hireDate"
                    value={hireDate}
                    onChange={e => onChange(e)}
                    label="Hire Date"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  style={{
                    marginLeft: "10%",
                    marginRight: "10%",
                    justifyContent: "middle",
                    position: "relative"
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
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  style={{
                    margin: "10px 50px 10px"
                  }}
                >
                  <InputLabel>Team</InputLabel>
                  <Select
                    variant="outlined"
                    style={{
                      width: "350px",
                      marginLeft: "20%",
                      marginRight: "20%"
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
                    margin: "10px 50px 10px"
                  }}
                >
                  <InputLabel>Title</InputLabel>
                  <Select
                    variant="outlined"
                    style={{
                      width: "350px",
                      marginLeft: "20%",
                      marginRight: "20%"
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
