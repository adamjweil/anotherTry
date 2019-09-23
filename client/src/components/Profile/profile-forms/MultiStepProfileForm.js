import React, { useState, Fragment, Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BasicInfoForm from "../BasicInfoForm";
import TeamAndTitleForm from "../TeamAndTitleForm";
import BioAndSkillsForm from "../BioAndSkillsForm";
import Review from "../Review";
import { createProfile } from "../../../actions/profile";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export class MultiStepProfileForm extends Component {
  constructor() {
    super();
  }
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    handle: "",
    hireDate: "",
    team: "",
    title: "",
    bio: "",
    skills: []
  };

  // Preceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // Preceed to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      hireDate,
      team,
      title,
      bio,
      skills
    } = this.state;
    const values = { firstName, lastName, hireDate, team, title, bio, skills };

    switch (step) {
      case 1:
        return (
          <BasicInfoForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <TeamAndTitleForm />;
      case 3:
        return <BioAndSkillsForm />;
      case 4:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }
}

MultiStepProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createProfile }
)(MultiStepProfileForm);
