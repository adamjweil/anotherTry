import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import ProfileList from "./ProfileList";
import Spinner from "../layout/Spinner";

const PROFILE_QUERY = gql`
  {
    profiles {
      _id
      firstName
      lastName
      team {
        _id
        teamName
      }
      title
      user {
        _id
        avatar
        email
      }
    }
  }
`;

class ProfilesWrapper extends React.Component {
  render() {
    // const classes = useStyles();
    return (
      <Query query={PROFILE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Spinner />;
          } else {
            return <ProfileList profiles={data.profiles} />;
          }
        }}
      </Query>
    );
  }
}

export default ProfilesWrapper;
