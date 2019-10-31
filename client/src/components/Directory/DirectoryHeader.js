import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    border: "2px shadow grey",
    margin: theme.spacing(5, 3, 1),
    padding: theme.spacing(1, 1, 1)
  },
  header: {
    fontSize: "36px",
    fontWeight: "600",
    textAlign: "center",
    padding: theme.spacing(0, 1, 3)
  },
  subHeader: {
    fontSize: "18px",
    fontWight: "400",
    textAlign: "center",
    padding: theme.spacing(1)
  }
}));
const DirectoryHeader = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Paper className={classes.paper}>
        <div className={classes.header}>meZocliQ Directory</div>
        <div className={classes.subHeader}>
          Check out our Company Directory, organized by Employee, Team, and in
          the context of the overall organizational chart. Feel free to click on
          a specific Employee or Team to get additional details!
        </div>
      </Paper>
    </Grid>
  );
};

export default DirectoryHeader;
