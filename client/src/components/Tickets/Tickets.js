import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchProfiles } from "../../actions/profile";
import { loadUser } from "../../actions/user";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Tickets = ({ loadUser, isAuthenticated, fetchProfiles }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item="row" xs={12}>
        <NewTicketForm />
      </Grid>
      <Grid item="row" xs={12}>
        <TicketList />
      </Grid>
    </Grid>
  );
};

Tickets.propTypes = {
  isAuthenticated: PropTypes.bool,
  fetchProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { fetchProfiles, loadUser }
)(Tickets);
