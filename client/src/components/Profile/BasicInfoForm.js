import React, { Fragment, useState, useEffect, Component } from "react";
import AppBar from "material-ui/AppBar";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Typography, TextField, Button } from "@material-ui/core/";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
// import  from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { createProfile } from "../../actions/profile";
import {
  showInfoSnackbar,
  showErrorSnackbar,
  showSuccessSnackbar
} from "../../actions/alert";

export class BasicInfoForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                hintText="Enter your First Name"
                floatingLabelText="first Name"
                onChange={handleChange("firstName")}
                fullWidth
                defaultValue={values.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                hintText="Enter your Last Name"
                floatingLabelText="last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Handle"
                hintText="Choose a Handle"
                floatingLabelText="handle"
                onChange={handleChange("handle")}
                defaultValue={values.handle}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <KeyboardDatePicker
                variant="outlined"
                label="Hire Date"
                format="MM/dd/yyyy"
                InputAdornmentProps={{ position: "start" }}
                onChange={handleChange("hireDate")}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <DatePicker
                autoOk
                orientation="landscape"
                name="hireDate"
                variant="static"
                openTo="date"
                onChange={handleChange("hireDate")}
                defaultValue={values.handle}
              />
            </Grid>
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </Grid>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

BasicInfoForm.propTypes = {
  // profile: PropTypes.object.isRequired,
  // createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  user: state.auth.user
});

const styles = {
  button: {
    margin: 15
  }
};
export default BasicInfoForm;
