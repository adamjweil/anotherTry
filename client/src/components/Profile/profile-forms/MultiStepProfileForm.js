import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
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
  classes = useStyles();
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
        return (
          <TeamAndTitleForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
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
