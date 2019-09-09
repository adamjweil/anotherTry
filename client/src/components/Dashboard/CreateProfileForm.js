import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { createProfile } from "./../../actions/profile";

const CreateProfileForm = ({ isAuthenticated, createProfile }) => {
  const [formData, setFormData] = useState({
    team: "",
    title: "",
    reportingTo: "",
    directReports: "",
    hireDate: "",
    bio: "",
    skills: []
  });

  const {
    team,
    title,
    reportingTo,
    directReports,
    hireDate,
    bio,
    skills
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = formData => {
    createProfile(formData);
  };

  return (
    <Form size="large" onSubmit={e => onSubmit(e)}>
      <select
        name="team"
        value={team}
        onChange={e => onChange(e)}
        className="ui dropdown"
      >
        <option value="">Select Your team...</option>
        <option value="Dev">Dev</option>
        <option value="LogiQ">LogiQ</option>
        <option value="Admin">Admin</option>
      </select>
      <br />
      <select
        name="title"
        value={title}
        onChange={e => onChange(e)}
        className="ui dropdown"
      >
        <option value="">Select Your title...</option>
        <option value="Analyst">Analyst</option>
        <option value="Associate">Associate</option>
        <option value="Director">Director</option>
        <option value="Senior Director">Senior Director</option>
        <option value="Managing Director">Managing Director</option>
      </select>
      <br />
      <Button color="blue" fluid size="small">
        Save and Continue
      </Button>
    </Form>
  );
};

export default connect(
  null,
  { createProfile }
)(CreateProfileForm);
