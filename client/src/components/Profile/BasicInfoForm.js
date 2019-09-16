import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";

const BasicInfoForm = () => {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      handle: ""
    },
    []
  );

  // fetchUsers();
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { firstName, lastName, handle } = formData;

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
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
            required
            id="lastName"
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
      </Grid>
    </Fragment>
  );
};

BasicInfoForm.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(BasicInfoForm);
