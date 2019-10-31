import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  FormControl,
  // InputLabel,
  Button,
  Paper,
  InputAdornment,
  makeStyles,
  Typography,
  TextField
} from "@material-ui/core";
import PropTypes from "prop-types";
import { createTeam, fetchTeams } from "../../actions/team";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2, 0, 10, 0),
    color: "#F8F8F8",
    boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.8)"
  },
  form: {
    padding: theme.spacing(2, 3, 2, 3),
    borderRadius: "5px",
    backgroundColor: "#F8F8F8"
  },
  description: {
    maxWidth: "600px",
    minWidth: "450px"
  },
  teamName: {
    maxWidth: "600px",
    minWidth: "450px"
  },
  title: {
    color: "gray",
    fontSize: "36px",
    fontWeight: "700",
    textDecoration: "underline"
  },
  submit: {
    marginTop: theme.spacing(2),
    borderRadius: "5px"
  }
}));

const CreateTeamForm = ({ createTeam, history, fetchTeams }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamDescription: ""
  });
  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const { teamName, teamDescription } = formData;
  const classes = useStyles();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createTeam({ formData, history });
  };
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={onSubmit} align="center">
          <Grid item xs={12}>
            <Typography align="center" className={classes.title}>
              New Team Form
            </Typography>
            <Grid item>
              <FormControl>
                <TextField
                  fullWidth
                  className={classes.teamName}
                  margin="normal"
                  variant="outlined"
                  name="teamName"
                  label="Team Name"
                  value={teamName}
                  onChange={e => onChange(e)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{""}</InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  className={classes.description}
                  margin="normal"
                  variant="outlined"
                  name="teamDescription"
                  multiline={true}
                  rows={10}
                  label="Team Description"
                  value={teamDescription}
                  onChange={e => onChange(e)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{""}</InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <Button
                  className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

CreateTeamForm.propTypes = {
  createTeam: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  teams: Object.values(state.team.teams)
});

export default connect(
  mapStateToProps,
  { createTeam, fetchTeams }
)(withRouter(CreateTeamForm));
