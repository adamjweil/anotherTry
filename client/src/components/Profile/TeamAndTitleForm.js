import React, { useState, Fragment, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Select, MenuItem, FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user";

const TeamAndTitleForm = ({ createProfile, fetchUsers, users }) => {
  const [formData, setFormData] = useState(
    {
      team: "",
      title: "",
      reportingTo: [],
      directReports: []
    },
    []
  );
  useEffect(() => {
    fetchUsers();
  }, []);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { team, title, reportingTo, directReports } = formData;

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

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Team & Title
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="team"
            name="team"
            label="team"
            value={team}
            onChange={e => onChange(e)}
            fullWidth
            autoComplete="team"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={title}
            onChange={e => onChange(e)}
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="reportingTo"
            name="reportingTo"
            label="Reporting Into:"
            value={reportingTo}
            onChange={e => onChange(e)}
            fullWidth
            autoComplete="reportingTo"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <Select
              name="reportingTo"
              id="reportingTo"
              style={{ width: "200px" }}
            >
              {users &&
                users.email.map(user => (
                  <MenuItem
                    primaryText={user.email}
                    key={user.email}
                    value={user.email}
                  />
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(TeamAndTitleForm);
