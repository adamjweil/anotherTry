import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchProfiles } from "../../actions/profile";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#424242"
  }
}));

const Tickets = ({ auth, isAuthenticated, fetchProfiles }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <NewTicketForm />
      </Grid>
      <Grid item xs={12}>
        <TicketList />
      </Grid>
    </Grid>
  );
};

Tickets.propTypes = {
  isAuthenticated: PropTypes.bool,
  fetchProfiles: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  null,
  { fetchProfiles }
)(Tickets);
