import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import TeamListTwo from "./TeamListTwo";
import Spinner from "../layout/Spinner";

const TEAMS_QUERY = gql`
  {
    teams {
      _id
      teamName
      teamDescription
      profiles {
        _id
        firstName
        lastName
      }
    }
  }
`;

class TeamsWrapper extends React.Component {
  render() {
    // const classes = useStyles();
    return (
      <Query query={TEAMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Spinner />;
          } else {
            return <TeamListTwo teams={data.teams} />;
          }
        }}
      </Query>
    );
  }
}

export default TeamsWrapper;
