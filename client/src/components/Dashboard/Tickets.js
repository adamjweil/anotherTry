import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";

import TicketHubLeftMenu from "./TicketHubLeftMenu";

const Tickets = () => {
  return (
    <Container>
      <TicketHubLeftMenu />
    </Container>
  );
};

Tickets.propTypes = {};

export default connect()(Tickets);
