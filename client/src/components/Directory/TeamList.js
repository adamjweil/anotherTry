import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  Divider
} from "@material-ui/core";

import { fetchTeams } from "../../actions/team";

const useStyles = makeStyles(theme => ({
  media: {
    verticalAlign: "center",
    alignItems: "center",
    margin: "0 10% 0",
    borderRadius: "5px"
  },
  cardContent: {
    minHeight: "200px",
    maxWidth: "250px",
    backgroundColor: "#bbdefb"
  },
  description: {
    color: "#448aff",
    fontSize: "14px",
    fontWeight: "700",
    margin: theme.spacing(1, 0, 0, 0)
  },
  descriptionContent: {
    fontSize: "14px",
    fontWeight: "500",
    // color: "#696969",
    color: "#0d47a1",
    margin: theme.spacing(0, 1, 1, 1)
  },
  card: {
    border: "2px solid #bbdefb"
  }
}));

const TeamList = ({ fetchTeams, teams }) => {
  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);
  const classes = useStyles();
  return teams.map(team => {
    return (
      <Grid
        key={team.teamName}
        item
        xs={12}
        sm={3}
        style={{ display: "inLine-block", margin: "15px" }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className={classes.cardContent}>
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
              <Typography as="h3" className={classes.description}>
                Description:
              </Typography>

              <Typography className={classes.descriptionContent}>
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

TeamList.propTypes = {
  fetchTeams: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  teams: Object.values(state.team.teams)
});
export default connect(
  mapStateToProps,
  { fetchTeams }
)(withRouter(TeamList));
