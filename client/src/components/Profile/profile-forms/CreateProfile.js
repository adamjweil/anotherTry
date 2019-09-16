import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";
import { Redirect, withRouter, Link } from "react-router-dom";
import SelectSkills from "./SelectSkills";

const CreateProfile = ({ createProfile, history, profile }) => {
  const [formData, setFormData] = useState({
    team: "",
    title: "",
    bio: "",
    hireDate: "",
    skills: "",
    githubusername: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    facebook: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    team,
    title,
    bio,
    hireDate,
    skills,
    githubusername,
    twitter,
    linkedin,
    youtube,
    facebook
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onProfileSaveClick = async e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  if (profile) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="ui internally celled grid">
      <div className="row">
        <div className="three wide column">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mezocliq_logo.png/240px-Mezocliq_logo.png"
            alt="fail"
          />
        </div>

        <div className="ten wide column">
          <div className="ui attached message">
            <div className="header">Start Setting Your Profile Up Below!</div>
            <p>
              <i className="hand point left icon"></i>make sure to select Team &
              Title!!
            </p>
          </div>

          <form
            className="ui form attached fluid segment"
            onSubmit={e => onProfileSaveClick(e)}
          >
            <div className="field">
              <label>Select your team:</label>
              <select
                name="team"
                className="ui dropdown"
                onChange={e => onChange(e)}
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
                className="ui dropdown"
                onChange={e => onChange(e)}
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
              <input type="date" name="hireDate" onChange={e => onChange(e)} />
            </div>
            <br />
            <div className="field">
              <textarea
                placeholder="Enter a brief Bio here!"
                rows="3"
                name="bio"
                onChange={e => onChange(e)}
              ></textarea>
            </div>
            <div className="field">
              <label>Feel free to enter some of your skills below...</label>
              <SelectSkills />
            </div>
            <div className="field">
              <button
                type="submit"
                className="ui positive animated button"
                size="small"
              >
                <div className="visible content">Next</div>
                <div className="hidden content">
                  <i aria-hidden="true" className="arrow right icon"></i>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className="three wide column">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mezocliq_logo.png/240px-Mezocliq_logo.png"
            alt="fail"
          />
        </div>
      </div>
      <div className="my-2">
        <button
          onClick={() => toggleSocialInputs(!displaySocialInputs)}
          type="button"
          className="btn btn-light"
        >
          Add Social Network Links
        </button>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   isAuthenticated:
//   profile: state.profile
// });

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
