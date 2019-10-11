import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.87);",
    ocacity: "0.5"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function UnauthenticatedNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Online Portal
            </Link>
          </Typography>
          <Link to="/directory" style={{ textDecoration: "none" }}>
            <MenuItem>
              <ContactMailIcon
                fontSize="small"
                style={{ color: "white", marginRight: "10px" }}
              />
              <p style={{ color: "white" }}>Directory</p>
            </MenuItem>
          </Link>
          <div className={classes.root} />
          <div className={classes.sectionDesktop}>
            <Link to="/" className="" style={{ textDecoration: "none" }}>
              <MenuItem>
                <p
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "16px"
                  }}
                >
                  HOME
                </p>
              </MenuItem>
            </Link>

            <MenuItem>
              <Link to="/directory" style={{ textDecoration: "none" }}>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
