import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, MenuItem, Menu, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
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
    fontWeight: "800",
    fontSize: "24px",
    opacity: ".85"
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

const UnauthenticatedNavbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
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

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ minHeight: "10px", maxHeight: "80px" }}>
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
              style={{ textDecoration: "underline", color: "white" }}
            >
              meZocliQ Online Portal
            </Link>
          </Typography>

          <div className={classes.root} />
          <div className={classes.sectionDesktop}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Grid container>
                <MenuItem>
                  <Grid row>
                    <HomeOutlinedIcon
                      label="Home"
                      fontSize="large"
                      style={{
                        color: "white",
                        marginLeft: "5px",
                        marginTop: "5px"
                      }}
                    />
                    <p
                      style={{
                        marginTop: "-10px",
                        marginLeft: "5px",
                        color: "white",
                        fontWeight: "500",
                        fontSize: "12px"
                      }}
                    >
                      Home
                    </p>
                  </Grid>
                </MenuItem>
              </Grid>
            </Link>

            <Link to="/directory" style={{ textDecoration: "none" }}>
              <Grid container>
                <MenuItem>
                  <Grid row>
                    <ContactMailIcon
                      label="Directory"
                      fontSize="large"
                      style={{
                        color: "white",
                        marginLeft: "5px",
                        marginTop: "5px"
                      }}
                    />
                    <p
                      style={{
                        marginTop: "-10px",
                        color: "white",
                        fontWeight: "500",
                        fontSize: "12px"
                      }}
                    >
                      Directory
                    </p>
                  </Grid>
                </MenuItem>
              </Grid>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Grid container>
                <MenuItem>
                  <Grid row>
                    <FingerprintOutlinedIcon
                      label="Register"
                      fontSize="large"
                      style={{
                        color: "white",
                        marginLeft: "5px",
                        marginTop: "5px"
                      }}
                    />
                    <p
                      style={{
                        marginTop: "-10px",
                        color: "white",
                        fontWeight: "500",
                        fontSize: "12px"
                      }}
                    >
                      Register
                    </p>
                  </Grid>
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

export default UnauthenticatedNavbar;
