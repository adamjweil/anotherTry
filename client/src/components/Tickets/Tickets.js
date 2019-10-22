import React from "react";
import { Grid } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchProfiles } from "../../actions/profile";
// import TicketHubLeftMenu from "./TicketHubLeftMenu";
import NewTicketForm from "./NewTicketForm";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#424242"
  }
}));

const Tickets = ({ fetchProfiles }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <NewTicketForm />
      </Grid>
    </Grid>
  );
};

Tickets.propTypes = {};

export default connect(
  null,
  { fetchProfiles }
)(Tickets);
