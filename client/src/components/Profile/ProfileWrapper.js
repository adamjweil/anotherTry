import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
// import ProfileCard from "./Profile";
import Profile from "./Profile";
import Spinner from "../layout/Spinner";

const PROFILE_QUERY = gql`
  query profile($_id: ID!) {
    profile(_id: $_id) {
      _id
      firstName
      lastName
      bio
      user {
        username
        _id
      }
      team {
        _id
        teamName
      }
    }
  }
`;

class ProfileWrapper extends React.Component {
  render() {
    return (
      <Query query={PROFILE_QUERY}>
        {({ loading, error, data }) => {
          console.log(data)
          if (loading) {
            return <Spinner />;
          if (error) return <div>error</div>;
          } else {
            return <Profile />;
          }
        }}
      </Query>
    );
  }
}

export default ProfileWrapper;
