import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";

const BasicInfoForm = () => {
  const [formData, setFormData] = useState(
    {
      team: "",
      title: ""
    },
    []
  );

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { team, title } = formData;

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
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
        <Grid item xs={12} sm={6}>
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
