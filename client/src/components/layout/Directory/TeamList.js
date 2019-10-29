import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

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

import { fetchTeams } from "../../../actions/team";

const useStyles = makeStyles(theme => ({
  media: {
    verticalAlign: "center",
    alignItems: "center",
    margin: "0 10% 0",
    height: 140,
    borderRadius: "5px"
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
        <Card>
          <CardActionArea>
            <CardMedia className={classes.media} title="Team Avatar" />
            <CardContent>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  textAlign: "center",
                  color: "#696969"
                }}
              >
                {team && team.teamName}
              </Typography>
              Description:
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#696969"
                }}
              >
                {team && team.teamDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <center>
              <Button size="small" color="primary">
                View Team Members
              </Button>
            </center>
          </CardActions>
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
