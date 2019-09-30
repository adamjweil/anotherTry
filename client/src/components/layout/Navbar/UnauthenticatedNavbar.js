import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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
          <MenuItem>
            <Link
              to="/directory"
              className=""
              style={{ textDecoration: "none" }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: "16px"
                }}
              >
                DIRECTORY
              </p>
            </Link>
          </MenuItem>
          <Typography variant="h6" className={classes.title}></Typography>

          <MenuItem>
            <Link to="/" className="" style={{ textDecoration: "none" }}>
              <p
                style={{ color: "white", fontWeight: "500", fontSize: "16px" }}
              >
                HOME
              </p>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: "16px"
                }}
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
