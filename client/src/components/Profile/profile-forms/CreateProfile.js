import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Grid, FormControl, TextField, Select } from "@material-ui/core";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";
import { Redirect, withRouter, Link } from "react-router-dom";
import { KeyboardDatePicker } from "@material-ui/pickers";

export class CreateProfile extends Component {
  if(profile) {
    return <Redirect to="/profile" />;
  }
  render() {
    const { users, values, handleChange, handleDateChange } = this.props;

    console.log(users);
    return (
      <Fragment>
        <center>
          <Grid item xs={12}>
            <h3>Create Profile Below</h3>
          </Grid>
        </center>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                name="firstName"
                label="First Name"
                onChange={handleChange("firstName")}
                fullWidth
                defaultValue={values.firstName}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                name="lastName"
                label="Last Name"
                onChange={handleChange("lastName")}
                fullWidth
                defaultValue={values.lastName}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                name="handle"
                label="Handle"
                onChange={handleChange("handle")}
                fullWidth
                defaultValue={values.handle}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <KeyboardDatePicker
              // fullWidth
              name="hireDate"
              variant="outlined"
              label="Hire Date"
              format="MM/dd/yyyy"
              InputAdornmentProps={{ position: "start" }}
              onChange={handleDateChange("hireDate")}
              defaultValue={values.hireDate}
            />
          </Grid>

          <FormControl>
            <Grid item xs={12}>
              <Select>
                <option>x</option>
              </Select>
            </Grid>
          </FormControl>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: Object.values(state.users)
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
