import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Spinner from "../layout/Spinner";
import TeamPage from "./TeamPage";

const TEAM_QUERY = gql`
  {
    team(_id: $_id) {
      _id
      teamName
      teamDescription
      profiles {
        _id
        title
        firstName
        lastName
      }
    }
  }
`;

class Wrapper extends React.Component {
  render() {
    return (
      <Query query={TEAM_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Spinner />;
          } else {
            return <TeamPage team={data.team.$_id} />;
          }
        }}
      </Query>
    );
  }
}

export default Wrapper;
