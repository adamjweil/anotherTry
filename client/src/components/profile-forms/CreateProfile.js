import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Form, Button } from 'semantic-ui-react';

const CreateProfile = ({ createProfile }) => {
  const [formData, setFormData] = useState({
    team: '',
    title: '',
    bio: '',
    reportingTo: '',
    directReports: '',
    hireDate: '',
    skills: [],
    githubusername: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    youtube: ''
  });

const { title, team, bio, reportingTo, directReports, hireDate, skills, githubusername, twitter, linkedin, facebook, youtube } = formData;

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value })
const onSubmit = (e) => {
  e.preventDefault();
  createProfile(formData)
};

  return (
    <div className='ui container'>
      <Form size='large' onSubmit={e => onSubmit(e)}>
        <select
          name="team"
          value={team}
          onChange={e => onChange(e)}
          className='ui dropdown'>
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
          className='ui dropdown'>
          <option value="">Select Your title...</option>
          <option value="Analyst">Analyst</option>
          <option value="Associate">Associate</option>
          <option value="Director">Director</option>
          <option value="Senior Director">Senior Director</option>
          <option value="Managing Director">Managing Director</option>
        </select>
          <br />

        <textarea
          placeholder="Enter a brief Bio here!"
          rows="3"
          name='bio'
          value={bio}
          onChange={e => onChange(e)}>
        </textarea>
          <br />
          <br />
        <textarea
          placeholder="Enter your skills (comma seperated)"
          rows="2"
          name='skills'
          value={skills}
          onChange={e => onChange(e)}>
        </textarea>
          <br />
          <br />
        <Button color='blye'fluid size="small">
          Save and Continue
        </Button>
        </Form>
    </div>
  )
}


CreateProfile.propTypes = {

}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile })(CreateProfile);
