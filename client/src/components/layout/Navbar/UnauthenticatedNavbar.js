import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    marginLeft: "50px",
    fontWeight: "700"
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

          <div className={classes.root} />
          <div className={classes.sectionDesktop}>
            <Link to="/directory" style={{ textDecoration: "none" }}>
              <MenuItem>
                <ContactMailIcon
                  fontSize="small"
                  style={{ color: "white", marginRight: "10px" }}
                />
                <p
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "16px"
                  }}
                >
                  Directory
                </p>
              </MenuItem>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem>
                <p
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "16px"
                  }}
                >
                  Register
                </p>
              </MenuItem>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
