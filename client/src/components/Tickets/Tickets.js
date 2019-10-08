import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { connect } from "react-redux";

import TicketHubLeftMenu from "./TicketHubLeftMenu";
import NewTicketForm from "./NewTicketForm";

const Tickets = () => {
  return (
    <Grid container>
      <Grid item sm={1}></Grid>
      <Grid item xs={12} sm={12}>
        <NewTicketForm />
      </Grid>
    </Grid>
  );
};

Tickets.propTypes = {};

export default connect()(Tickets);
