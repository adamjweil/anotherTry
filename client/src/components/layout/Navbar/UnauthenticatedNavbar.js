import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

import history from "../../../history";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function UnauthenticatedNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            <Link to="/">
              <p
                style={{ color: "white", fontWeight: "800", fontSize: "24px" }}
              >
                ONLINE PORTAL
              </p>
            </Link>
          </Typography>

          <MenuItem>
            <Link to="/directory" className="">
              <p
                style={{ color: "white", fontWeight: "600", fontSize: "18px" }}
              >
                DIRECTORY
              </p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">
              <p
                style={{ color: "white", fontWeight: "600", fontSize: "18px" }}
              >
                REGISTER
              </p>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
