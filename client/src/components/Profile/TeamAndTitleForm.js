import React, { Fragment, Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import { fetchUsers } from "../../actions/user";
import RaisedButton from "material-ui/RaisedButton";

export class TeamAndTitleForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  TEAMS = [
    "LogiQ",
    "Dev - Backend",
    "Dev - Frontend",
    "Integration",
    "Project Management",
    "Tech Experts",
    "Ops"
  ];

  TITLES = ["Intern", "Analyst", "Associate", "Senior Accociate", "Director"];

  render() {
    const { users, values, handleChange } = this.props;

    return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Team & Title
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
              <Select native value={values} onChange={handleChange("team")}>
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <TextField
              required
              label="team"
              defaultValue={values.team}
              onChange={handleChange("team")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              defaultValue={values.title}
              onChange={handleChange("title")}
              name="title"
              label="Title"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <RaisedButton label="Back" primary={true} onClick={this.back} />
          </Grid>
          <Grid item xs={6}>
            <RaisedButton
              label="Continue"
              primary={true}
              onClick={this.continue}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  users: state.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(TeamAndTitleForm);
