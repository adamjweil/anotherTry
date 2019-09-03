import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import { Form, Button, Grid, Column } from "semantic-ui-react";

import SelectSkills from "./SelectSkills";

const CreateProfile = ({ createProfile }) => {
  const [formData, setFormData] = useState({
    team: "",
    title: "",
    bio: "",
    reportingTo: "",
    directReports: "",
    hireDate: "",
    skills: [],
    githubusername: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    youtube: ""
  });

  const {
    title,
    team,
    bio,
    reportingTo,
    directReports,
    hireDate,
    skills,
    githubusername,
    twitter,
    linkedin,
    facebook,
    youtube
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onProfileSaveClick = async e => {
    e.preventDefault();
    console.log({ ...formData });
    createProfile({ ...formData });
    return <Redirect to="/" />;
  };

  return (
    <div className="ui internally celled grid">
      <div className="row">
        <div className="three wide column">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mezocliq_logo.png/240px-Mezocliq_logo.png" />
        </div>

        <div class="ten wide column">
          <div className="ui attached message">
            <div className="header">Start Setting Your Profile Up Below!</div>
            <p>
              <i className="hand point left icon"></i>make sure to select Team &
              Title!!
            </p>
          </div>

          <Form className="ui form attached fluid segment">
            <div className="field">
              <label>Select your team:</label>
              <select
                name="team"
                value={team}
                onChange={e => onChange(e)}
                className="ui dropdown"
              >
                <option value="">Team...</option>
                <option value="Dev">Dev</option>
                <option value="LogiQ">LogiQ</option>
                <option value="Admin">Admin</option>
                <option value="PM">PM</option>
              </select>
            </div>

            <div className="field">
              <label>Select your title:</label>
              <select
                name="title"
                value={title}
                onChange={e => onChange(e)}
                className="ui dropdown"
              >
                <option value="">Title...</option>
                <option value="Analyst">Analyst</option>
                <option value="Associate">Associate</option>
                <option value="Director">Director</option>
                <option value="Senior Director">Senior Director</option>
                <option value="Managing Director">Managing Director</option>
              </select>
            </div>
            <div className="ui selection">
              <label>Date of Hire:</label>
              <input
                type="date"
                name="hireDate"
                value={hireDate}
                onChange={e => onChange(e)}
              />
            </div>
            <br />
            <div className="field">
              <textarea
                placeholder="Enter a brief Bio here!"
                rows="3"
                name="bio"
                value={bio}
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <div className="field">
              <label>Feel free to enter some of your skills below...</label>
              <SelectSkills />
            </div>
            <div className="field">
              <button
                className="ui blue submit button"
                onClick={onProfileSaveClick}
                size="small"
              >
                Save
              </button>
            </div>
          </Form>
        </div>
        <div class="three wide column">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mezocliq_logo.png/240px-Mezocliq_logo.png" />
        </div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  users: state.users
});

export default connect(
  mapStateToProps,
  { createProfile }
)(CreateProfile);
