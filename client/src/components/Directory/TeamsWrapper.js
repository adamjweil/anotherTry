import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import TeamList from "./TeamList";
import Spinner from "../layout/Spinner";

const TEAMS_QUERY = gql`
  {
    teams {
      _id
      teamName
      teamDescription
    }
  }
`;

class TeamsWrapper extends React.Component {
  render() {
    return (
      <Query query={TEAMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Spinner />;
          } else {
            return <TeamList teams={data.teams} />;
          }
        }}
      </Query>
    );
  }
}

export default TeamsWrapper;
