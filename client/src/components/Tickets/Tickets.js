import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { connect } from "react-redux";

import TicketHubLeftMenu from "./TicketHubLeftMenu";
import NewTicketForm from "./NewTicketForm";

const Tickets = () => {
  return (
    <Container>
      <Grid columns={15}>
        <Grid.Column width={3}>
          <TicketHubLeftMenu />
        </Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column width={11}>
          <NewTicketForm />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

Tickets.propTypes = {};

export default connect()(Tickets);
