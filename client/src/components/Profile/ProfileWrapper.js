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
      middleInitial
      lastName
      bio
      skills
      title
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
          if (loading) {
            return <Spinner />;
          } else {
            console.log({ data });
            return <Profile profile={data} />;
          }
        }}
      </Query>
    );
  }
}

export default ProfileWrapper;
