import React from "react";
import PropTypes from "prop-types";
import { Grid, Chip, makeStyles } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  chip: {
    margin: theme.spacing(1)
  }
}));
const ProfileSkills = ({ profile: { skills } }) => {
  const classes = useStyles();

  const handleDelete = () => {
    alert("You clicked the delete icon.");
  };

  const handleClick = () => {
    alert("You clicked the Chip.");
  };

  return skills.map((skill, index) => (
    <Grid>
      <Chip
        className={classes.chip}
        key={index}
        icon={<FaceIcon />}
        label={skill}
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Grid>
  ));
};

ProfileSkills.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired
};

export default ProfileSkills;
