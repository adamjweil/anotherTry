import React, { Fragment, useState, useEffect } from "react";

import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Typography, TextField, Button } from "@material-ui/core/";
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
const BasicInfoForm = ({ createProfile }) => {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      handle: "",
      hireDate: ""
    },
    []
  );
  const { firstName, lastName, handle } = formData;

  const [hireDate, handleDateChange] = useState(new Date(), []);

  // fetchUsers();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onProfileCreation = async formData => {
    try {
      createProfile({ firstName, lastName, handle });
    } catch (err) {
      showErrorSnackbar(err.msg);
    }
  };
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={e => onChange(e)}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={e => onChange(e)}
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="handle"
              name="handle"
              label="Handle"
              value={handle}
              onChange={e => onChange(e)}
              fullWidth
              autoComplete="handle"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <KeyboardDatePicker
              variant="outlined"
              label="Hire Date"
              format="MM/dd/yyyy"
              value={hireDate}
              InputAdornmentProps={{ position: "start" }}
              onChange={e => handleDateChange(e)}
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
              value={hireDate}
              onChange={e => handleDateChange(e)}
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={onProfileCreation}
          >
            Save
          </Button>
        </Grid>
      </form>
    </Fragment>
  );
};

BasicInfoForm.propTypes = {
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { createProfile }
)(BasicInfoForm);
