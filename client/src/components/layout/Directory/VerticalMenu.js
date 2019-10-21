import React from "react";
import { Grid, Paper, MenuItem, MenuList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    width: "90%",
    margin: theme.spacing(5, 1, 0)
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();

  return (
    <Grid container>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Employees</MenuItem>
          <MenuItem>Teams</MenuItem>
          <MenuItem>Org Chart</MenuItem>
        </MenuList>
      </Paper>
    </Grid>
  );
}
