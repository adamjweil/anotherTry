import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  Divider,
  CardActions,
  Button
} from "@material-ui/core";

const TeamList = ({ teams }) => {
  return teams.map(team => {
    return (
      <Grid
        key={team._id}
        item
        xs={12}
        sm={3}
        style={{ display: "inLine-block" }}
      >
        <Card
          style={{
            margin: "15px",
            boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.8)"
          }}
        >
          <CardActionArea>
            <CardContent
              style={{
                minHeight: "200px",
                maxWidth: "250px",
                backgroundColor: "#bbdefb"
              }}
            >
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "-5px",
                  marginBottom: "5px",
                  color: "#0d47a1"
                }}
              >
                {team && team.teamName}
              </Typography>
              <center>
                {" "}
                <Divider
                  style={{
                    width: "200px",
                    height: "3px",
                    backgroundColor: "#e3f2fd"
                  }}
                />
              </center>
              <Typography
                as="h3"
                style={{
                  color: "#448aff",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "10px"
                }}
              >
                Description:
              </Typography>

              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#0d47a1",
                  margin: "0 5px 5px 5px"
                }}
              >
                {team && team.teamDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <center>
            <CardActions>
              <Button
                style={{ textAlign: "center" }}
                fullWidth
                size="large"
                color="primary"
              >
                View Team Members
              </Button>
            </CardActions>
          </center>
        </Card>
      </Grid>
    );
  });
};

export default TeamList;
