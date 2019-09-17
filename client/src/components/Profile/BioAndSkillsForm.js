import React, { useState, Fragment, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Select, MenuItem, FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user";

const BioAndSkillsForm = ({ createProfile }) => {
  const [formData, setFormData] = useState(
    {
      bio: "",
      skills: []
    },
    []
  );

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { bio, skills } = formData;

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Brief Bio & Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            multiline
            rows="6"
            // id="bio"
            variant="outlined"
            id="outlined-multiline-flexible"
            name="bio"
            label="bio"
            value={bio}
            onChange={e => onChange(e)}
            fullWidth
            autoComplete="bio"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-multiline-flexible"
            // id="skills"
            multiline
            rows="4"
            name="skills"
            label="Skills"
            value={skills}
            onChange={e => onChange(e)}
            fullWidth
            autoComplete="skills"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl></FormControl>
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
)(BioAndSkillsForm);
