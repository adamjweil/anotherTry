import React from "react";
import { Grid, Typography } from "@material-ui/core";

const TeamHeader = ({ team }) => {
  return (
    <Grid container="true">
      <Typography as="h2">{team.teamName}</Typography>
      <Typography as="h4">{team.teamName}</Typography>
    </Grid>
  );
};

export default TeamHeader;
