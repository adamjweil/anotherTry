import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import TicketList from "./TicketList";
import Spinner from "../layout/Spinner";

const TICKETS_QUERY = gql`
  {
    tickets {
      _id
      type
      source
      environment
      bucket
      project
      release
      process
      status
      owner {
        _id
        firstName
        lastName
      }
      fixer {
        _id
        firstName
        lastName
      }
      tester {
        _id
        firstName
        lastName
      }
      standing
      ticketId
      importance
      summary
      description
    }
  }
`;

class TicketListWrapper extends React.Component {
  render() {
    return (
      <Query query={TICKETS_QUERY}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) {
            return <Spinner />;
          } else {
            return <TicketList tickets={data.tickets} />;
          }
        }}
      </Query>
    );
  }
}

export default TicketListWrapper;
