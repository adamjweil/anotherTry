import React, { Fragment, Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardActionArea
} from "@material-ui/core";

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

const useStyles = makeStyles(theme => ({
  media: {
    verticalAlign: "center",
    alignItems: "center",
    margin: "0 10% 0",
    height: 140,
    borderRadius: "5px"
  },
  card: {
    border: "2px solid #bbdefb"
  },
  cardContent: {
    minWidth: "200px"
  }
}));

class DirectoryWithApollo extends React.Component {
  render() {
    // const classes = useStyles();
    return (
      <Query query={PROFILE_QUERY}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <Spinner />;
          if (error) return <div>Error</div>;
          const profiles = data.profiles;

          return profiles.map(profile => {
            return (
              <Fragment>
                <Card className="">
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      textAlign: "center",
                      color: "#696969"
                    }}
                  >
                    {profile && profile.firstName} {profile && profile.lastName}
                  </Typography>
                  <CardMedia
                    className=""
                    style={{ marginTop: "10px" }}
                    image={profile.user && profile.user.avatar}
                    title="User Avatar"
                  />
                  <CardActionArea>
                    <CardContent className="">
                      eMail:
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#696969"
                        }}
                      >
                        {profile.user && profile.user.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary">
                      <center>
                        <Link
                          style={{ textDecoration: "none", color: "#37474f" }}
                          to={`/profile/${profile._id}`}
                          ckassName="btn btn-primary"
                        >
                          View Profile
                        </Link>
                      </center>
                    </Button>
                  </CardActions>
                </Card>
              </Fragment>
            );
          });
        }}
      </Query>
    );
  }
}

export default DirectoryWithApollo;
