import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  AppBar,
  Badge,
  MenuItem,
  Menu,
  Toolbar,
  InputBase,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuBookIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import PropTypes from "prop-types";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import Divider from "@material-ui/core/Divider";

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
    fontWeight: "700",
    fontSize: "22px",
    opacity: ".95"
  },
  search: {
    fontSide: "10px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    marginLeft: "10px",
    marginTop: "5px",
    height: "25px",
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

const AuthenticatedNavbar = ({
  logout,
  isAuthenticated,
  loading,
  activeTab,
  setActiveTab
}) => {
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

  // function handleMobileMenuOpen(event) {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // }

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
        <Link to="/profile/me" style={{ textDecoration: "none" }}>
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/ticket" style={{ textDecoration: "none" }}>
          Tickets
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
    <Grid container>
      <AppBar
        style={{ position: "fixed", padding: "0px", background: "#14171A" }}
      >
        <div>
          {/* Dropdown button with navlinks */}
          <div className={classes.grow} stye={{ marginBottom: "50px" }}>
            <Toolbar style={{ minHeight: "10px", maxHeight: "51px" }}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleProfileMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              {/* Search Section */}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  style={{ fontSize: "14px" }}
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
                <Divider orientation="vertical" />

                <Link
                  onClick={setActiveTab()}
                  to="/ticket"
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <MenuItem
                    style={{
                      maxHeight: "53px",
                      opacity:
                        window.location.href === "http://localhost:3000/ticket"
                          ? "1"
                          : ".75",
                      borderBottom:
                        window.location.href === "http://localhost:3000/ticket"
                          ? "3px inset #D3D3D3"
                          : ""
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        alignItems: "center",
                        fontSize:
                          window.location.href ===
                          "http://localhost:3000/ticket"
                            ? "18px"
                            : "16px",
                        fontWeight:
                          window.location.href ===
                          "http://localhost:3000/ticket"
                            ? "700"
                            : "400"
                      }}
                    >
                      TicketHub
                    </p>
                  </MenuItem>
                </Link>

                <Link
                  onClick={setActiveTab()}
                  to="/directory"
                  color="white"
                  style={{ paddingTop: "0px" }}
                >
                  <Grid container>
                    <MenuItem
                      style={{
                        maxHeight: "55px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        opacity:
                          window.location.href ===
                          "http://localhost:3000/directory"
                            ? "1"
                            : ".75",
                        borderBottom:
                          window.location.href ===
                          "http://localhost:3000/directory"
                            ? "3px inset #D3D3D3"
                            : ""
                      }}
                    >
                      <Grid row="true" style={{ maxHeight: "55px" }}>
                        <ImportContactsOutlinedIcon
                          fontSize="default"
                          style={{
                            color: "white",
                            marginTop: "7px",
                            marginLeft: "15px"
                          }}
                        />

                        <p
                          style={{
                            color: "white",
                            marginTop: "-12px",
                            fontSize:
                              window.location.href ===
                              "http://localhost:3000/directory"
                                ? "15px"
                                : "14px",
                            fontWeight:
                              window.location.href ===
                              "http://localhost:3000/directory"
                                ? "700"
                                : "400"
                          }}
                        >
                          Directory
                        </p>
                      </Grid>
                    </MenuItem>
                  </Grid>
                </Link>

                <Link
                  onClick={setActiveTab()}
                  to="/profile/me"
                  color="white"
                  style={{ paddingTop: "0px" }}
                >
                  <Grid container>
                    <MenuItem
                      style={{
                        maxHeight: "55px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        opacity:
                          window.location.href === "http://localhost:3000/form"
                            ? "1"
                            : ".75",
                        borderBottom:
                          window.location.href === "http://localhost:3000/form"
                            ? "3px inset #D3D3D3"
                            : ""
                      }}
                    >
                      <Grid row="true" style={{ maxHeight: "55px" }}>
                        <NotificationsNoneSharpIcon
                          fontSize="default"
                          style={{
                            color: "white",
                            marginTop: "7px",
                            marginLeft: "22px"
                          }}
                        />
                        <p
                          style={{
                            marginTop: "-12px",
                            color: "white",
                            fontSize:
                              window.location.href ===
                              "http://localhost:3000/form"
                                ? "15px"
                                : "14px",
                            fontWeight:
                              window.location.href ===
                              "http://localhost:3000/form"
                                ? "700"
                                : "400"
                          }}
                        >
                          Notifications
                        </p>
                      </Grid>
                    </MenuItem>
                  </Grid>
                </Link>

                <Link
                  onClick={setActiveTab()}
                  to="/profile/me"
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <Grid container>
                    <MenuItem
                      style={{
                        maxHeight: "55px",
                        opacity:
                          window.location.href ===
                          "http://localhost:3000/profile/me"
                            ? "1"
                            : ".75",
                        borderBottom:
                          window.location.href ===
                          "http://localhost:3000/profile/me"
                            ? "3px inset #D3D3D3"
                            : ""
                      }}
                    >
                      <Grid
                        row="true"
                        style={{
                          maxHeight: "55px"
                        }}
                      >
                        <AccountCircleOutlinedIcon
                          fontSize="default"
                          style={{
                            color: "white",
                            marginLeft: "10px",
                            marginTop: "7px"
                          }}
                        />
                        <p
                          style={{
                            color: "white",
                            marginTop: "-12px",
                            paddingLeft: "-20px",
                            fontSize:
                              window.location.href ===
                              "http://localhost:3000/profile/me"
                                ? "15px"
                                : "14px",
                            fontWeight:
                              window.location.href ===
                              "http://localhost:3000/profile/me"
                                ? "700"
                                : "400"
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
          </div>
        </div>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
    </Grid>
  );
};

AuthenticatedNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool
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
