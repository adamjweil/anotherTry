import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  Divider,
  CardMedia,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ProfileList = ({ profiles, users }) => {
  return profiles.map(profile => {
    return (
      <Grid key={profile._id} item style={{ display: "inLine-block" }}>
        <Card
          style={{
            margin: "15px",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.8)"
          }}
        >
          <CardActionArea>
            <CardContent style={{}}>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "-5px",
                  marginBottom: "10px",
                  color: "#004d40",
                  textDecoration: "underline"
                }}
              >
                {profile && profile.firstName}{" "}
                {profile && profile.middleInitial} {profile && profile.lastName}
              </Typography>
              <CardMedia
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  verticalAlign: "center",
                  alignItems: "center",
                  height: 100,
                  width: 100,
                  borderRadius: "25px"
                }}
                image={profile.user && profile.user.avatar}
                title="User Avatar"
              />
              <center>
                {" "}
                <Divider
                  style={{
                    width: "200px",
                    height: "1px",
                    backgroundColor: "#00695c"
                  }}
                />
              </center>

              {/* Team section*/}

              <Grid
                item
                xs={12}
                style={{
                  marginTop: "5px",
                  justifyContent: "space-between",
                  display: "flex"
                }}
              >
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  Team:
                </span>
                <span className="">
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#00796b"
                    }}
                  >
                    {profile.team && profile.team.teamName}
                  </Typography>
                </span>
              </Grid>

              {/* Title section*/}

              <Grid
                item
                xs={12}
                style={{ justifyContent: "space-between", display: "flex" }}
              >
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  Title:
                </span>
                <span>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#00796b"
                    }}
                  >
                    {profile.title && profile.title}
                  </Typography>
                </span>
              </Grid>

              {/* Email section*/}

              <Grid
                item
                xs={12}
                style={{ justifyContent: "space-between", display: "flex" }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    paddingRight: "20px"
                  }}
                >
                  eMail:
                </span>
                <span>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#00796b"
                    }}
                  >
                    {profile.user && profile.user.email}
                  </Typography>
                </span>
              </Grid>
            </CardContent>
          </CardActionArea>

          <Link
            to={`/profile/${profile.user._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              renderas="button"
              fullWidth
              size="small"
              variant="outlined"
              color="primary"
              style={{
                textDecoration: "none"
              }}
            >
              View Profile
            </Button>
          </Link>
        </Card>
      </Grid>
    );
  });
};

export default ProfileList;
