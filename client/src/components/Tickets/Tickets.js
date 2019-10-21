import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import TicketHubLeftMenu from "./TicketHubLeftMenu";
import NewTicketForm from "./NewTicketForm";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: "",
    color: "#F8F8F8"
  }
}));

const Tickets = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: "70px" }}>
        <NewTicketForm />
      </Grid>
    </Grid>
  );
};

Tickets.propTypes = {};

export default connect()(Tickets);
