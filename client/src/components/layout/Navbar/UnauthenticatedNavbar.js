import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, MenuItem, Menu, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import { connect } from "react-redux";

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
    marginLeft: "30px",
    fontWeight: "700",
    fontSize: "26px",
    opacity: ".95"
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

const UnauthenticatedNavbar = ({ activeTab, setActiveTab }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [ setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = "primary-search-account-menu";
  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  // function handleMobileMenuOpen(event) {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // }
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/register" style={{ textDecoration: "none" }}>
          Register
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/directory" style={{ textDecoration: "none" }}>
          Directory
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root} style={{ marginBottom: "50px" }}>
      <AppBar
        style={{
          position: "fixed",
          padding: "0px",
          background: "linear-gradient(#14171A, #000000)",
          opacity: ".7"
        }}
      >
        <Toolbar style={{ minHeight: "10px", maxHeight: "50px" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "rgb(240,240,240)"
              }}
            >
              Online Portal
            </Link>
          </Typography>

          <div className={classes.root} />
          <div className={classes.sectionDesktop}>
            <Link
              to="/"
              onClick={setActiveTab()}
              style={{ textDecoration: "none", paddingTop: "0px" }}
            >
              <Grid container>
                <MenuItem
                  style={{
                    maxHeight: "52px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    borderBottom:
                      window.location.href === "http://localhost:3000/"
                        ? "3px inset #D3D3D3"
                        : ""
                  }}
                >
                  <HomeOutlinedIcon
                    label="Home"
                    fontSize="default"
                    style={{
                      color: "white"
                    }}
                  />
                  <p
                    style={{
                      paddingRight: "10px",
                      marginLeft: "10px",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "14px"
                    }}
                  >
                    Home
                  </p>
                </MenuItem>
              </Grid>
            </Link>

            <Link
              onClick={setActiveTab()}
              to="/directory"
              style={{ textDecoration: "none", paddingTop: "0px" }}
            >
              <Grid container>
                <MenuItem
                  style={{
                    maxHeight: "52px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    borderBottom:
                      window.location.href === "http://localhost:3000/directory"
                        ? "3px inset #D3D3D3"
                        : ""
                  }}
                >
                  <ImportContactsOutlinedIcon
                    label="Directory"
                    fontSize="default"
                    style={{
                      color: "white"
                    }}
                  />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "14px",
                      paddingRight: "5px"
                    }}
                  >
                    Directory
                  </p>
                </MenuItem>
              </Grid>
            </Link>
            <Link
              onClick={setActiveTab()}
              to="/register"
              style={{ textDecoration: "none", paddingTop: "0px" }}
            >
              <Grid container>
                <MenuItem
                  style={{
                    maxHeight: "52px",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    borderBottom:
                      window.location.href === "http://localhost:3000/register"
                        ? "3px inset #D3D3D3"
                        : ""
                  }}
                >
                  <FingerprintOutlinedIcon
                    label="Register"
                    fontSize="default"
                    style={{
                      color: "white"
                    }}
                  />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "14px",
                      paddingRight: "10px",
                      paddingLeft: "5px"
                    }}
                  >
                    Register
                  </p>
                </MenuItem>
              </Grid>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default connect(
  null,
  {}
)(UnauthenticatedNavbar);
