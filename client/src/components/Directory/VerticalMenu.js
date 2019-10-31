import React from "react";
import { Grid, Paper, MenuItem, MenuList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setActiveTab } from "../../actions/directory";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    width: "90%",
    margin: theme.spacing(5, 1, 0)
  }
}));

const VerticalMenu = ({ setActiveTab, activeTab }) => {
  const onClick = input => {
    setActiveTab(input);
  };
  const classes = useStyles();

  return (
    <Grid container>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem name="employees" onClick={onClick("employees")}>
            Employees
          </MenuItem>
          <MenuItem name="teams" onClick={onClick("teams")}>
            Teams
          </MenuItem>
          <MenuItem name="newTeam" onClick={onClick("createTeamForm")}>
            New Team
          </MenuItem>
        </MenuList>
      </Paper>
    </Grid>
  );
};

VerticalMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  activeTab: state.directory.activeTab
});

export default connect(
  mapStateToProps,
  { setActiveTab }
)(VerticalMenu);
