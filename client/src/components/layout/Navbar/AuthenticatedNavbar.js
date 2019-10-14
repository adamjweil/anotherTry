import React, { Fragment } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Button,
  AppBar,
  Badge,
  MenuItem,
  Menu,
  Toolbar,
  InputBase,
  Typography,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuBookIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import PropTypes from "prop-types";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles(theme => ({
  grow: {
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
    marginRight: "20px",
    fontWeight: "700",
    fontSize: "24px",
    opacity: ".75"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(5),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    // marginLeft: "100px",
    // width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
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

const AuthenticatedNavbar = ({ logout, isAuthenticated, loading }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const menuId = "primary-search-account-menu";
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
        <Link to="/profile" style={{ textDecoration: "none" }}>
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/ticket" style={{ textDecoration: "none" }}>
          Tickets
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/directory" style={{ textDecoration: "none" }}>
          Directory
        </Link>
      </MenuItem>
      <MenuItem onClick={logout}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/directory">
          <IconButton color="inherit">
            <Badge>
              <MenuBookIcon />
            </Badge>
          </IconButton>

          <p>Directory</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <AppBar style={{ position: "static" }}>
        <Toolbar style={{ minHeight: "10px", maxHeight: "90px" }}>
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
                color: "rgb(240,240,240)",
                height: "100px"
              }}
            >
              meZocliQ Online Portal
            </Link>
          </Typography>

          <Link to="/directory" style={{ textDecoration: "none" }}>
            <Grid container>
              <MenuItem>
                <Grid row>
                  <ContactMailIcon
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

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/dashboard" style={{ marginLeft: "10px" }}>
              <MenuItem>
                <p style={{ color: "white" }}>Dashboard</p>
              </MenuItem>
            </Link>

            <Link to="/ticket">
              <MenuItem>
                <p style={{ color: "white" }}>TicketHub</p>
              </MenuItem>
            </Link>

            <Link to="/profile" color="white">
              <Grid container>
                <MenuItem>
                  <Grid row>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="secondary">
                        <NotificationsNoneSharpIcon
                          fontSize="large"
                          style={{
                            color: "white",
                            marginLeft: "5px",
                            marginTop: "20px"
                          }}
                        />
                      </Badge>
                    </IconButton>
                    <p
                      style={{
                        // marginLeft: "20px",
                        marginTop: "-15px",
                        color: "white",
                        fontWeight: "500",
                        fontSize: "12px"
                      }}
                    >
                      Notifications
                    </p>
                  </Grid>
                </MenuItem>
              </Grid>
            </Link>

            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Grid container>
                <MenuItem>
                  <Grid row>
                    <AccountCircleOutlinedIcon
                      fontSize="large"
                      style={{
                        color: "white",
                        marginLeft: "5px",
                        marginTop: "20px"
                      }}
                    />

                    <p
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "12px",
                        marginLeft: "5px",
                        marginTop: "0px"
                      }}
                    >
                      Profile
                    </p>
                  </Grid>
                </MenuItem>
              </Grid>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Fragment>
  );
};

AuthenticatedNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.isAuthenticated,
  loading: state.loading
});
export default connect(
  mapStateToProps,
  { logout }
)(AuthenticatedNavbar);
